var  until=require('./dbuntil.js');
function insertUserMsg(name,img_path,origin_name,img_size,success){
	var sql='insert into  user (name,img_path,origin_name,img_size) values (?,?,?,?)';
	var connection=until.createConnection();
	var params=[name,img_path,origin_name,img_size];
	connection.query(sql,params,function(error,res){
		if(error==null){
			success(res);
		}else{
			throw new Error('增加数据失败');
		}
	})
	connection.end();
}


module.exports={
	insertUserMsg:insertUserMsg
};