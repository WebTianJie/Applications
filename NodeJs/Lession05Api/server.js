var net = require('net');

var server=net.createServer();
server.listen(12306,'127.0.0.1');
server.on('listening',function(){
	console.log('服务启动了');
})
server.on('connection',function(socket){
	console.log('客户端有新的连接');
	socket.on('data',function(data){
		console.log(data);
		var request=data.toString().split("\r\n");
		var url=request[0].split(" ")[1];
		socket.write('Accept: text/html/*,*/*;q=0.8\r\nContent-Type: text/html\r\nServer:beiming/1.1\r\n<html><body>收到了</body></html>',"UTF8");
	})
})
// server.on('close',function(){
// 	console.log('服务器也关闭了');
// })
// 