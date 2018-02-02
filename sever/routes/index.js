var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
	host:'localhost',
	port:8889,
	user:'root',
	password:'root',
	database:'elm'
});
con.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 获取商家列表
router.get('/getShops',function(req,res,next){
	var sql = 'select * from shops';
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			res.json(results);
			console.log(results)
		}
	})
})
//获取商家活动信息
router.post('/getActive',function(req,res,next){
	var id = req.body.shop_id	
	// select a.*,b.* from 表A as a,表B as b where a.id=b.id
	// var sql = 'select t1.*,t2.shop_id from active as t1,shops as t2 where t1.shop_id=t2.shop_id';
	var sql = `select * from active where shop_id = ${id}`	
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			res.json(results);
			console.log(results)
		}
	})
})

//根据商家id查询菜品分类
router.post('/getFoodType',function(req,res,next){
	var id = req.body.shop_id
	console.log(id)
	// var sql = `select t1.*,t2.* from foods as t1,shops as t2 where t1.shop_id=${{id}}`;
	var sql = `select * from foodtype where shop_id = ${id}`
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			res.json(results);
				// console.log(results)
		}
	})
})

// 根据菜品分类和商家id,查询菜品
router.post('/getFoods',function(req,res,next){
	var id = req.body.shop_id;
	var type = req.body.type
	console.log(id,type)
	// var sql = `select t1.*,t2.* from foods as t1,shops as t2 where t1.shop_id=${{id}}`;
	var sql = `select * from foods where shop_id = ${id} and type = ${type}`
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			res.json(results);
		}
	})
})

//根据商家id,查询该商家所有菜品
router.post('/getAllFoods',function(req,res,next){
	var id = req.body.shop_id;
	// var type = req.body.type
	// console.log(id,type)
	// var sql = `select t1.*,t2.* from foods as t1,shops as t2 where t1.shop_id=${{id}}`;
	var sql = `select t1.*,t2.* from foods as t1,foodtype as t2 where t1.shop_id = ${id} and t2.shop_id = ${id} and t1.type = t2.type`;
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			res.json(results);
			
		}
	})
})




//根据商家id查询店铺信息
router.post('/getShopInfo',function(req,res,next){
	var id = req.body.shop_id
	console.log(id)
	// var sql = `select t1.*,t2.* from foods as t1,shops as t2 where t1.shop_id=${{id}}`;
	var sql = `select * from shops where shop_id = ${id}`
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			res.json(results);
				console.log(results)
		}
	})
})
//下单
router.post('/creatOrder',function(req,res,next){
	var order_img = req.body.order_img;
	var order_title = req.body.order_title;
	var order_state = req.body.order_state;
	var order_time = req.body.order_time;
	var order_num = req.body.order_num;
	var order_foodname = req.body.order_foodname;
	var order_price = req.body.order_price;
	var shop_id = req.body.shop_id;
	var username = req.body.username;
	var sql = `INSERT INTO orders (order_img, order_title, order_state, order_time,order_num,order_foodname,order_price,shop_id,username) VALUES ('${order_img}','${order_title}','${order_state}','${order_time}','${order_num}','${order_foodname}','${order_price}','${shop_id}','${username}')`;
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			res.json(results)
		}
	})
})
//获取订单
router.post('/getorders',function(req,res,next){
	var username = req.body.username;
	console.log(username)
	var sql = `select * from orders where username = ${username}`
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
		}else{
			res.json(results)
			console.log(results)
		}
	})
})


//注册
router.post('/register',function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;
	var sql1 = `INSERT INTO users (username, password) VALUES ('${username}','${password}')`;
	var sql2=`select * from users where username = '${username}'`;
	con.query(sql2,function(err,results,f){
		if(err){
			console.log(err)
		}else{
			console.log(results)
			if(results.length===1){
			 	res.send({state:'noOk',message:'用户已存在'})
			}else{
				con.query(sql1,function(err,results,f){
					if(err){
						res.send({state:'err',message:'注册失败,请重新注册'})
					}else{
						if(results.affectedRows===1){
							res.send({state:'Ok',message:'注册成功'})
						}
					}
				});
			}
			
		}

	});
});

//登录
router.post('/login',function(req,res,next){
	var username = req.body.username;
	var psw = req.body.password;
	console.log(req.body)
	var sql = `select * from users where username = '${username}' and password = '${psw}'`;
	con.query(sql,function(err,results,f){
		if(err){
			console.log(err);
			res.send({state:'noOk',message:'输入信息有误'})
		}else{
			console.log(results)
			if(results.length===1){
				 res.cookie('user', {'username':username},{maxAge:60000,httpOnly:false});
				 res.send({state:'ok',message:'登录成功'})
			}else{
				res.send({state:'noOk',message:'用户名或密码错误'})

			}

		}
	})
})

//检查cookie
router.get('/checkCookie',function(req,res,next){
	console.log(req.cookies);
	var json = null;
	if(req.cookies.user !== null){
	 	json = {
	 		user:req.cookies.user
	 	};
	}
	res.send(json);
});

module.exports = router;
