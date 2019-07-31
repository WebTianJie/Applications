var  daoUser=require('../dao/userDao.js');
var  fs=require('fs');
var  url=require('url');
var path=new Map();
function inserUserMsg(name,img_path,origin_name,img_size,success){
	daoUser.insertUserMsg(name,img_path,origin_name,img_size,success)
}
path.set('/upload',inserUserMsg);

module.exports.path=path;