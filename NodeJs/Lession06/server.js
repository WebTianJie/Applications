var net=require('net');
var fs=require('fs');
var conf=require('./conf.js');
var server=net.createServer();
server.listen('12336',"127.0.0.1");
server.on('listening',function(){
	console.log("服务已启动");
})
server.on('connection',function(socket){
	socket.on('data',function(data){
		var url=data.toString().split("\r\n")[0].split(" ")[1];
		try{
			var data=fs.readFileSync(__dirname+conf.path+url);
			// socket.write("HTTP/1.1 200OK\r\n\r\n"+data.toString());//纯文字
			socket.write("HTTP/1.1 200OK\r\n\r\n");
			socket.write(data);//文件和文字
		}catch(e){
			socket.write("HTTP/1.1 404NotFound\r\n\r\n<html><body><h1>404</h1></body></html>");
		}
		socket.end();
	})
})