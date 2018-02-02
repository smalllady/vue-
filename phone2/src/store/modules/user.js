import api from '../../api/api';
const state = {
    user:{},
    regState:{
        state:'',
        message:''
    },
    logState:{
        state:'',
        message:''
    }
};

const getters = {

};

const mutations = {
    REGISTER(state,data){
        state.user = data.user;
        state.regState = data.regState
    },
    USERLOGIN(state,data){
        state.user = data.user;
        state.logState = data.logState
    }
};

const actions = {
    register(context,data){
        api.registeUser(data,function(res){
            console.log(res)
            context.commit('REGISTER',{user:data,regState:res})
        })
    },
    userLogin(context,data){
        api.signIn(data,function (res) {
            context.commit('USERLOGIN',{user:data,logState:res})
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}