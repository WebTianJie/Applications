var fs=require('fs');
var config=require('./config.js');
var controllerSet=new Map();
var fileArr=fs.readdirSync('./'+config.web_path+'/');
for(var i=0;i<fileArr.length;i++){
	var tempPath=require('./'+config.web_path+'/'+fileArr[i]);
	if(tempPath.path){
		for(var [k,v] of tempPath.path){
			if(!controllerSet.get(k)){
				controllerSet.set(k,v);
			}else{
				throw new Error('url Path异常 url:'+k);
			}
		}
	}
}

module.exports=controllerSet;