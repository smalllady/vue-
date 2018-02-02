<template>
<div class="shopList">
    <h2 class="sTit">—— 推荐商家 ——</h2>
    <ul>
        <VshopItem v-for="(item,index) in allshops" :shops="item" :key="index" :curShopId='item.shop_id'></VshopItem>
    </ul>
</div>
</template>
<script>
import VshopItem from '../shop/VshopItem'
export default {
    name: "shopList",
    data () {
        return {
        }
    },
    computed: {
        allshops(){
            return this.$store.state.index.allShops
        }
    },
    
    components:{
        VshopItem
    }
}
</script>
<style scoped>
.shopList{
    padding:0 0.2rem 0.2rem 0.2rem;
    background-color: #fff
}
.sTit{
    text-align: center;
    padding:0.2rem 0 0.1rem 0;
    margin-bottom: 0.2rem
}
</style>