var http=require('http');
var url=require('url');
var conf=require('./config.js');
var filterSet=require('./fillterLoader.js');
var fs=require('fs');
var loader=require('./loader.js');
var log=require('./log');
http.createServer(function(request,response){
	var pathName=url.parse(request.url).pathname;
	var param=url.parse(request.url,true).query;
	log.write(pathName);
	for(var i=0;i<filterSet.length;i++){
		var flag=filterSet[i](request,response);
		if(!flag){
			return;
		}
	}
	var isState=isDataState(pathName);
	if(isState){
		try{
			var data=fs.readFileSync(conf['page_path']+pathName);
			response.writeHead(200);
			response.write(data);
			response.end();
		}catch(e){
			response.writeHead(404);
			response.write('<html><body><h1>抱歉,没找到</h1></body></html>');
			response.end();
		}
	}else{
		if(loader.get(pathName)!=null){
			try{
				loader.get(pathName)(request,response);
			}catch(e){
				response.writeHead(500);
				response.write('<html><body><h1>服务器内部错误</h1></body></html>');
				response.end();
			}
			
		}else{
			response.writeHead(404);
			response.write('<html><body><h1>抱歉,没找到</h1></body></html>');
			response.end();
		}
	}
}).listen(conf.port);
log.write("服务已经启动了");
function isDataState(pathName){
	for(var i=0;i<conf['static_file_type'].length;i++){
		var temp=conf['static_file_type'][i];
		if(pathName.indexOf(temp)==pathName.length-temp.length){
			return true;
		}
	}
	return false;
}