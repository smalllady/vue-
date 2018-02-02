<template>
    <section style="height: 500px; overflow-y: auto; position: relative;">
        <yd-scrolltab>
            <yd-scrolltab-panel v-for="(item,index) in allFoods" :label="item.typeName" :key="index" icon="demo-icons-category1">            
                <ul class="foodList">
                    <li :id="item.food_id">
                        <img :src="item.food_img" alt="">
                        <h2>{{item.food_name}}</h2>
                        <p><span class="sale">月售{{item.food_sellCount}}份</span><span class="rate">好评率{{item.food_rating}}</span></p>
                        <p class="numHandler">
                            <span class="cartBtn">
                                <!-- <a href="javascript:;" class="minus">-</a><input type="text" class="numbox" :value="sipleNum"> -->
                                <a href="javascript:;" class="add" @click = "addHandler(index,item.food_id)">+</a>
                            </span>
                            <span class="price"><em>￥{{item.food_price}}</em> 起</span>
                        </p>
                    </li>
                </ul>
            </yd-scrolltab-panel>
        </yd-scrolltab>
    </section>
</template>
<script>
import $ from 'jquery'
export default {
    name: "Vfoods",
    data () {
        return {
            orderFood:[]
        }
    },
    beforeUpdate () {
        
        console.log('vshop beforeupadta coming...')
    },
    mounted(){
        console.log('vshop mounted .....')
        var json={
            shop_id:this.$route.params.shopId,
        }
        console.log(json)
        // this.$store.dispatch('getFdtype',json);
        this.$store.dispatch('getAllfoods',json)
    },
    methods: {
        addHandler(index,id){
            var foodInfo = {
                food_id : id,
                index:index,
                food_name:this.$store.state.index.allfoods[index].food_name,
                food_price:this.$store.state.index.allfoods[index].food_price
            }
            if(sessionStorage.getItem(this.$route.params.shopId)!=null){
                let historyfood=JSON.parse(sessionStorage.getItem(this.$route.params.shopId));
                this.orderFood=historyfood;
                this.orderFood.push(foodInfo)              
                this.$store.commit("GETCURFOOD",this.orderFood)
                
            }else{
                this.orderFood.push(foodInfo)              
                this.$store.commit("GETCURFOOD",this.orderFood)
            }
            var str = JSON.stringify(this.orderFood)
            sessionStorage.setItem(this.$route.params.shopId,str)          
        }
    },
    computed: {
        foodtype(){
            var foodArr = this.$store.state.index.foodType;
            return foodArr
        },
        foods(){
            return this.$store.state.index.foods
        },
        allFoods(){
            return this.$store.state.index.allfoods
        },
        sipleNum(){
            let siple = 0;
            let foodIds='';
            this.$store.state.index.curFoods.forEach((food)=>{
                foodIds+=food.food_id+' ';
            })
            foodIds = foodIds.split(" ");
            foodIds.pop();
            return 0
        }
    }
}
</script>
<style scoped>
.foodList li{
    position: relative;
    padding-left: 1.7rem;
    height: 1.5rem;
    margin-bottom: 0.6rem;
}
.foodList li h2{
    font-size: 0.3rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
}
.foodList li img{
    width: 1.5rem;
    position: absolute;
    left: 0;
}
.cartBtn{
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
}
.add,.minus {
    width:0.4rem; 
    height: 0.4rem;
    border-radius: 50%;
    color: #fff;
    display: inline-block;
    border:1px solid #2395ff;
    background-color: #2395ff;
    font-weight: 600;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.3rem;
    
}
.cartBtn em{
    display: inline-block;
    padding: 0 0.1rem;
}
.minus{
    background-color: #fff;
    border:1px solid #2395ff;
    color: #2395ff;
}
.price{
    width: 100%;
    position: absolute;
    bottom: 0;
    font-size: 0.2rem;
    color: #f60;
}
.price em{
    font-size: 600;
    font-size: 0.33rem;
}
.numbox{
    border: none;
    width:0.5rem; 
    height: 0.2rem;
    text-align: center;
}
.numHandler{

}
</style>