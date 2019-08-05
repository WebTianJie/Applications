var  redis=require('redis');
var  port=6379;
var  host='127.0.0.1';
var  password='123456';

var client=redis.createClient(port,host);
client.auth(password,function(){
// console.log('ok');	
});

function setKey(key,value,success){
	client.on('connect',function(){
		client.set(key,value,success)
	})
}
function getKey(key,success){
	client.auth(password,function(){
	});
	client.on('connect',function(){
		client.get(key,success)
	})
}
function hset(hash,key,value,success){
	client.on('connect',function(){
		client.hset(hash,key,value,success)
	});
}
function hget(hash,key,success){
	client.on('connect',function(){
		client.hget(hash,key,success)
	});
}
function hgetall(hash,success){
	client.on('connect',function(){
		client.hgetall(hash,success)
	});
}

function hmset(hash,paramArr,success){
	client.on('connect',function(){
		client.hmset(hash,...paramArr,success)
	});
}
function hmget(hash,success){
	client.on('connect',function(){
		client.hgetall(hash,success)
	});
}
module.exports={
	setKey:setKey,
	getKey:getKey,
	hset:hset,
	hget:hget,
	hgetall:hgetall,
	hmset:hmset,
	hmget:hmget
}


