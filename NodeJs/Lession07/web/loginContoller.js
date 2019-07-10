var  path=new Map();
function getData(request,response){
	response.writeHead(200);
	response.write('请求了getData的方法');
	response.end();
}
path.set('/getData',getData);
module.exports.path=path;