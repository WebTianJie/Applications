var  dbuntil=require('./dbuntil.js');
function queryAllStudent(success){
	var connection=dbuntil.createConnection();
	connection.connect();
	var sql='select * from student';
	connection.query(sql,function(error,res){
		if(error==null){
			success(res);
		}else{
			console.log(error);
		}
	})
	connection.end();
}
module.exports={
	queryAllStudent:queryAllStudent
};

