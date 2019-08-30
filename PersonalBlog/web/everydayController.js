var path=new Map();
var timeUntil=require('../until/TimeUntil.js');
var respUntil=require('../until/RespUntil.js');
var everyDao=require('../dao/EveryDayDao.js');
function editEveryDay(request,response){
	request.on('data',function(data){
		everyDao.insertEveryDay(data.toString().trim(),timeUntil.getNow(),function(res){
			  response.writeHead(200);
			  response.write(respUntil.writeResult('success','添加成功',null));
			  response.end();
		});
	})
}

function queryEveryDay(request,response){
		everyDao.queryEveryDay(function(res){
			  response.writeHead(200);
			  response.write(respUntil.writeResult('success','查询成功',res.data));
			  response.end();
		});
}

path.set('/editEveryDay',editEveryDay);
path.set('/queryEveryDay',queryEveryDay);
module.exports.path=path;