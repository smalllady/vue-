<template>
    <div class="formBox">
        {{msg}}        
        <form action="" v-on:submit.prevent>
            <section class="inputBox">
                <input type="text" name="" id="username" placeholder="用户名" v-model="userName">
            </section>
            <section class="inputBox">
                <input type="password" name=""  id="password" placeholder="密码" v-model="passWord">
            </section>
            <button @click="registerHandler" class="btnstyle">注册</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "Vregister",
    data () {
        return {
            userName:'',
            passWord:'',
            tipShow:false
        }
    },
    methods: {
        registerHandler(){
            var json={
                username:this.userName,
                password:this.passWord
            }
            var regName=/^\w{8,12}$/;            
            if(this.userName!==''&&this.passWord!==''){
                if(regName.test(this.userName)){
                    this.$store.dispatch('register',json);   
                }else{
                    this.$dialog.notify({
                        mes: '用户名必须是长度8-12 并且只能够是字符',
                        timeout: 1000,
                        callback: () => {
                            console.log('我走咯！');
                        }
                    });
                    return false;
                }    
            }else{
                    this.$dialog.notify({
                    mes: '用户名密码不能为空',
                    timeout: 1000,
                    callback: () => {
                        console.log('我走咯！');
                    }
                });
            }
            
        },
    },
    computed: {
        state(){
            return this.$store.state.user.regState.state
        },
        msg(){
            if(this.$store.state.user.regState.message!==''){
                this.$dialog.notify({
                    mes: this.$store.state.user.regState.message,
                    timeout: 1000,
                    callback: () => {
                        this.$store.state.user.regState.message=''
                        this.userName='';
                        this.passWord=''
                        // this.$router.push('/login')
                    }
                });
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