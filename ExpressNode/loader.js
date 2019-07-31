var  fs=require('fs');
var config=require('./config.js');
var files=fs.readdirSync('./'+config['web_path']);
var  path=new Map();
// for(var i=0;i<files.length;i++){
// 	var pathTemp=require('./'+config['web_path']+'/'+files[i]);
// 	if(pathTemp.path){
// 		for(var [k,v] of pathTemp.path){
// 			if(path.get(k)==null){
// 				path.set(k,v);
// 			}else{
// 				throw Error('urlpath异常'+k);
// 			}
// 		}
// 	}
// }
// module.exports.path=path;
//升级版
function init(app){
	for(var i=0;i<files.length;i++){
		var pathTemp=require('./'+config['web_path']+'/'+files[i]);
		if(pathTemp.path){
			for(var [k,v] of pathTemp.path){
				if(path.get(k)==null){
					path.set(k,v);
					app.get(k,v);
				}else{
					throw Error('urlpath异常'+k);
				}
			}
		}
	}
}
module.exports.init=init;