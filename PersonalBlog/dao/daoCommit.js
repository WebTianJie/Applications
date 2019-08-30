var dbUntil=require('./DBUntil.js');
function addComment(blog_id,parent,parent_name,user_name,commits,email,ctime,utime,success){
	var sql='insert into commit (blog_id,parent,parent_name,user_name,commits,email,ctime,utime) values (?,?,?,?,?,?,?,?)';
	var params=[blog_id,parent,parent_name,user_name,commits,email,ctime,utime];
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function(error,res){
		if(error==null){
			success(res);
		}else{
			console.log(error);
		}
	})
	connection.end();
}

function getAllCommits(id,success){
	var sql='select * from commit where blog_id=?';
	var params=[id];
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function(error,res){
		if(error==null){
			success(res);
		}else{
			console.log(error);
		}
	});
	connection.end();
}
function getCommitsCount(id,success){
	var sql='select count(*) as count from commit where blog_id=?';
	var params=[id];
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function(error,res){
		if(error==null){
			success(res);
		}else{
			console.log(res);
		}
	});
	connection.end();
}

function queryHotCommit(success){
	var  sql='select * from commit order by id desc  limit ?';
	var  params=[7];
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function(error,res){
		if(error==null){
			success(res);
		}else{
			console.log(error);
		}
	})
	connection.end();
}
module.exports={
	addComment:addComment,
	getAllCommits:getAllCommits,
	getCommitsCount:getCommitsCount,
	queryHotCommit:queryHotCommit
}