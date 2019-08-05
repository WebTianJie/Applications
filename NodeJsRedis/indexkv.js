var  redis=require('redis');
var  port=6379;
var  host='127.0.0.1';
var  password='123456';



function setKey(key,value,success){
	var client=redis.createClient(port,host);
	client.auth(password,function(){
	console.log('ok');	
	});
	client.on('connect',function(){
		client.set(key,value,success)
	})
	// client.end();
}
function getKey(key,success){
	var client=redis.createClient(port,host);
	client.auth(password,function(){
		console.log('ok');	
	});
	client.on('connect',function(){
		client.get(key,success)
	})
	// client.end();
}

setKey('key2','天劫',function(error,res){
	if(error==null){
		console.log(res);
	}else{
		console.log(error);
	}
})

getKey('key2',function(error,res){
	if(error==null){
		console.log(res);
	}else{
		console.log(error);
	}
})