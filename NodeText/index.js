var  express=require('express');
var  config=require('./config.js');
var loader=require('./loader.js');
var cookie=require('cookie-parser');
var multer=require('multer');
var app=new express();
app.use(express.static('./'+config['page_path']));
app.use(cookie());
var  multer=require('multer');
var uploadSingle=multer({//配置上传的文件在file文件夹下面
				dest:'./file/'
			})
app.get('/api/*',function(request,response,next){
	if(request.cookies.id){
		next();
	}else{
		response.redirect('/login.html');
	}
})

app.post('/login',uploadSingle.single('file'),function(request,response){
	loader.path.get('/login')(request,response);
})
app.post('/upload',uploadSingle.single('file'),function(request,response){
	loader.path.get('/upload')(request,response);
})
loader.init(app);
app.listen(config['port']);
