<template>
    <footer>
        <ul>
            <li v-for="(item,index) in routes" :key="index" :class="{active:currentIndex==index}" @click="indexHandler(index)"><router-link :to="item.href"><i class="icon iconfont" :class="item.classname"></i><span>{{item.title}}</span></router-link></li>
            <!-- <li><router-link to=""><i class="icon iconfont icon-faxian"></i><span>发现</span></router-link></li>
            <li><router-link to=""><i class="icon iconfont icon-order"></i><span>订单</span></router-link></li>
            <li><router-link to=""><i class="icon iconfont icon-user"></i><span>我的</span></router-link></li> -->

        </ul>
    </footer>
</template>
<script>

export default {
    name: "Vfooter",
    data () {
        return {
            routes:[
                {href:'/',title:'首页',classname:'icon-logo'},
                {href:'/discover',title:'发现',classname:'icon-faxian'},
                {href:'/order',title:'订单',classname:'icon-order'},
                {href:'user',title:'我的',classname:'icon-user'}
            ],
            currentIndex:0  
                    
            }
    },
    created () {
      for(var i = 0;i<this.routes.length;i++){
      if (this.routes[i].href===this.$route.path) {
        this.currentIndex = i;
        return;
      }
    }  
    },
    methods:{
        indexHandler(index){
            this.currentIndex = index;
        }
    }
}
</script>
<style scoped>
footer{
    width: 100%; 
    background-color: #fff;
    height: 1.2rem;
    box-sizing: border-box;
    font-size: 0.3rem;

}
footer ul{
    display: flex
}
footer ul li{
    flex: 1;
    text-align:center;
}
footer ul li span{
    display: block;
    color: #8e8e93
}
footer ul li i{
    color: #8e8e93;
    font-size: 0.8rem !important;
}

.active span{
    color:#0089dc
}
.active i{color:#0089dc !important}

</style>