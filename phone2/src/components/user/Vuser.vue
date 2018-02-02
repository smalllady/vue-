<template>
    <section id="main">
        <div id="user">
            <div class="userTop">
                <img src="https://fuss10.elemecdn.com/3/4e/18ee531652517eee31eb92555ccc1jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/">
                <h2>{{defaultMsg}}</h2>
                <!-- <p>{{defaultTel}}</p> -->
                <router-link to="/login"><i class="icon iconfont icon-right"></i></router-link>                    
            </div>
            <div class="userCon">
                <img src="../../../static/images/user.png" alt="" srcset="">
                <yd-button size="large" @click.native="signOut" type="hollow">注销</yd-button>
            </div>
            
            
        </div>
    </section>  

</template>
<script>
import Vheader from '../header/Vheader';
import Vfooter from '../footer/Vfooter';
import api from '../../api/api';
export default {
    name: "Vuser",
    data () {
        return {
            defaultName:'登录/注册',
            defaultTel:'登录后享受更多特权'
        }
    },
    mounted () {
        console.log(this.$store.state.user.user.length)
    },
    computed: {
        defaultMsg(){
            if(JSON.stringify(this.$store.state.user.user) == "{}")
            {
               return '登录/注册';
            }else{
               return `欢迎${this.$store.state.user.user.username}登录` ;
            }
        }
    },
    methods: {
      signOut(){
          api.setCookie('user', "", -1);
          this.$store.state.user.user={};
          this.$store.state.user.logState.message=''
      }  
    },
    components: {
        Vheader,
        Vfooter,
    }
}
</script>
<style scoped>
#user .userTop{
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 0.8rem 0.2rem;
    color: #fff;
    font-size: 20px;
    position: relative;
    padding-left: 1.8rem
}
.userTop img{
    position: absolute; 
    width:1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    left: 0.3rem;
}
.userTop h2{
    margin-top: 0.2rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
}
.userTop p{
    font-size: 12px;
}
.userTop i{
    position: absolute;
    right: 0.4rem;
    top:1.2rem
}
.userCon{
    width:100%
}
.userCon img{
    width: 100%
}
</style>