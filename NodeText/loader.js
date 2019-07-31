var fs=require('fs');
var config=require('./config.js');
var files=fs.readdirSync('./'+config['web_path']);
var path=new Map();

function init(app){
	for(var i=0;i<files.length;i++){
		var file=require('./'+config['web_path']+'/'+files[i]);
		if(file.path){
			for(var [k,v] of file.path){
				if(path.get(k)==null){
					path.set(k,v);
					app.get(k,v);
				}else{
					throw Error('path 路径错误'+k);
				}
			}
		}
	}
}
module.exports.path=path;
module.exports.init=init;