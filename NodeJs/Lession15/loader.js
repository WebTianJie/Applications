var fs=require('fs');
var config=require('./config.js');
var fileList=fs.readdirSync('./'+config['web_path']);
var methodsList=new Map();
for(var i=0;i<fileList.length;i++){
	var path=require('./'+config['web_path']+'/'+fileList[i]).path;
	if(path){
		for(var [k,v] of path){
			if(!methodsList.get(k)){
				methodsList.set(k,v);
			}else{
				throw new Error('url path异常 url:'+k);
			}
		}
	}else{
		
	}
}
module.exports=methodsList;