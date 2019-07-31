var dbuntil=require('./dbuntil.js');
function queryAllStudent(success){
	var sql='select * from student';
	var connection=dbuntil.createConnection();
	connection.query(sql,function(error,result){
		var res={};
		if(error==null){
			res.msg='查询成功';
			res.code=1;
			res.res=result;
			success(res);
		}else{
			res.msg='查询失败';
			res.code=0;
			res.res=error;
			success(res);
		}
	});
	connection.end();
}
function insertStudent(stu_num,name,age,stu_class,math,pwd,success){
	var sql='insert into student (stu_num,name,age,class,math,pwd) value(?,?,?,?,?,?)';
	var params=[stu_num,name,age,stu_class,math,pwd];
	var connection=dbuntil.createConnection();
	connection.query(sql,params,function(error,result){
		var res={};
		if(error==null){
			res.code=1;
			res.msg='添加成功';
			res.res=result;
			success(res);
		}else{
			res.code=0;
			res.msg='添加失败';
			res.res=error;
			success(res);
		}
	});
}

module.exports={
	queryAllStudent:queryAllStudent,
	insertStudent:insertStudent
}