<template>
    <div class="formBox">
        {{showMag}}
        <form action=""  v-on:submit.prevent>
            <section class="inputBox">
                <input type="text" name="" id="username" placeholder="用户名" v-model="username">
            </section>
            <section class="inputBox">
                <input type="password" name=""  id="password" placeholder="密码" v-model="password">
            </section>
            <button class="btnstyle" @click="loginHandler">登录</button>
        </form>
    </div>
</template>
<script>
import api from '../../api/api';
export default {
    name: "Vlogin",
    data () {
        return {
            username:this.$store.state.user.user.username,
            password:this.$store.state.user.user.password
        }
    },
    methods: {
        loginHandler(){
            var json = {
                username:this.username,
                password:this.password
            }
            this.$store.dispatch('userLogin',json)
        }
    },
    computed: {
         showMag(){
             var state =this.$store.state.user.logState.state
             var msg = this.$store.state.user.logState.message
             if(msg!==''){
                 if(state==='noOk'){
                     this.$dialog.notify({
                        mes: msg,
                        timeout: 1000,
                        callback: () => {
                            this.$store.state.user.logState.message=''
                            this.username='';
                            this.password=''
                        }
                    });
                 }
                 else if(state ==="ok"){
                     this.$dialog.notify({
                        mes: msg,
                        timeout: 1000,
                        callback: () => {                            
                            api.setCookie("user",this.$store.state.user.user.username,600);
                            this.$router.push('/user')
                        }
                    });
                 }
                
            }
         }
    }
}
</script>
<style scoped>
.formBox{
    padding: 0 0.5rem
}
.formBox .inputBox{
    position: relative;
    margin-top: 0.3rem;
    height: 48px;
    font-size: 14px;
    background: #fff;
}
.formBox .inputBox>input{
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    -webkit-appearance: none;
}
.btnstyle{
    width:100%;
    height: 1rem;
    background-color: #2395ff;
    color: #fff;
    font-size: 0.4rem;
    border: none;
    margin-top: 0.3rem;
    border-radius: 4px;
}
</style>