## Express +node
   	1:http缺点,例如文件的上传和下载,http做起来比较麻烦
   	2:Expres封账了各种后端常用的功能,实用起来比较方便
	后端常用功能;
	自动登录
	文件上传
	文件下载
	页面跳转
	数据上传
	数据拉取
	3:express(express不是node自带的包)  初始化项目 安装express npm init,npm install express
		1:var  express=require('express'); 引入exoress
		2:var config=require('./config.js'); 引入配置文件
		3:var  app=new express(); 创建保对象
		4:app.use(express.static('./'+config['page_path'])); 配置静态资源文件夹
		5:app.listen(config.port); 监听端口
		5:app.get(url,function(request,response){}) 动态请求资源
	4:express拦截器
		app.get('/api/*',function(request,response,next){//连接api开头的所有的请求路径
			console.log('拦截到了');
			//next(); next是拦截以后,需要执行的语句
			response.redirect('/page/login.html');//页面重定向
		})
	5:cookie读取   
		安装:npm install cookie-parser 
		引入:var  cookie=require('cookie-parser');
		使用:app.use(cookie());
		app.get('/api/*',function(request,response,next){
			if(request.cookies.id){//读取cookie
				 next();//有cookie继续执行
			}else{
				response.redirect('/login.html');//没有cookie重定向
			}
		})
	6:文件上传(multer)
		安装:npm install multer --save 
		引入: var  multer=require('multer');
		配置:
			var uploadSingle=multer({//配置上传的文件在file文件夹下面
				dest:'./file/'
			})
		使用:
			页面的ajax方法
			function submitFile() {
				var file = document.getElementById('file').files[0];
				var name = document.getElementById('name').value;
				var pic=document.getElementById('pic');
				var dw=document.getElementById('dw');
				var form = new FormData();
				form.append('file', file);
				form.append('name', name);
				var xhr = new XMLHttpRequest();
				xhr.open('post', '/upload', true);
				xhr.onload = function() {
					alert('上传完成');
				}
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && xhr.status == 200) {
						var path = JSON.parse(xhr.responseText);
						pic.src='/getPic?path='+path.path;
						dw.href='/getPic?path='+path.path;
					}
				}
				xhr.send(form);
			}
			app.post('/upload',uploadSingle.single('file'),function(request,response){ 提交到使用post方法,此处的file是页面FormData配置的文件字段的名称
				form里面的字段都在request.body里面.form的上传文件我的信息都在,request.file里面
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
		7:文件下载
		img.src='/getPic?path='+res; //res文件上传成功后,返回的图片在本地的地址
		dw.href='/getPic?path='+res;//res文件上传成功后,返回的图片在本地的地址
		通过给href和src赋值,回去浏览器会去重新请求加载数据
		function getPic(request,response){
			var param=url.parse(request.url,true).query.path;
			var data=fs.readFileSync('./'+param);
			if(data){
				response.writeHead(200);
				response.write(data);//返回图片的二进制数据流
				response.end();
			}else{
				response.writeHead(404);
				response.write('未找到文件');
				response.end();
			}
			
		}
		