import api from '../../api/api';

const state = {
    allShops:[],
    shop:{},
    foodType:[],
    foods:[],
    allHd:{},
    allfoods:[],
    num:0,
    orderFoods:[],
    curFoods:[],
    orderState:{},
    orderList:[]
};

const getters = {

};

const mutations = {
    GETSHOPSLIST(state,data){
        state.allShops = data;
    },
    GETFDTYPE(state,data){
        state.foodType=data
    },
    GETFOODS(state,data){
        state.foods = data
    },
    GETSHOPDETAIL(state,data){
        state.shop = data
        console.log(state.shop)
    },
    GETACT(state,data){
        state.allHd=data
    },
    GETALLFOODS(state,data){
        state.allfoods = data
    },
    GETORDERFOODS(state,data){
        state.orderFoods = data
    },
    GETCURFOOD(state,data){
        state.curFoods = data
    },
    // ORDER(state,data){
    //     state.orderState = data
    // },
    GETORDERS(state,data){
        state.orderList = data
    }
};

const actions = {
    getShopsList(context){
        api.getShops(function(res){
            context.commit('GETSHOPSLIST',res.data)
        })
    },
    getFdtype(context,shop_id){
        api.getFoodtype(shop_id,function(res){
            context.commit('GETFDTYPE',res.data)
            console.log(res.data)
        })
    },
    getFoods(context,data){
        api.getFood(data,function(res){
            context.commit('GETFOODS',res.data)
        })
    },
    getAllfoods(context,data){
        api.getAllFood(data,function(res){
            context.commit('GETALLFOODS',res.data)
        })
    },
    getshopDetail(context,shop_id){
        api.getShopInfo(shop_id,function(res){
            context.commit('GETSHOPDETAIL',res.data[0])
            console.log(res.data)
        })
    },
    getAct(context,shop_id){
        api.getActList(shop_id,function(res){
            context.commit('GETACT',res.data)
        })
    },
    order(context,orderInfo){
        api.creatOrder(orderInfo,function(res){
            // context.commit('ORDER',res.data)
            console.log(res.data)
        })
    },
    getOrders(context,username){
        api.getorder(username,function(res){
            context.commit('GETORDERS',res.data);
            console.log(res.data)
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}