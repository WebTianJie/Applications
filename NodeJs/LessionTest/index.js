var  http=require('http');
var  config=require('./config.js');
var  methodDataSet=require('./loader.js');
var  fs=require('fs');
var  url=require('url');
http.createServer(function(request,response){
    var pathname=url.parse(request.url,true).pathname;
    var isStatic=IsStatic(pathname);
    if(isStatic){//请求的静态文件
        try{
            var res=fs.readFileSync('./'+config['page_path']+'/'+pathname);
            response.writeHead(200);
            response.write(res);
            response.end();
        }
        catch(e){
            response.writeHead(404);
            response.write('404');
            response.end();
        }

    }else{//请求的动态文件
        if(methodDataSet.get(pathname)!=null){
            try{
                methodDataSet.get(pathname)(request,response);
            }
            catch(e){
                response.writeHead(200);
                response.write('500 error');
                response.end();
            }
        }else{
            response.writeHead(404);
            response.write('404 error');
            response.end();
        }

    }
}).listen(config.port);

function IsStatic(pathname){
    var staticArr=config['static_file_type'].split('|');
    for(var i=0;i<staticArr.length;i++){
        if(pathname.indexOf(staticArr[i])==pathname.length-staticArr[i].length){
           return true;
        }
    }
    return  false;
}