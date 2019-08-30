var dbuntil=require('./DBUntil');

function insertEveryDay(ccontent,ctime,success){
	var sql='insert into every_day (content,ctime) values (?,?)';
	var connection=dbuntil.createConnection();
	var param=[ccontent,ctime];
	connection.query(sql,param,function(error,res){
		if(error==null){
			success(res);
		}else{
			throw new Error('增加失败',error);
		}
	})
	connection.end();
}
function queryEveryDay(success){
	var sql='select * from every_day  order by id desc limit 1';
	var connection=dbuntil.createConnection();
	connection.query(sql,function(error,res){
		var resData={};
		if(error==null){
			resData.code=1;
			resData.data=JSON.stringify(res);
		}else{
			resData.code=0;
		}
		success(resData);
	})
	connection.end();
}

module.exports={
	insertEveryDay:insertEveryDay,
	queryEveryDay:queryEveryDay
}