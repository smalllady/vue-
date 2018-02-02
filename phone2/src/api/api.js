import axios from 'axios';

export default {
    //获取所有商家
    getShops(callback){
        axios.get('http://127.0.0.1:3000/getShops')
        .then(res=>{
            callback(res);
        })
        .catch(err=>{
            console.log(err)
        })
    },
    getFoodtype(data,callback){
        console.log(data.shop_id)
        var params = new URLSearchParams();
        params.append('shop_id', data.shop_id);
        axios({
            url:'http://localhost:3000/getFoodType',
            method:'post',
            transformRequest: [function (data) {
                // 对 data 进行任意转换处理
             //    console.log(typeof data,data)
                 return data
              }],
             data:params,
         }).then(function(response){
            console.log(response)
         //    var user = response.data; //后台返回的数据
            callback(response)
        })
    },
    getFood(data,callback){
        var params = new URLSearchParams();
        params.append('shop_id', data.shop_id);
        params.append('type', data.type);
        axios({
            url:'http://localhost:3000/getFoods',
            method:'post',
            transformRequest: [function (data) {
                // 对 data 进行任意转换处理
             //    console.log(typeof data,data)
                 return data
              }],
             data:params,
         }).then(function(response){
            console.log(response)
         //    var user = response.data; //后台返回的数据
            callback(response)
        })
    },
    getAllFood(data,callback){
        var params = new URLSearchParams();
        params.append('shop_id', data.shop_id);
        axios({
            url:'http://localhost:3000/getAllFoods',
            method:'post',
            transformRequest: [function (data) {
                // 对 data 进行任意转换处理
             //    console.log(typeof data,data)
                 return data
              }],
             data:params,
         }).then(function(response){
            console.log(response)
         //    var user = response.data; //后台返回的数据
            callback(response)
        })
    },
    getShopInfo(data,callback){
        var params = new URLSearchParams();
        params.append('shop_id', data.shop_id);
        axios({
            url:'http://localhost:3000/getShopInfo',
            method:'post',
            transformRequest: [function (data) {
                 return data
              }],
             data:params,
         }).then(function(response){
            console.log(response)
            callback(response)
        })
    },
    getActList(data,callback){
        var params = new URLSearchParams();
        params.append('shop_id', data.shop_id);
        axios({
            url:'http://localhost:3000/getActive',
            method:'post',
            transformRequest: [function (data) {
                 return data
              }],
             data:params,
         }).then(function(response){
            console.log(response)
            callback(response)
        })
    },
    //提交订单
    creatOrder(data,callback){
        var params = new URLSearchParams();
        // params.append('id', data.id);
        params.append('order_img', data.order_img);
        params.append('order_title', data.order_title);
        params.append('order_state', data.order_state);
        params.append('order_time', data.order_time);
        params.append('order_num', data.order_num);
        params.append('order_foodname', data.order_foodname);
        params.append('order_price', data.order_price);
        params.append('shop_id', data.shop_id);
        params.append('username', data.username);
        axios({
            url:'http://localhost:3000/creatOrder',
            method:'post',
            transformRequest: [function (data) {
                 return data
              }],
             data:params,
         }).then(function(response){
            callback(response)
        })
    },
    getorder(data,callback){
        var params = new URLSearchParams();
        params.append('username', data.username);
        axios({
            url:'http://localhost:3000/getorders',
            method:'post',
            transformRequest: [function (data) {
                 return data
              }],
             data:params,
         }).then(function(response){
            console.log(response)
            callback(response)
        })
    },
    //注册
    registeUser(data,callback){
        var params = new URLSearchParams();
        // params.append('id', data.id);
        params.append('username', data.username);
        params.append('password', data.password);
        axios({
           url:'http://localhost:3000/register',
           method:'post',
           transformRequest: [function (data) {
               // 对 data 进行任意转换处理
            //    console.log(typeof data,data)
                return data
             }],
            data:params,
        }).then(function(response){
           console.log(response.data)
        //    var user = response.data; //后台返回的数据
           callback(response.data)
       })
    },
    //登录
    signIn(data,callback){
        console.log(data);
        var params = new URLSearchParams();
        params.append('username', data.username);
        params.append('password', data.password);
        axios({
           url:'http://localhost:3000/login',
           method:'post',
           transformRequest: [function (data) {
               // 对 data 进行任意转换处理
            //    console.log(typeof data,data)
                return data;
             }],
            data:params,
        }).then(function(response){
           console.log(response.data);
        //    var user = response.data; //后台返回的数据
           callback(response.data);
       });
    },
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';'); //把cookie分割成组
        for(var i=0;i < ca.length;i++) {
            var c = ca[i]; //取得字符串
            while (c.charAt(0)==' ') { //判断一下字符串有没有前导空格
            c = c.substring(1,c.length); //有的话，从第二位开始取
            }
            if (c.indexOf(nameEQ) == 0) { //如果含有我们要的name
            return unescape(c.substring(nameEQ.length,c.length)); //解码并截取我们要值
            }
        }
        return false;
   },
   //清除cookie
   clearCookie(name) {
        setCookie(name, "", -1);
   },
   //设置cookie
   setCookie(name, value, seconds) {
        seconds = seconds || 0; //seconds有值就直接赋值，没有为0，这个根php不一样。
        var expires = "";
        if (seconds != 0 ) { //设置cookie生存时间
            var date = new Date();
            date.setTime(date.getTime()+(seconds*1000));
            expires = "; expires="+date.toGMTString();
        }
        document.cookie = name+"="+escape(value)+expires+"; path=/"; //转码并赋值
   }
}
