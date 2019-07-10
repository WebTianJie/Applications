var net = require('net');
var socket = net.connect(12306, '127.0.0.1');
socket.on('connect', function() {
	console.log('已经连接到服务器');
	socket.write('你好啊.服务器');
});
socket.setTimeout(3000);
socket.on('timeout',function(){
	console.log('超时了');
})
// socket.on('data', function(data) {
// 	console.log(data.toString());
// 	socket.end();
// });
// socket.on('close', function(data) {
// 	console.log("客户端连接已关闭");
// });