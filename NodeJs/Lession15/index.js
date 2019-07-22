console.log(arguments[4]);
var http=require('http');
var url=require('url');
var config=require('./config.js');
var fs=require('fs');
var methodsList=require('./loader.js');
http.createServer(function(request,response){
	var pathname=url.parse(request.url).pathname;
	var params=url.parse(request.url,true).query;
	var isState=isStates(pathname)
	if(isState){
		try{
			var  res=fs.readFileSync(config['page_path']+pathname);
			response.writeHead(200);
			response.write(res);
			response.end();
		}catch(e){
			//TODO handle the exception
			response.writeHead(404);
			response.write('<html><body><h1>404 NotFound</h1></body></html>');
			response.end();
		}
	
	}else{
		if(methodsList.get(pathname)!=null){
			try{
				methodsList.get(pathname)(request,response);
			}catch(e){
				//TODO handle the exception
				response.writeHead(500);
				response.write('<html><body><h1>500 ServerError</h1></body></html>');
				response.end();
			}
		}else{
			response.writeHead(404);
			response.write('<html><body><h1>抱歉,没找到</h1></body></html>');
			response.end();
		}
		
	}
}).listen(config.port);


function isStates(pathname){
	var arr=config['static_file_type'].split('|');
	if(pathname){
		for(var i=0;i<arr.length;i++){
			var temp=arr[i];
			if(pathname.indexOf(temp)==pathname.length-temp.length){
				return true;
			}
		}
		return false;
	}else{
		throw Error('配置文件错误');
	}
}