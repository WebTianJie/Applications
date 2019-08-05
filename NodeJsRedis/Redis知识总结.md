## 一:Redis(缓存,缓存是用的内存,不是硬盘)作用
	  Redis是用c语言来写的
	  需要用c语言的编译和执行环境
	  redis支持的数据结构
		  key-value
		  key-map
		  key-set
		  key-list
		  key一般都是字符串,value可以使数字,也可以是字符串,c语言没有字符串的概念,都是有字符数组封装出来的;
		  redis字符串长度是可以变的,
		  redis的字符串结构是SDS(Simple Dynamic String)
			String{
				Free: 还剩下多少空间
				Len: 一共多少空间
				Data:字符数组
			}
			
	1:帮助DB拦截请求
	2:防止缓存穿透(布隆算法)
	3:redis即使用内存,也使用硬盘(硬盘用来进行数据的备份)
## 二:安装
```
1:windows 安装
	1:下载地址:(https://github.com/microsoftarchive/redis/releases)
	2:双击安装以后,所有的复选框都选上
	3:安装路径下找到redis.windows-service.conf文件,记事本打开
	4:contl+f 查找 requirepass foobared ,找到后,换行添加 requirepass 123456 设置密码,前面没有#号
	5:contl+f 查找 bind 127.0.0.1 在前面添加#号,取消对本地ip的限制
	6:windows+r  输入 services.msc 打开服务器,找到redis服务器,重新启动
	7:安装路径下 双击 redis-cli.exe就可以打开redis
	8:新版本其实只需要操作3,4,6步骤
   2:基本操作
	auth 123456: 登录
	set key 'beiming': 设置缓存 key是键 beiming是值
	get key :取值
2:Redis下载安装（Centos）
	1.下载安装包
	wget http://download.redis.io/releases/redis-4.0.2.tar.gz

	2.解压安装包并安装
	yum install gcc 安装c++环境
	tar xzf redis-4.0.2.tar.gz 解压dedis
	cd redis-4.0.2
	make MALLOC=libc 指定访问路径
	make install
	redis-service & 后台运行redis
	kill 2306 根据线程id ,杀掉reids进程
	3.启动和停止Redis
	启动Redis
	直接启动
	直接运行redis-server即可启动Redis
	[root@localhost bin]# redis-server


	通过初始化脚本启动Redis
	在Redis源代码目录的utils文件夹中有一个名为redis_init_script的初始化脚本文件。需要配置Redis的运行方式和持久化文件、日志文件的存储位置。步骤如下：
	1、配置初始化脚本
	首先将初始化脚本复制到/etc/init.d 目录中，文件名为 redis_端口号，其中端口号表示要让Redis监听的端口号，客户端通过该端口连接Redis。然后修改脚本第6行的REDISPORT变量的值为同样的端口号。
	2、建立以下需要的文件夹。
	目录名
	Value
	/etc/redis
	存放Redis的配置文件
	/var/redis/端口号
	存放Redis的持久化文件
	3、修改配置文件
	首先将配置文件模板（redis-4.0.2/redis.conf）复制到/etc/redis 目录中，以端口号命名（如“6379.conf”），然后按照下表对其中的部分参数进行编辑。
	参数
	值
	说明
	daemonize
	yes
	使Redis以守护进程模式运行
	pidfile
	/var/run/redis_端口号.pid
	设置Redis的PID文件位置
	port
	端口号
	设置Redis监听的端口号
	dir
	/var/redis/端口号
	设置持久化文件存放位置
	现在也可以使用下面的命令来启动和关闭Redis了
	/etc/init.d/redis_6379 start
	/etc/init.d/redis_6379 stop

	【重中之重】让Redis随系统自动启动，这还需要对Redis初始化脚本进行简单修改，执行命令：
	vim /etc/init.d/redis_6379
	在打开的redis初始化脚本文件头部第四行的位置，追加下面两句
	# chkconfig: 2345 90 10 
	# description: Redis is a persistent key-value database
	追加后效果如下：

	上图红色框中就是追加的两行注释，添加完毕后进行保存，即可通过下面的命令将Redis加入系统启动项里了
	//设置开机执行redis脚本
	chkconfig redis_6379 on

	通过上面的操作后，以后也可以直接用下面的命令对Redis进行启动和关闭了，如下
	service redis_6379 start
	service redis_6379 stop

	经过上面的部署操作后，系统重启，Redis也会随着系统自动启动，并且上面的步骤里也配置了Redis持久化，下次启动系统或Redis时，有缓存数据不丢失的好处。
	停止Redis
	考虑到 Redis 有可能正在将内存中的数据同步到硬盘中，强行终止 Redis 进程可能会导致数据丢失。正确停止Redis的方式应该是向Redis发送SHUTDOWN命令，方法为：
	redis-cli SHUTDOWN
	当Redis收到SHUTDOWN命令后，会先断开所有客户端连接，然后根据配置执行持久化，最后完成退出。
	Redis可以妥善处理 SIGTERM信号，所以使用 kill Redis 进程的 PID也可以正常结束Redis，效果与发送SHUTDOWN命令一样。
```
## 三: nodejs 连接 redis\
    ~~~
	1:安装redis npm install redis 
	2:var  redis=require('redis');引入redis
	3:var  port=6379; 设置redis的端口号
	4:var  host='127.0.0.1';设置redis的主机
	5:var  password='123456';设置reids的登录密码
	6:创建 连接
	var client=redis.createClient(port,host);
	client.auth(password,function(){
	// console.log('ok');	
	});
	7:创建hash方法
	function setKey(key,value,success){
		client.on('connect',function(){
			client.set(key,value,success)
		})
	}
	function getKey(key,success){
		client.auth(password,function(){
		});
		client.on('connect',function(){
			client.get(key,success)
		})
	}
	function hset(hash,key,value,success){
		client.on('connect',function(){
			client.hset(hash,key,value,success)
		});
	}
	function hget(hash,key,success){
		client.on('connect',function(){
			client.hget(hash,key,success)
		});
	}
	function hgetall(hash,success){
		client.on('connect',function(){
			client.hgetall(hash,success)
		});
	}
	
	function hmset(hash,paramArr,success){
		client.on('connect',function(){
			client.hmset(hash,...paramArr,success)
		});
	}
	function hmget(hash,success){
		client.on('connect',function(){
			client.hgetall(hash,success)
		});
	}
	module.exports={
		setKey:setKey,
		getKey:getKey,
		hset:hset,
		hget:hget,
		hgetall:hgetall,
		hmset:hmset,
		hmget:hmget
	}
	~~~
	8:使用has方法
  ```
	var redisUntil=require('./indexhash.js');
	var redisUntil=require('./indexhash.js');
	redisUntil.hset('map1','key5','天劫',function(error,res){
		if(error==null){
			console.log(res);
		}else{
			console.log(res);
		}
	})
	redisUntil.hget('map1','key4',function(error,res){
		if(error==null){
			console.log(res,0);
		}else{
			console.log(res,0);
		}
	})
	
	redisUntil.hgetall('map1',function(error,res){
		if(error==null){
			console.log(res);
		}else{
			console.log(res);
		}
	})
	
	redisUntil.hmset('map1',['a1','b1','a2','b2','a3','b3'],function(error,res){
		if(error==null){
			console.log(res);
		}else{
			console.log(res);
		}
	})
	
	
	redisUntil.hmget('map1',function(error,res){
		if(error==null){
			console.log(res);
		}else{
			console.log(res);
		}
	})
	```
	9:创建k,v方法
   ```
	function setKey(key,value,success){
		var client=redis.createClient(port,host);
		client.auth(password,function(){
		console.log('ok');	
		});
		client.on('connect',function(){
			client.set(key,value,success)
		})
		// client.end();
	}
	function getKey(key,success){
		var client=redis.createClient(port,host);
		client.auth(password,function(){
			console.log('ok');	
		});
		client.on('connect',function(){
			client.get(key,success)
		})
		// client.end();
	}
	```
   10:使用key方法
	```
	setKey('key2','天劫',function(error,res){
		if(error==null){
			console.log(res);
		}else{
			console.log(error);
		}
	})
	
	getKey('key2',function(error,res){
		if(error==null){
			console.log(res);
		}else{
			console.log(error);
		}
	})
   ```
   11:在公司中,使用redis,为了避免冲突,需要给每一个方法添加业务前缀
	