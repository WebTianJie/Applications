var daoUser=require('../dao/daoUser.js');
var url=require('url');
var fs=require('fs');
var  reuestList=new Map();
function insertUserMsg(request,response){
    daoUser.insertUserMsg(request.body.name,request.file.path,request.file.originalname,request.file.size,function(res){
        response.writeHead(200);
        response.write(request.file.path);
        response.end();
    })
}

function getPic(request,response){
    var param=url.parse(request.url,true).query;
    var file=fs.readFileSync('./'+param.path);
    response.writeHead(200);
    response.write(file);
    response.end();
}
reuestList.set('/insertUserMsg',insertUserMsg);
reuestList.set('/getPic',getPic);
module.exports=reuestList;
