<template>
    <section id="main">
        <div id="order">
            <ul v-if="isOrderShow">
                <VorderItem v-for="(item,index) in orderList" :orders="item" :key="index"></VorderItem>
            </ul>
            <div class="tc" v-if="isLogTipsShow">
                <a href="/login"><img src="../../../static/images/order.png" class="ordimg"></a>                
            </div>
        </div>
    </section>  

</template>
<script>
import api from '../../api/api'
import VorderItem from '../order/VorderItem'
export default {
    name: "Vorder",
    data () {
        return {
            isOrderShow:false,
            isLogTipsShow:true
        }
    },
    mounted () {
        if(api.getCookie('user')===false)
        {
            this.isOrderShow=false
            this.isLogTipsShow=true
        }else{
            this.isOrderShow=true
            this.isLogTipsShow=false

            var json = {
                username:api.getCookie('user')
            }
            this.$store.dispatch('getOrders',json)
        }
        
    },
    computed: {
        orderList(){
            return this.$store.state.index.orderList
        }
    },
    components: {
        VorderItem
    }
}
</script>
<style scoped>
#order ul{
}
.ordimg{
    width:90%;
    margin: 0 auto
}
</style>