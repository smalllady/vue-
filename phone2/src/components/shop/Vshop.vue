<template>
<section id="shop">   
    <nav>
        <i class="icon iconfont icon-fanhui" @click="goBack"></i>
        <div class="blur">
        <img :src="shopInfo.shop_img" alt="">                    
        </div>
    </nav>
    <section class="shopCon">
        <img :src="shopInfo.shop_img" alt="">        
        <h2>{{shopInfo.shop_name}}<i class="icon iconfont icon-sanjiao_right_s"></i></h2>
        <p><span>{{shopInfo.shop_score}}</span><span>月售{{shopInfo.shop_monthly_sales}}单</span><span>{{shopInfo.shop_distance_way}}</span><span>约{{shopInfo.shop_time}}分钟</span><span>距离{{shopInfo.shop_distance}}km</span></p>
    </section>
    <section class="activity">
        <dl @click="showAct">
            <dt>{{actNum}}个优惠<i class="icon iconfont icon-sanjiao_down"></i></dt>
            <dd v-for="(item,index) in activeList" :key="index">
                <em :class="item.act_type==0?'em1':item.act_type==1?'em2':'em3'">{{item.act_typeText}}</em>{{item.act_con}}                
            </dd>
        </dl>
    </section>
    <yd-popup v-model="show" position="bottom" height="40%">
        <div class="hdbox">
            <h2>优惠活动</h2>
            <ul>
                <li v-for="(item,index) in activeList" :key="index">
                    <em :class="item.act_type==0?'em1':item.act_type==1?'em2':'em3'">{{item.act_typeText}}</em>{{item.act_con}}
                </li>
            </ul>
        </div>
    </yd-popup>
    <section class="foods">
        <ul class="tabTit">
            <li v-for="(item,index) in paths"  :key="index" :class="{cur:curIndex==index}" @click="indexHandler(index)"><router-link :to="item.href"><span>{{item.title}}</span></router-link></li>
            <!-- <li><router-link to="/evaluate"><span>评价</span></router-link></li>
            <li><router-link to="/shopDetail"><span>商家</span></router-link></li> -->
        </ul>
    </section>
    <router-view />
    <footer>
        <div class="tips">满25减10，满50减25</div>
        <div class="cartBar">
            <yd-badge bgcolor="#ff6615" color="#FFF">{{totalCount}}</yd-badge>
            <span class="cartIcon" :class="{empty:totalCount=='0'}" @click="show1 = true">
                <i class="icon iconfont icon-cart"></i>
            </span>
            <div class="priceBox">
                <p>￥{{totalPrice}}</p>
                <p>配送费6</p>
            </div>
            <a href="javascript:;" class="btn" :class="{js:payDesc==='去结算'}" @click = "checkOut">{{payDesc}}</a>
        </div>
        <yd-popup v-model="show1" position="center" width="90%">
            <div class="clearCart">清空购物车<br><br>
                <a href="javascript:;" @click="clearHandler">确定</a>
            </div> 
        </yd-popup>
    </footer>
    
</section>
</template>

<script>
import api from '../../api/api'
export default {
  name: 'app',
  data(){
      return{
          paths:[
              {href:`/shop/${this.$route.params.shopId}`,title:'点餐'},
              {href:`/evaluate/${this.$route.params.shopId}`,title:'评价'},
              {href:`/shopDetail/${this.$route.params.shopId}`,title:'商家'}
          ],
          curIndex:0,
          shop_id:this.$route.params.shopId,
          show: false,
          minPrice:20,
          show1: false
      }
  },
  mounted(){
      //console.log(this.$store.state.index.shop)
      var json = {
          shop_id:this.$route.params.shopId
      }
      console.log(json, 'shopid coming...')
      this.$store.dispatch('getshopDetail',json);
      this.$store.dispatch('getAct',json);
      var allShopFoods =JSON.parse(sessionStorage.getItem(this.$route.params.shopId));
      var curShopFoods=JSON.parse(sessionStorage.getItem(this.$route.params.shopId));
      if(sessionStorage.getItem(this.$route.params.shopId)!==null){
          console.log(curShopFoods) 
          this.$store.commit("GETCURFOOD",curShopFoods)
      }
     
  },
  methods: {
    goBack () {
        window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    indexHandler(index){
            this.curIndex = index;
            
    },
    showAct(){
        this.show=!this.show;

    },
    checkOut(){
        // 2018-01-03 02:17:17
        function getTime(){
            function p(s) {
                return s < 10 ? '0' + s: s;
            }
            let myDate = new Date();
            //获取当前年
            let year=myDate.getFullYear();
            //获取当前月
            let month=myDate.getMonth()+1;
            //获取当前日
            let date=myDate.getDate(); 
            let h=myDate.getHours();       //获取当前小时数(0-23)
            let m=myDate.getMinutes();     //获取当前分钟数(0-59)
            let s=myDate.getSeconds();  
            let nowStr=year+'-'+p(month)+"-"+p(date)+"T"+p(h)+':'+p(m)+":"+p(s);
            return nowStr;
            // yyyy-MM-ddThh:mm
        }
        var time = getTime()
        var json = {
            shop_id:this.$route.params.shopId,
            order_img:this.$store.state.index.shop.shop_img,
            order_title:this.$store.state.index.shop.shop_name,
            order_state:'订单已完成',
            order_time:time,
            order_num:this.totalCount,
            order_foodname:this.orderFoodName,
            order_price:this.totalPrice,
            username:api.getCookie('user')
        }
        console.log(json)
        if(api.getCookie('user')===false){
            this.$dialog.notify({
                mes: '您还没有登陆，请登录',
                timeout: 1000,
                callback: () => {
                    this.$router.push('/login')
                }
            });
            
        }else{
            this.$store.dispatch('order',json)
            this.$dialog.notify({
                mes: '下单成功',
                timeout: 1000,
                callback: () => {
                    this.$router.push('/order')
                }
            });
            
        }
        
    },
    clearHandler(){
        this.show1 = !this.show1
        sessionStorage.removeItem(this.$route.params.shopId);
        this.$store.state.index.curFoods.splice(0,this.$store.state.index.curFoods.length)
    }
  },
  computed: {
    shopInfo(){
        return this.$store.state.index.shop
    },
    activeList(){
        return this.$store.state.index.allHd
    },
    actNum(){
        var obj = this.$store.state.index.allHd;
        var arr = Object.keys(obj);
        return arr.length 
    },
    totalCount(){
        if(this.$store.state.index.curFoods.length!=0){
            var obj = this.$store.state.index.curFoods;
            var arr = Object.keys(obj);
            return arr.length   
        }else{
            return 0
        }     
    },
    totalPrice(){
        let total = 0;
        this.$store.state.index.curFoods.forEach((food)=>{
            total+=food.food_price
            console.log(food)
        })
        return total
    },
    payDesc() {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差￥${diff}元起送`;
        } else {
          return '去结算';
        }
    },
    orderFoodName(){
        let foodname='';
        let obj={};
        let newArr = [];
        this.$store.state.index.curFoods.forEach((food)=>{
            foodname+=food.food_name+' '
        })
        let foodNameArr = foodname.split(" ")
        foodNameArr.pop();
        //去除已点商品的重复项
        for(let i=0;i<foodNameArr.length;i++){
            var cur = foodNameArr[i];
            if(obj[cur]!==cur){
                newArr.push(cur)
            }
            obj[cur]=cur;
        }

        console.log(newArr);
        return newArr
    }
  }
}
</script>

<style scoped>
#shop{
    background-color: #fff
}
#shop nav{
    width:100%;
    height: 1.4rem;
    position: relative;
    overflow: hidden;
}
#shop .blur{
    width: 24rem;
    height: 32rem;
    position: absolute;
    left: -3rem;
    top: -11rem;
}
#shop .blur img{
    width: 100%;
    height: 100%;
    filter: blur(2rem);
    -webkit-filter: blur(2rem);
    opacity: 0.9;
}
#shop nav i{
    font-size: 0.7rem !important;
    position: absolute;
    left: 0.2rem;
    top:0.4rem;
    color: #fff;
    z-index: 3;
}
.shopCon{
    padding: 0.7rem 0 0.5rem 0;
    background-color: #fff;
    position: relative;
}
.shopCon img{
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    top: -0.9rem;
    left: 50%;
    margin-left: -0.65rem;
    z-index: 2;
    box-shadow: 0 0.3rem 0.6rem rgba(255,255,255,0.25);
}
.shopCon h2{
    font-size: 0.4rem;
    text-align: center;
    margin-bottom: 0.2rem;
    font-weight: 700
}
.shopCon h2 i{
    font-size: 0.4rem !important
}
.shopCon p{
    font-size: 0.22rem;
    text-align: center;
    color: #666
}
.shopCon p span{
    margin: 0 0.1rem
}
.activity{
    background-color: #fff;
    padding:0 0.5rem;
    padding-bottom: 0.6rem
}
.activity dl{
    height: 0.5rem;
    overflow: hidden;
    border:1px solid #ddd;
    display: block;
    position: relative;
    padding: 0.1rem
}
.activity dt{
    position: absolute;
    right: 0;
    top:0.05rem
}
.activity dd{
    margin-bottom: 0.1rem;
}
#shop em{
    width:0.3rem;
    height: 0.3rem;
    line-height: 0.3rem;
    display: inline-block;
    color: #fff;
    text-align: center;
    font-size: 11px;
    margin-right: 0.2rem;
    border-radius: 0.05rem
}
#shop em.em1{
    background-color: #e9470c;
}
#shop em.em2{
    background-color: #70bc46;
}
#shop em.em3{
    background-color: #4885ea;
}
.tabTit{
    display: flex;
    line-height: 0.8rem;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 0.2rem

}
.tabTit li{
    flex: 1;
    text-align: center
}
.tabTit li span{
    display: inline-block;
    border-bottom: 2px solid #fff;
    font-size: 0.3rem;
    font-weight: 700;
    padding: 0 0.1rem;
}
.tabTit li.cur span{
    border-bottom: 2px solid #2395ff;
}
.tips{
    height: 0.4rem;
    background-color: #fffad6;
    border-top: 1px solid #f9e8a3;
    font-size: 12px;
    text-align: center;
    line-height: 0.4rem;
}
footer{
    width: 100%;
    height: 1.3rem;
    position: fixed;
    bottom: 0;
    z-index: 10;
    background-color: #fff
}
.cartBar{
    width: 100%;
    box-sizing: border-box;
    height: 0.9rem;
    background-color: rgba(61,61,63,.9);
    padding-left: 1.6rem;
}
.priceBox{flex: 1}
footer .btn{
    background-color: #535356;
    width:2rem;
    height: 0.9rem;
    display: block;
    text-align: center;
    position: absolute;
    right: 0;
    top:0.4rem;
    color: #fff;
    line-height: 0.9rem;
    font-size: 0.3rem
}
footer .btn.js{
    background-color: #3190e8
}
footer .cartIcon{
    position: absolute;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #3190e8;
    box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
    will-change: transform;
    padding: 0.15rem;
    left: 0.3rem;
    top:0.13rem;
    border: 5px solid #444444
}
footer .cartIcon i{
    font-size: 0.5rem !important;
    color: #fff
}
footer .cartIcon.empty{
    background-color: #363636;
}
footer .cartIcon.empty i{
    color: #5f5f64;
}
.priceBox p:first-child{
    color: #fff;
    font-size: 0.4rem;
    padding-top: 0.1rem;
    margin-bottom: 0.1rem
}
.priceBox p:last-child{
    color: #fff;
    font-size: 0.2rem
}
.hdbox{
    padding-top: 1rem;
}
.hdbox h2{
    text-align: center;
    margin-bottom: 0.4rem;
    font-size: 0.4rem;
    font-weight: 700
}
.hdbox ul li{
    padding-left: 0.8rem;
    font-size: 0.3rem;
    margin-bottom: 0.2rem
}
.clearCart{
    padding:0.6rem 0.5rem;
    text-align: center;
    font-size: 0.4rem
}
.clearCart a{
    background-color: #3190e8;
    color:#fff;
    width:100%;
    font-size: 0.3rem;
    display: inline-block;
    padding: 0.2rem 0;
    border-radius: 0.05rem
}
</style>
