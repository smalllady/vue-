<template>
    <div class="shopItem"> 
        <li :id='shopId'>
            <router-link :to="path">
                <img :src="shops.shop_img" />
                <h2><span class="fr" :class="{hide:shops.shop_distance_way==''}">{{shops.shop_distance_way}}</span>{{shops.shop_name}}</h2>
                <p class="pf">
                    <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                    <span class="xl">月售{{shops.shop_monthly_sales}}单</span>
                </p>
                <p class="ps">
                    <span class="fr">{{shops.shop_distance}}km&nbsp;&nbsp;|&nbsp;&nbsp;{{shops.shop_time}}分钟</span>
                    <span>¥{{shops.shop_start_price}}起送</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>配送费¥{{shops.shop_distribution_price}}</span>
                </p>
            </router-link>
            <div class="hd">
                <dl class="hdBox">
                    <dt>3个活动<i class="icon iconfont icon-sanjiao_down"></i></dt>
                    <dd v-for="(item,index) in huodonglist" :key="index" >
                        <em class="em1">首</em>{{item}}
                        <!-- <em :class="item.act_type==0?'em1':item.act_type==1?'em2':'em3'">{{item.act_typeText}}</em>{{item.act_con}} -->
                    </dd>
                </dl>
            </div>
        </li>
    </div>
</template>
<script>
import $ from 'jquery';
$(function(){
        $('.hd').click(function(){
        $(this).children('dl').toggleClass('hdBox')
    })
})
export default {
    name: "VshopItem",
    data () {
        return {
            path:'/shop/'+this.curShopId,
            huodong:this.shops.shop_activities,
            shopId:this.curShopId,
            value5: this.shops.shop_score

        }
    },
    computed: {
      huodonglist(){
        let hdlist=this.huodong
        let hdObj=eval("("+hdlist+")");
        return hdObj;
      }
    },
    props: {
        shops:Object,
        curShopId:Number
    },
    methods: {
        
    }
}
</script>
<style scoped>
.shopItem li{
    position: relative;
    border-bottom:1px solid #e9e9e9;
    padding: 0.3rem 0 0.3rem 1.5rem; 
}
.shopItem li img{
    position: absolute;
    width:1.3rem;
    left: 0;
}
.shopItem li h2 span{
    color: #fff;
    background-color: #4885ea;
    padding: 0.05rem;
}
.yd-cell-item{
    padding-left: 0 !important;
}
.pf{
    position: relative;
    height: 0.5rem;
    width: 100%;
    margin-bottom: 0.1rem;
}
.pf span{
    
    font-size: 10px
}
.pf .yd-cell-item{
    position: absolute;
    left: -0.1rem;
    top: -0.2rem;
    
}
.pf .xl{
    position: absolute; left: 2rem; top:0.16rem
}
.ps{
    color: #999;
    height:0.5rem;
    position: relative;
    margin-bottom: 0.2rem;
}
.ps:after{
content:'';
display: block;
width:100%;
height: 1px;
background-color: #e9e9e9;
transform: scale(1,0.5);
transform-origin: center bottom;
position: absolute; 
bottom: 0
}
.hd dt{
    text-align: right;
    color: #999;
    display: block
}
.hd dd{
    margin-bottom: 0.1rem
}
.hd dd em{
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
.hd dd em.em1{
    background-color: #e9470c;
}
.hd dd em.em2{
    background-color: #70bc46;
}
.hd dd em.em3{
    background-color: #4885ea;
}
.hd dl.hdBox{
    height: 1.1rem;
    overflow: hidden;
}
.hide{
    display: none
}

</style>