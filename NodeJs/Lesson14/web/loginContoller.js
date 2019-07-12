var  path=new Map();
var serviceStudent=require('../service/studentService.js');
var url=require('url');
function getData(request,response){
	// response.writeHead(200);
	// response.write('请求了getData的方法');
	// response.end();
	serviceStudent.queryAllStudent(function(result){
		var data=[];
		for(var i=0;i<result.length;i++){
			data.push(result[i].name);
		}
		response.writeHead(200, {'Content-Type': 'text/html',"charset":"utf-8"});
		response.write(data.toString());
		response.end();
	})
}
path.set('/getData',getData);
path.set('/login',login);
function login(request,response){
	//GET
	// var params=url.parse(request.url,true).query;//GET
	// serviceStudent.queryStudentByName(params.name,params.pwd,function(result){
	// 	var msg=null;
	// 	if(result.length){
	// 		msg="登录成功";
	// 	}else{
	// 		msg="账户或者密码不正确";
	// 	}
	// 	response.writeHead(200, {'Content-Type': 'text/html',"charset":"utf-8"});
	// 	response.write(msg.toString());
	// 	response.end();
	// });
	//Post请求
	request.on('data',function(data){
		var param=data.toString().split('&');
		var name=param[0].split('=')[1];
		var pwd=param[1].split('=')[1];
		serviceStudent.queryStudentByName(decodeURIComponent(name),pwd,function(result){
			var msg=null;
			if(result.length){
				msg="登录成功";
				response.writeHead(302, {'location' : ' /main.html','Set-Cookie':'id='+result[0].id});//跳转2
				response.end();//post2
			}else{
				msg="账户或者密码不正确";
				response.writeHead(302, {'location' : ' /error.html'});//跳转2
				response.end();//post2
			}
			// response.writeHead(200, {'Content-Type': 'text/html',"charset":"utf-8"});
			// response.write(msg.toString());
			// response.end();
			
		});
	})
}
module.exports.path=path;