var  dbuntil=require('./dbuntil.js');
function login(stu_num,pwd,success){
	var sql='select * from student where stu_num=? and pwd=?';
	var params=[stu_num,pwd];
	var connection=dbuntil.createConnection();
	connection.query(sql,params,function(error,result){
		var res={};
		if(error==null){
			res.mas='登录成功';
			res.code=1;
			res.res=result;
			success(res);
		}else{
			res.mas='登录失败';
			res.code=0;
			res.res=error;
			success(res);
		}
	});
}

function upload(name,img_path,origin_name,img_size,success){
	var sql='insert into user (name,img_path,origin_name,img_size) value(?,?,?,?)';
	var params=[name,img_path,origin_name,img_size];
	var  connection =dbuntil.createConnection();
	connection.query(sql,params,function(error,result){
		var  res={};
		if(error==null){
			res.msg='上传成功';
			res.code=1;
			res.res=result;
			success(res);
		}else{
			res.msg='上传失败';
			res.code=0;
			res.res=result;
			success(res);
		}
	});
	
}
module.exports={
	login:login,
	upload:upload
}