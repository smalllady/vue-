import Vue from 'vue';
import Vuex from 'vuex';

// 引入index、user模块
import index from './modules/index';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        index,
        user
    }
});