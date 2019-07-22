var pathMap=new Map();
var studentService=require('../server/studentService.js');
function getData(request,response){
	studentService.queryAllStudent(function(res){
		var data=[];
		if(res){
			res=JSON.stringify(res);
			response.writeHead(200);
			response.write(res);
			response.end();
		}else{
			console.log(res);
		}
	})
	
}
pathMap.set('/getData',getData);
function getDataList(){
	console.log('您请求了getDataList方法');
}
pathMap.set('/getDataList',getDataList);

module.exports.path=pathMap;