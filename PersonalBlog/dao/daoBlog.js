var dbUntil=require('./DBUntil.js');
function editBlog(title,content,views,tags,ctime,utime,success){
	var sql='insert into blog (title,content,views,tags,ctime,utime) values (?,?,?,?,?,?)';
	var param=[title,content,views,tags,ctime,utime];
	var connection=dbUntil.createConnection();
	connection.query(sql,param,function(error,res){
		var resData={};
		if(error==null){
			resData.code=1;
			resData.data=JSON.stringify(res);
		}else{
			resData.code=0;
			resData.data=null;
		}
		success(resData);
	});
	connection.end();
}
function queryAllBlog(page,pageSize,tag,keyWord,success){
	var sql='';
	var params=[];
	if(tag){
		params=[tag,parseInt(page),parseInt(pageSize)]
		sql='select * from blog where tags=? order by id desc limit ?,?'
	}else{
		 params=[parseInt(page),parseInt(pageSize)];
		sql='select * from blog order by id desc limit ?,?';
	}
	if(keyWord){
		 params=[keyWord,parseInt(page),parseInt(pageSize)];
		sql='select * from blog where locate(?,title)>0  order by id desc limit ? ,?';
	}
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function (error,res){
		if(error==null){
			success(res);
		}else{
			console.log(error);
		}
	});
	connection.end();
}
function queryAllBlogs(success){
	var sql='select * from blog order by id desc';
	var connection=dbUntil.createConnection();
	connection.query(sql,function (error,res){
		if(error==null){
			success(res);
		}else{
			console.log(error);
		}
	});
	connection.end();
}
function queryAllBlogCount(tag,keyWord,success){
	var sql='';
	var params=[];
	if(tag){
		params=[tag]
		sql='select count(*) as count from blog where tags=?'
	}else{
		sql='select count(*) as count from blog';
	}
	if(keyWord){
		params=[keyWord]
		sql='select count(*) as count from blog where  locate(?,title)>0 ';
	}
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function (error,res){
		if(error==null){
			success(res);
		}else{
			console.log(error);
		}
	});
	connection.end();
}
function getArticleContent(id,success){
	var sql='select * from blog where id=?';
	var params=[id];
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function(error,res){
		if(error==null){
			success(res);
		}else{
			console.log(Error);
		}
	});
	connection.end();
}

function updateViews(id,success){
	var  sql='update blog set views=views+1 where id=?';
	var params=[id];
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
function queryHotBlog(success){
	var  sql='select * from blog order by views desc  limit ?';
	var  params=[10];
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
	editBlog:editBlog,
	queryAllBlog:queryAllBlog,
	queryAllBlogCount:queryAllBlogCount,
	getArticleContent:getArticleContent,
	queryAllBlogs:queryAllBlogs,
	updateViews:updateViews,
	queryHotBlog:queryHotBlog
	
}