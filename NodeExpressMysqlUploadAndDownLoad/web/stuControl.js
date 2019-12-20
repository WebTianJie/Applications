var  requestList=new Map();
var  stuDao=require('../dao/stuDao.js');
var  url=require('url');
function queryAllStudent(request,response){
    stuDao.queryAllStudent(function(res){
        response.setHeader('Content-Type','text/html;charset=utf-8;');
        response.write(JSON.stringify(res));
        response.end();
    })
}
function login(request,response){
    var param=url.parse(request.url,true).query;
    stuDao.login(param.stum,param.pwd,function(res){
        res=JSON.parse(JSON.stringify(res));
        response.cookie('id',res[0].id);
        response.setHeader('Content-Type','text/html;charset=utf-8');
        response.write(JSON.stringify(res));
        response.end();
    })
}
requestList.set('/queryAllStudent',queryAllStudent);
requestList.set('/login',login);
module.exports=requestList;