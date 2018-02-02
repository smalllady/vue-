<template>
    <header>
        <section v-if="$route.path === '/home'">
            <div class="location">
                <i class="icon iconfont icon-location"></i>东城区北京市政府<i class="icon iconfont icon-sanjiao_down"></i>
            </div>
            <div class="searchBox">
                <input type="text" name="" id="" placeholder="搜索">
            </div>
        </section>

        <section v-if="$route.path !== '/home'">
            <div class="title">
                <i class="icon iconfont icon-fanhui" @click="goBack"></i> {{label()}}   
            </div>
        </section>
        
        
    </header>
</template>

<script>
import Vue from 'vue';
export default {
    name: "Vheader",
    data () {
        return {
           
        }
    },
    mounted(){
        
    },
    methods:{
        label(){
            let _obj = {
                '/home':'首页',
                '/discover':'发现',
                '/order':'订单',
                '/user':'我的'
            }
            var _t = location.pathname;
            return _obj[_t];
        },
        goBack () {
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
        }
    }
}
</script>

<style scoped>
header{
    width: 100%; 
    box-sizing: border-box;
    padding:0 0.2rem; 
    background-color: #0085ff;
}
.location{
    padding-top:0.2rem;
    color: #fff;
    font-size: 0.3rem;
 
}
.location i{
    vertical-align: middle;
    font-size: 0.4rem !important
}
.searchBox{
    padding:0.2rem 0;
    height: 1rem;
    position: relative;
}
.searchBox input{
    border: none;
    background-color: #fff;
    width: 100%;
    height: 0.6rem;
    position: absolute;
    top:0.2rem;
    box-sizing: border-box;
    padding-left: 0.2rem;
}
.title{
    width:100%;
    color: #fff;
    height: 0.8rem;
    position: relative;
    text-align: center;
    font-size: 0.4rem; 
    line-height: 0.8rem;
}
.title i{
    font-size: 0.7rem !important;
    position: absolute;
    left: -0.1rem;
    top:0
}
.title a{
    color:#fff
}
   
</style>