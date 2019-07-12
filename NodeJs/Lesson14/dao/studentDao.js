var dbutil=require('./dbutil.js');
function queryAllStudent(success){
	var connection=dbutil.createConnection();
	connection.connect();
	var querySql='select * from student';
	connection.query(querySql,function(error,res){
		if(error==null){
			success(res);
		}else{
			console.log(error);
		}
	});
	connection.end();
}

function queryStudentByClassAndAge(classNum,age){
	var connection=dbutil.createConnection();
	connection.connect();
	var querySql='select * from student where class=? and age=?;';
	var queryParam=[classNum,age];
	connection.query(querySql,queryParam,function(error,res){
		if(error==null){
			console.log(res);
		}else{
			console.log(error);
		}
	});
	connection.end();
}

function queryStudentByName(name,pwd,success){
	var connection=dbutil.createConnection();
	connection.connect();
	var querySql='select * from student where name=? and pwd=?;';
	var queryParam=[name,pwd];
	connection.query(querySql,queryParam,function(error,result){
		if(error==null){
			success(result);
		}else{
			console.log(error);
		}
	});
	connection.end();
}
module.exports={
	queryAllStudent:queryAllStudent,
	queryStudentByClassAndAge:queryStudentByClassAndAge,
	queryStudentByName:queryStudentByName
}