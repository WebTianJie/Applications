var express=require('express');
var app=new express();
var config=require('./config.js');
var loader=require('./loader.js');
var cookie=require('cookie-parser');
var multer=require('multer');
var path=require('./dao/DaoStudent.js');
app.use(express.static('./'+config['page_path']+'/'));
app.use(cookie());
var uploadSingle=multer({//配置上传的文件在file文件夹下面
    dest:'./files/'
})
app.listen(config.port);
loader.init(app);
app.get('/api/*',function(request,response,next){
    if(request.cookies.id){
        console.log('放行了');
        next();
    }else{
        response.redirect('/upload.html')
    }
    // next();
})
app.post('/upload',uploadSingle.single('files'),function (request,response) {
    path.insertUserMsg(request.body.name,request.file.path,request.file.originalname,request.file.size,function(res){
        var res={
            path:request.file.path
        }
        response.setHeader('Content-type','text/html;charset=utf-8;');
        response.write(JSON.stringify(res));
        response.end();
    });
})
// app.get('/queryAllStudent',studentControl.path.get('/queryAllStudent'))