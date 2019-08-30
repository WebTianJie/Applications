var dbUntil=require('./DBUntil.js');
function insertTagBlogMaps(tagId,blogId,ctime,utime,success){
	var sql='insert into tag_blog_mapping (tag_id,blog_id,ctime,utime) values (?,?,?,?)';
	var params=[tagId,blogId,ctime,utime];
	var connection=dbUntil.createConnection();
	connection.query(sql,params,function(error,res){
		 var resData={};
		 if(error==null){
			 resData.code=1;
			 resData.data=JSON.stringify(res);
		 }else{
			 console.log(error);
			 resData.code=0;
		 }
		 success(resData);
	});
	connection.end();
}

module.exports={
	insertTagBlogMaps:insertTagBlogMaps
}