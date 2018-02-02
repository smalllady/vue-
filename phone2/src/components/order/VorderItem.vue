<template>
<div class="orderItem">
    <li>
        <img :src="orders.order_img">
        <h2><span class="fr">{{orders.order_state}}</span>{{orders.order_title}}</h2>
        <p class="time">{{orderTime}}</p>
        <p class="price"><span class="fr"><strong>￥{{orders.order_price}}</strong></span>{{fdList[0]}}等{{orders.order_num}}件商品</p>
        <p class="btnl">
            <yd-button type="hollow" class="fr orgBtn">评价得金币</yd-button>            
            <yd-button type="hollow" class="fr blueBtn">再来一单</yd-button>
        </p>
    </li>
</div>
</template>
<script>
import moment from 'moment'
export default {
    name: "VorderItem",
    data () {
        return {
        }
    },
    props: {
        orders:Object
    },
    computed: {
        fdList(){
            var foodStr = this.orders.order_foodname;
            var foodArr = foodStr.split(",")
            // console.log(foodStr.split(","))
            return foodArr
        },
        orderTime(){
            let t = this.orders.order_time;
            let time = moment(`${t}`).format('YYYY-MM-DD HH:mm:ss');
            return time
        }
    }
}
</script>
<style scoped>
.orderItem li{
    position: relative;
    padding:0.2rem 0.2rem 0.2rem 1.68rem; 
    margin-bottom: 0.2rem;
    background-color: #fff
}
.orderItem li img{
    width:1.28rem;
    height: 1.28rem;
    position: absolute;
    left: 0.2rem;
}
.orderItem li h2{
}
.time{
    color: #999; 
    padding: 0.2rem 0;
    border-bottom: 1px solid #f5f5f5;
}
.price{
    padding: 0.2rem 0;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 0.2rem
}
.btnl{
    overflow: hidden;
}
.btnl button{
    margin-left: 0.15rem
}
.btnl .blueBtn{
    border-color: #2395ff;
    color: #2395ff
}
.btnl .orgBtn{
    border-color: #ff5339;
    color: #ff5339
}

</style>