<template>
    <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  mounted(){
    if(this.$store.state.index.allShops.length===0){
      this.$store.dispatch('getShopsList');
    }
    
  },
  components: {
   
  }
}
</script>

<style>
#app{
  height: 100%;
}
#wraper{
  display: flex;
  flex-direction: column;
  height: 100%; 
}
#main{
  flex: 1;
  overflow: auto
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
.yd-scrolltab-item{
    /* height: auto; */
    padding: 0.1rem 0.3rem;
    /* align-items: inherit; */
    line-height: 0.4rem;
}
.yd-scrolltab-title{
    text-overflow:inherit;
    white-space:inherit;
    font-size: 0.25rem;
}
.yd-scrolltab-content-title{
    padding-bottom: 0.2rem;
    font-size: 0.25rem;
}
.yd-scrolltab-content{
  padding-bottom: 1.3rem;
}
#shop footer .yd-badge{
  position: absolute;
  left: 0.95rem;
  top:0.1rem;
  z-index: 9;
}
.shopItem .el-rate__icon{
    font-size: 10px !important;
    margin-right: 2px
}
.shopItem .el-rate__text{
  color: #333 !important;
  font-size: 12px;
}
.shopItem .el-rate{
  padding-top: 0.06rem;
}
</style>
