var studentDao=require('../dao/studentDao.js');
var url=require('url');
var path=new Map();
function queryAllStudent(request,response){
	studentDao.queryAllStudent(function(res){
		response.setHeader('Content-Type','text/plain;charset=utf-8');
		response.writeHead(200);
		response.write(JSON.stringify(res.res));
		response.end();
	})
}

path.set('/api/queryAllStudent',queryAllStudent);
function insertStudent(request,response){
	//stu_num,name,age,stu_class,math,pwd
	var params=url.parse(request.url,true).query;
	studentDao.insertStudent(params.stu_num,params.name,params.age,params.stu_class,params.math,params.pwd,function(res){
		if(res.code==1){
			response.setHeader('Content-Type','text/plain;charset=utf-8');
			response.writeHead(200);
			response.write('添加成功');
			response.end();
		}else{
			response.setHeader('Content-Type','text/plain;charset=utf-8');
			response.writeHead(500);
			response.write('添加失败');
			response.end();
		}
	});
}
path.set('/insertStudent',insertStudent);
module.exports.path=path;
