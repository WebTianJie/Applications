var redis=require('redis');
var port=6379;
var host='127.0.0.1';
var password='123456';
function setKey(key,value,callback){
    var client=redis.createClient(port,host);
    client.auth(password,function(){
        console.log('连接到redis成功');
    });
    client.on('connect',function(){
        client.set(key,value,callback);
    })
    // client.end();
}
function getKey(key,callback){
    var client=redis.createClient(port,host);
    client.auth(password,function(){
        console.log('连接成功');
    })
    client.on('connect',function(){
        client.get(key,callback)
    })
    // client.end();
}

function hsetKey(hash,key,value,callback){
    var client=redis.createClient(port,host);
    client.auth(password,function(){
        console.log('hashget');
    })
    client.on('connect',function () {
        client.hset(hash,key,value,callback)
    })
    // client.end();
}

function hgetKey(hash,key,callback){
    var client=redis.createClient(port,host);
    client.auth(password,function () {
        console.log('hashget');
    })
    client.on('connect',function(){
        client.hget(hash,key,callback);
    })
    // client.end();
}
function hgetAllKey(hash,callback){
    var client=redis.createClient(port,host);
    client.auth(password,function () {
        console.log('hashget');
    })
    client.on('connect',function(){
        client.hgetall(hash,callback);
    })
    // client.end();
}

function hmset(hash,param,callback){
    var  client=redis.createClient(port,client);
    client.auth(password,function(){
        console.log('连接成功');
    })
    client.on('connect',function () {
        client.hmset(hash,...param,callback);
    })
}
// setKey('age',18,function (err,res) {
//     if(err==null){
//         console.log('连接成功')
//     }
// });
// getKey('age',function(err,res){
//     if(err==null){
//         console.log(res);
//     }
// })
// hsetKey('h_code001','work','web前端工程师',function(err,res){
//     if(err==null){
//         console.log(res);
//     }
// })

// hgetKey('h_code001','address',function(err,res){
//    if(err==null){
//        console.log(res);
//    }
// })
// hgetAllKey('h_code001',function(err,res){
//     if(err==null){
//         console.log(res);
//     }
// })

hmset('code001',['a1','b1','a2','b2'],function (err,res) {
    if(err==null){
        console.log(res);
    }
})
module.exports={
    setKey,
    getKey,
    hgetKey,
    hsetKey,
    hgetAllKey
}