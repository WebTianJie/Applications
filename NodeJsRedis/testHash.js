var redisUntil=require('./indexhash.js');
// redisUntil.hset('map1','key5','天劫',function(error,res){
// 	if(error==null){
// 		console.log(res);
// 	}else{
// 		console.log(res);
// 	}
// })
// redisUntil.hget('map1','key4',function(error,res){
// 	if(error==null){
// 		console.log(res,0);
// 	}else{
// 		console.log(res,0);
// 	}
// })
// 
// redisUntil.hgetall('map1',function(error,res){
// 	if(error==null){
// 		console.log(res);
// 	}else{
// 		console.log(res);
// 	}
// })

redisUntil.hmset('map1',['a1','b1','a2','b2','a3','b3'],function(error,res){
	if(error==null){
		console.log(res);
	}else{
		console.log(res);
	}
})


redisUntil.hmget('map1',function(error,res){
	if(error==null){
		console.log(res);
	}else{
		console.log(res);
	}
})
