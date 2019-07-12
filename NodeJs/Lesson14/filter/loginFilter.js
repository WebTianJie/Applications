var url=require('url');
var conf=require('../config.js');
function loginFilter(request,response){
	var pathName=url.parse(request.url).pathname;
	if(pathName=='/login.html'||pathName=='/login'||isDataState(pathName)){
		return true;
	}
	if(request.headers.cookie){
		var cookies=request.headers.cookie.split(';');
		for(var i=0;i<cookies.length;i++){
			if(cookies[i].split('=')[0].trim()=='id'){
				return true;
			}
		}
	}
	response.writeHead(302, {'location' : ' /login.html'});
	response.end();
	return false;
}

function isDataState(pathName){
	for(var i=0;i<conf['static_file_type'].length;i++){
		var temp=conf['static_file_type'][i];
		if(temp=='.html'){
			continue;
		}
		if(pathName.indexOf(temp)==pathName.length-temp.length){
			return true;
		}
	}
	return false;
}
module.exports=loginFilter;