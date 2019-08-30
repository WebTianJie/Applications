var timeUntil=require('../until/TimeUntil.js');
var respUntil=require('../until/RespUntil.js');
var daoCommit=require('../dao/daoCommit.js');
var captcha=require('svg-captcha');
var url=require('url');
var path=new Map();
function addComment(request,response){
	var params=url.parse(request.url,true).query;
	var blog_id=params.blog_id,parent=params.parent,user_name=params.user_name,commits=params.commits,email=params.email,parent_name=params.parent_name;
	daoCommit.addComment(blog_id,parent,parent_name,user_name,commits,email,timeUntil.getNow(),timeUntil.getNow(),function(res){
		  response.writeHead('200');
		  response.write(respUntil.writeResult('success','添加成功',res));
		  response.end();
	})
}

function queryRandom(request,response){
	var img=captcha.create({
		fontSize:50,
		width:120,
		height:40,
		size:6, // 验证码长度
		ignoreChars: '0o1i', // 验证码字符中排除 0o1i
		noise: 2, // 干扰线条的数量
		color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
		background: '#ffffff' // 验证码图片背景颜色
	});
	response.writeHead('200');
	response.write(respUntil.writeResult('success','添加成功',img));
	response.end();
}

function getAllCommits(request,response){
	var  id=url.parse(request.url,true).query.blog_id;
	daoCommit.getAllCommits(id,function(res){
		response.writeHead('200');
		response.write(respUntil.writeResult('success','添加成功',res));
		response.end();
	})
}

function getCommitsCount(request,response){
	var  id=url.parse(request.url,true).query.blog_id;
	daoCommit.getCommitsCount(id,function(res){
		response.writeHead('200');
		response.write(respUntil.writeResult('success','添加成功',res));
		response.end();
	})
}

function queryHotCommit(request,response){
	daoCommit.queryHotCommit(function(res){
		response.writeHead(200);
		response.write(respUntil.writeResult('success','查询成功',res));
		response.end();
	})
}
path.set('/addComment',addComment);
path.set('/queryRandom',queryRandom);
path.set('/getAllCommits',getAllCommits);
path.set('/getCommitsCount',getCommitsCount);
path.set('/queryHotCommit',queryHotCommit);
module.exports.path=path;