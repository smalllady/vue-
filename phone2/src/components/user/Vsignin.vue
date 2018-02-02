<template>
<section class="login">
    <div class="logo"><img src="../../../static/images/logo.gif"></div>
    <div class="tabTit">
        <ul>
            <li v-for="(item,index) in paths" :key="index" @click="indexHandler(index)" :class="{cur:curIndex==index}"><router-link :to="item.href"><span>{{item.title}}</span></router-link></li>
        </ul>
    </div>
    <router-view></router-view>
</section>
</template>
<script>
export default {
    name: "Vsignin",
    data () {
        return {
            paths:[
              {href:'/login',title:'登录'},
              {href:'/register',title:'注册'},
          ],
          curIndex:0
        }
    },
    created () {
      for(var i = 0;i<this.paths.length;i++){
        if (this.paths[i].href===this.$route.path) {
            this.curIndex = i;
            return;
        }
      }  
    },
    methods: {
        indexHandler(index){
            this.curIndex = index;
        }
    }
}
</script>
<style scoped>
.login{
    background-color: #fff;
    height: 100%;
}
.logo{
   padding: 0.5rem 0;
    text-align: center;
}
.logo img{
    width: 3.4rem;
}
.tabTit{
    text-align: center;
}
.tabTit ul{
    display: flex;
}
.tabTit li{
    flex: 1
}
.tabTit li span{ 
    margin:0  0.5rem 0 0.4rem; 
    border-bottom: 2px solid #fff;
    display: inline-block;
    padding:0 0.2rem  0.1rem 0.2rem;
    font-size: 0.3rem
}
.tabTit li.cur span{
     border-bottom: 2px solid #2395ff;
}

</style>