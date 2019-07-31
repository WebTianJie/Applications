var  express=require('express');
var config=require('./config.js');
var  app=new express();
var  loader=require('./loader.js');
var  cookie=require('cookie-parser');
var  multer=require('multer');
var  userController=require('./web/userMsgControler.js');
app.use(express.static('./'+config['page_path']));
app.use(cookie());

var uploadSingle=multer({
	dest:'./file/'
})

// app.get('/queryAllStudent',loader.path.get('/queryAllStudent'))
app.get('/api/*',function(request,response,next){
	if(request.cookies.id){
		 next();
	}else{
		response.redirect('/login.html');
	}
})

loader.init(app);
//文件上传
app.post('/upload',uploadSingle.single('file'),function(request,response){
	// console.log(request.body.name);
	// console.log(request.file.originalname);
	// console.log(request.file.size);
	// console.log(request.file.path);
	userController.path.get('/upload')(request.body.name,request.file.path,request.file.originalname,request.file.size,function(res){
			if(res!=null){
				var data={
					path:request.file.path
				}
				response.writeHead(200);
				response.write(JSON.stringify(data));
				response.end();
			}else{
				response.writeHead(200);
				response.write('添加失败');
				response.end();
			}
	})
});
//文件下载

app.listen(config.port);