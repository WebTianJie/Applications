var fs=require('fs');
var config=require('./config.js');
var  files=fs.readdirSync(config['web_path']);
var  controllerSet=[];
var pathMap=new Map();
for(var i=0;i<files.length;i++){
	var temp=require('./'+config['web_path']+'/'+files[i]);
	if(temp.path){
		for(var [key,v] of temp.path){
			if(pathMap.get(key)==null){
				pathMap.set(key,v);
			}else{
				throw new Error('url path异常 url:'+key);
			}
			controllerSet.push(temp);
		}
		
	}
	
}

module.exports=pathMap;