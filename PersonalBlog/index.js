var express=require('express');
var config=require('./config.js');
var loader=require('./loader.js');
var  app=new express();
app.use(express.static('./'+config.page_path+'/'));
app.post('/editEveryDay',loader.get('/editEveryDay'))
app.post('/editBlog',loader.get('/editBlog'));
app.get('/queryAllBlog',loader.get('/queryAllBlog'));
app.get('/queryAllBlogCount',loader.get('/queryAllBlogCount'));
app.get('/getArticleContent',loader.get('/getArticleContent'));
app.get('/addComment',loader.get('/addComment'));
app.get('/queryRandom',loader.get('/queryRandom'));
app.get('/queryEveryDay',loader.get('/queryEveryDay'));
app.get('/getAllCommits',loader.get('/getAllCommits'));
app.get('/getCommitsCount',loader.get('/getCommitsCount'));
app.get('/queryAllBlogs',loader.get('/queryAllBlogs'));
app.get('/getRandomTags',loader.get('/getRandomTags'));
app.get('/queryHotBlog',loader.get('/queryHotBlog'));
app.get('/queryHotCommit',loader.get('/queryHotCommit'));
app.listen(config.port,function(){
	console.log('服务已经启动了');
});