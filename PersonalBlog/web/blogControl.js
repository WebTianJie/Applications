var path=new Map();
var timeUntil=require('../until/TimeUntil.js');
var respUntil=require('../until/RespUntil.js');
var daoBlog=require('../dao/daoBlog.js');
var daoTags=require('../dao/daoTags.js');
var daoTagBlogMaps=require('../dao/daoTagBlogMaps.js');
var respUntil=require('../until/RespUntil.js');
var url=require('url');

function editBlog(request,response){
	var param=url.parse(request.url,true).query;
	var tags=param.tags.replace('/ /g','').replace('/，/g',',');
	request.on('data',function (data){
		daoBlog.editBlog(param.title,data.toString(),1,tags,timeUntil.getNow(),timeUntil.getNow(),function(res){
			res=JSON.parse(res.data);
			var blogId=res&&res.insertId;
			var tagArr=tags.split(',');
			for(var  i=0;i<tagArr.length;i++){
				if(tagArr[i]==null||tagArr[i].length==0){
					continue;
				}else{
					queryTagsByTag(tagArr[i],blogId,request,response)
				}
			}
		});
	})
}

function insertTags(tag,blogId,request,response){
		daoTags.insertTags(tag,timeUntil.getNow(),timeUntil.getNow(),function(result){
			var tagId=JSON.parse(result.data).insertId;
			insertTagBlogMaps(tagId,blogId,request,response);
		});
}


function insertTagBlogMaps(tagId,blogId,request,response){
	daoTagBlogMaps.insertTagBlogMaps(tagId,blogId,timeUntil.getNow(),timeUntil.getNow(),function(res){
		response.writeHead(200);
		response.write(respUntil.writeResult('success','添加成功',res));
		response.end();
	});
}

function queryTagsByTag(tag,blogId,request,response){
	daoTags.queryTagsByTag(tag,function(res){
		if(res.data==null||res.data=='[]'){
			insertTags(tag,blogId,request,response);
		}else{
			tagId=JSON.parse(res.data)[0].id;
			insertTagBlogMaps(tagId,blogId,request,response);
		}
	})
}

function queryAllBlog(request,response){
	var para=url.parse(request.url,true).query;
	daoBlog.queryAllBlog(para.page,para.pageSize,para.tag,para.keyWord,function(res){
		for(var i=0;i<res.length;i++){
			res[i].content=res[i].content.replace(/<img[\w\W]*">/,'');
			res[i].content=res[i].content.substring(0,300);
		}
		response.writeHead(200);
		response.write(respUntil.writeResult('success','查询成功',res));
		response.end();
	})
}
function queryAllBlogCount(request,response){
	var para=url.parse(request.url,true).query;
	daoBlog.queryAllBlogCount(para.tag,para.keyWord,function(res){
		response.writeHead(200);
		response.write(respUntil.writeResult('success','查询成功',res));
		response.end();
	})
}

function queryAllBlogs(request,response){
	var para=url.parse(request.url,true).query;
	daoBlog.queryAllBlogs(function(res){
		response.writeHead(200);
		response.write(respUntil.writeResult('success','查询成功',res));
		response.end();
	})
}

function getArticleContent(request,response){
	var id=url.parse(request.url,true).query.id;
	daoBlog.getArticleContent(id,function(res){
		daoBlog.updateViews(id,function(res){
			
		})
		response.writeHead(200);
		response.write(respUntil.writeResult('success','查询成功',res));
		response.end();
	})
}
function queryHotBlog(request,response){
	daoBlog.queryHotBlog(function(res){
		response.writeHead(200);
		response.write(respUntil.writeResult('success','查询成功',res));
		response.end();
	})
}
path.set('/editBlog',editBlog);
path.set('/queryAllBlog',queryAllBlog);
path.set('/queryAllBlogs',queryAllBlogs);
path.set('/queryAllBlogCount',queryAllBlogCount);
path.set('/getArticleContent',getArticleContent);
path.set('/queryHotBlog',queryHotBlog);
module.exports.path=path;