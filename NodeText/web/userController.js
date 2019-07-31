var userDao=require('../dao/userDao.js');
var url=require('url');
var fs=require('fs');
var path=new Map();

function login(request,response){
	var stu_num=request.body.stu_num;
	var pwd=request.body.pwd;
	userDao.login(stu_num,pwd,function(res){
		if(res.code==1){
			res=JSON.parse(JSON.stringify(res.res));
			id=res[0].id;
			response.cookie('id',id);
			response.writeHead(200);
			response.write('登录成功');
			response.end();
		}else{
			response.writeHead(200);
			response.write('登录失败');
			response.end();
		}
		
	});
}
path.set('/login',login)
function upload(request,response){
	var  name=request.body.name;
	 userDao.upload(name,request.file.path,request.file.originalname,request.file.size,function(res){
		 if(res.code==1){
			 response.writeHead(200);
			 response.write(request.file.path);
			 response.end();
		 }else{
			 response.writeHead(200);
			 response.write(res.msg);
			 response.end();
		 }
	 })
}
path.set('/upload',upload)
function getPic(request,response){
	var  path=url.parse(request.url,true).query;
	var  res=fs.readFileSync('./'+path.path);
	if(res){
		response.writeHead(200);
		response.write(res);
		response.end();
	}else{
		response.writeHead(404);
		response.end();	
	}
}
path.set('/getPic',getPic)
module.exports.path=path;