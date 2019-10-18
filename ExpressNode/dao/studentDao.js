var  until=require('./dbuntil.js');
var  fs=require('fs');
var url=require('url');
function queryAllStudent(success){
	var sql='select * from student';
	var connection=until.createConnection();
	connection.connect();
	connection.query(sql,function(error,res){
		if(error==null){
			success(res);
		}else{
			throw new Error(error);
		}
	})
	connection.end();
}
function inserStudent(stu_num,name,age,stu_class,math,pwd,success){
	var sql='insert into  student (stu_num,name,age,class,math,pwd) values (?,?,?,?,?,?)';
	var params=[stu_num,name,age,stu_class,math,pwd];
	var connection=until.createConnection();
	connection.connect();
	connection.query(sql,params,function(error,res){
		if(error==null){
			success(res);
		}else{
			throw new Error(error);
		}
	})
	connection.end();
}
function queryStudentByNum(stu_num,success){
	var sql='select id,pwd from student where stu_num=?';
	var params=[stu_num];
	var connection=until.createConnection();
	connection.connect();
	connection.query(sql,params,function(error,res){
		if(error==null){
			success(res);
		}else{
			throw new Error(error);
		}
	})
	connection.end();
}
module.exports={
	queryAllStudent:queryAllStudent,
	inserStudent:inserStudent,
	queryStudentByNum:queryStudentByNum
}