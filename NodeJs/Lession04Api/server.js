var net = require('net');

var server=net.createServer();
server.listen(12306,'127.0.0.1');
server.on('listening',function(){
	console.log('服务启动了');
})
// server.on('connection',function(socket){
// 	console.log('客户端有新的连接');
// 	socket.on('data',function(data){
// 		console.log(data.toString());
// 		socket.write('hellow client');
// 	})
// 	socket.on('close',function(){
// 		console.log('客户端已经关闭了');
// 		server.close();
// 	})
// })
// server.on('close',function(){
// 	console.log('服务器也关闭了');
// })
// 