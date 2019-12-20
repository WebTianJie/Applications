var daoStudent=require('../dao/DaoStudent.js');
var path=new Map();
var url=require('url');
var fs=require('fs');
function queryAllStudent(request,response){
    daoStudent.queryAllStudent(function(res){
        response.setHeader('Content-Type', 'text/plain; charset=utf-8');
        response.write(JSON.stringify(res));
        response.end();
    });
}
function queryStudentByStunum(request,response){
    var  param=url.parse(request.url,true).query;
    daoStudent.queryStudentByStunum(param.stu_num,function(res){
        var res=JSON.parse(JSON.stringify(res));
        if(res && res.length>0) {
            if (res[0].pwd == param.pwd) {
                response.cookie('id', res[0].name);
                response.redirect('/index.html');
            } else {
                response.redirect('/loginError.html')
            }
        }
    });
}
function insertUserMsg(request,response){
    var  param=url.parse(request.url,true).query;
    daoStudent.insertUserMsg(param.stu_num,function(res){
        var res=JSON.parse(JSON.stringify(res));
        if(res && res.length>0) {
            if (res[0].pwd == param.pwd) {
                response.cookie('id', res[0].name);
                response.redirect('/index.html');
            } else {
                response.redirect('/loginError.html')
            }
        }
    });
}

function getPic(request,response){
    var params = url.parse(request.url, true).query;
      try {
          var res=fs.readFileSync('./'+params.path);
          response.writeHead(200);
          response.write(res);
          response.end();
      }catch (e) {
          response.writeHead(404);
          response.end();
      }

}
path.set('/getPic',getPic);
path.set('/queryStudentByStunum',queryStudentByStunum);
path.set('/queryAllStudent',queryAllStudent);
path.set('/insertUserMsg',insertUserMsg);
module.exports.path=path;