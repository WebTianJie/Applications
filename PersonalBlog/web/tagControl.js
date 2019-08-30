var path=new Map();
var timeUntil=require('../until/TimeUntil.js');
var respUntil=require('../until/RespUntil.js');
var daoTags=require('../dao/daoTags.js');
var url=require('url');

function getRandomTags(request,response){
	daoTags.getRandomTags(function(res){
		var  result=res;
		result.sort(function(){
			return Math.random()>0.5?true:false;
		})
		response.writeHead(200);
		response.write(respUntil.writeResult('successs','查询成功',result));
		response.end();
	})
	
}

path.set('/getRandomTags',getRandomTags);
module.exports.path=path;