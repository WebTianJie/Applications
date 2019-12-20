var config=require('./config.js');
var express=require('express');
var cookie=require('cookie-parser');
var multer=require('multer');
var app=new express();
var requestList=require('./loader.js')
var userControl=require('./web/userControl.js');
app.use(express.static('./'+config['page_path']+'/'));
app.use(cookie());
var singleFile=new multer({
    dest:'./files/'
})
app.post('/upload',singleFile.single('files'),function(request,response){
    userControl.get('/insertUserMsg')(request,response);
})
app.get('/api/*',function(request,response,next){
    if(request.cookies.id){
        response.redirect('/index.html');
        next();
    }else{
        response.redirect('/login.html');
    }
})
app.listen(config['port']);
requestList.init(app);
