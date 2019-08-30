var dbUntil=require('./DBUntil.js');


function insertTags(tag,ctime,utime,success){
    var sql='insert into  tags (tag,ctime,utime) values (?,?,?)';
	var params=[tag,ctime,utime];
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function(error,res){
		var  resData={};
		if(error==null){
			resData.code=1;
			resData.data=JSON.stringify(res);
		}else{
			resData.code=0;
		}
		success(resData);
	});
	connection.end();
}

function queryTagsByTag(tag,success){
	var sql='select * from tags where tag=?';
	var params=[tag];
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function(error,res){
		var resData={};
		if(error==null){
			resData.code=1;
			resData.data=JSON.stringify(res);
		}else{
			resData.code=1;
		}
		success(resData);
	});
	connection.end();
}

function getRandomTags(success){
	var sql='select * from tags order by id desc';
	var  connection=dbUntil.createConnection();
	connection.query(sql,function(error,res){
		if(error==null){
			success(res);
		}else{
			console.log(error);
		}
	});
	connection.end();
}
module.exports={
	insertTags:insertTags,
	queryTagsByTag:queryTagsByTag,
	getRandomTags:getRandomTags
}