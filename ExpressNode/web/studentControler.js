var studentDao=require('../dao/studentDao.js')
var path=new Map();
var url=require('url');
var fs=require('fs');
function queryAllStudent(request,response){
	
	studentDao.queryAllStudent(function(res){
		response.setHeader('Content-Type','text/plain;charset=utf-8');
		response.writeHead(200);
		response.write(JSON.stringify(res));
		response.end();
	});
}

path.set('/api/queryAllStudent',queryAllStudent);
function inserStudent(request,response){
	var  param=url.parse(request.url,true).query;
	studentDao.inserStudent(param.stu_num,param.name,param.age,param.class,param.math,param.pwd,function(){
		response.setHeader('Content-Type','text/plain;charset=utf-8');
		response.writeHead(200);
		response.write('添加成功');
		response.end();
	})
}
path.set('/api/inserStudent',inserStudent);
function login(request,response){
	var  param=url.parse(request.url,true).query;
	studentDao.queryStudentByNum(param.stu_num,function(res){
		if(res&&res.length>0&&res[0].pwd==param.pwd){
			response.cookie('id',res[0].id);
			response.redirect('/api/queryAllStudent');
		}else{
			response.redirect('/loginError.html');
		}
	})
}
path.set('/login',login);
function getPic(request, response) {
    var params = url.parse(request.url, true).query;
    try {
        var data = fs.readFileSync("./" + params.path);
        response.writeHead(200);
        response.write(data);
        response.end();
    } catch (e) {
        response.writeHead(404);
        response.end();
    }

}
path.set('/getPic',getPic);
module.exports.path=path;