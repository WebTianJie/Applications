## 一:mongoDb使用场景
	1:优点:mongoDb是非关系数据库,对于前端来说,可以不用学习sql语句,就可以进行的数据库才做
	2:缺点:mongoDb,相对于写同等作用SQL语句来说,mongoDb操作更为复杂
## 二:安装和简单的命令 
    ```
	1:window7 
	  安装到最后一步,不要勾选安装图形化界面能操作,不然的话会消耗时间,一直安装,
	2:centos
	3:MongoDB基本命令
	  
		MongoDB:show dbs; 查看所有的数据库
		MySql:show databases;
		MongoDB:use database;使用数据库
		MySql:use database;使用数据库
		MongoDB:db.getName();查看当前数据库名称
		MongoDB: show collections;查看数据库下面所有的表
		MySql:show tables;查看数据库下所有的表
		MongoDB: dbname;切换到一个没有的数据库,就创建了一个数据库,如果是该数据库里面没有数据的话,则认为没有创建
		MongoDB:db.createCollection("表名")
		MySql:create table tablename
		增加数据:
		 MongoDB:db.student.save({name:"panda",age:18,sex:1});
		 MySql: insert into studet (name,age ,sex) value('panda',18,1);
		查询数据:
		 MongoDB:db.student.find();
		 MySql:select * from student
		 MongoDB:db.student.find({age:'18'});
		 MySql:select * from student where age=18
		 大于,大于等于
		 MongoDB:db.student.find({age:{$gt:20}});
		 MySql:select * from student where age>20
		 MongoDB:db.student.find({age:{$gte:20}});
		 MySql:select * from student where age>=20
		 小于,小于等于
		 MongoDB:db.student.find({age:{$lt:20}});
		 MySql:select * from student where age<20
		 MongoDB:db.student.find({age:{$lte:20}});
		 MySql:select * from student where age<=20
		 条件且
		 MongoDB:db.student.find({$and:[{name:'pandan'},{age:'18'}]});
		 MySql:select * from student where name='panda' and age=18
		 条件或:
		 MongoDB:db.student.find({$or:[{name:'pandan'},{age:'18'}]});
		 MySql:select * from student where name='panda' or age=18
		 区间:
		 MongoDB:db.student.find({age:{$gt:16,$lt:20}});
		 MySql:select * from student where age between 16 and 20;
		 限制数量
		 MongoDB:db.student.find().limit(2);
		 MySql:select * from student limit 2;
		 分页
		 MongoDB:db.student.find().skip(2).limit(2);//跳过前两条数据,再查询两条数据
		 MySql:select * from student limit 2,2;
		 查询总条数
		 MongoDB:db.student.find().count();
		 MySql:select count(*) from student 
		 删除:
		 db.student.remove();
		 MongoDB:db.student.remove({age:18})
		 MySql: delete * from where age=18
		 更新:
		 MongoDB:db.student.update({name:'panda'},{$set:{age:190}},false,true);false:找不到就添加一个,找到就修改,true:最后一个参数,就算查到多			条数据,也只会修改第一个
		 MySql:update student set age=190 where name='panda'
		 ```
## NodeJs 操作MongoDB
        1:安装: npm install mongodb
		2:引入: var  mongo=require('mongodb').MongoClient;
		3:设置: 	var  url='mongodb://127.0.0.1:27017/school'; 设置MongoDB的地址和端口号
		4: 封装增删改查的方法
			insert('student',{name:'dog',age:12,sex:0},function(error,res){
				if(error==null){
					console.log(res);
				}else{
					console.log(error);
				}
			});
			function insert(collection,obj,callback){
				mongo.connect(url,function (error,db){
					if(error==null){
						var database=db.db('school');
						// database.createCollection('teacher',function(error,res){
						// 	if(error==null){
						// 		console.log(res);
						// 	}else{
						// 		console.log(error);
						// 	}
						// })
						database.collection(collection).insertOne(obj,callback);
						db.close();
					}else{
						console.log(error);
					}
					// db.close();
				})
			}
			
			insertMany('student',[{name:'cat',age:11,sex:0},{name:'cat1',age:12,sex:0},{name:'cat3',age:13,sex:0},{name:'cat4',age:14,sex:0}],function(error,res){
				if(error==null){
					console.log(res);
				}else{
					console.log(error);
				}
			});
			function insertMany(collection,objs,callback){
				mongo.connect(url,function (error,db){
					if(error==null){
						var database=db.db('school');
						// database.createCollection('teacher',function(error,res){
						// 	if(error==null){
						// 		console.log(res);
						// 	}else{
						// 		console.log(error);
						// 	}
						// })
						database.collection(collection).insertMany(objs,callback);
						db.close();
					}else{
						console.log(error);
					}
					// db.close();
				})
			}
			function find(collection,where,callback){
				mongo.connect(url,function (error,db){
					if(error==null){
						var database=db.db('school');
						// database.createCollection('teacher',function(error,res){
						// 	if(error==null){
						// 		console.log(res);
						// 	}else{
						// 		console.log(error);
						// 	}
						// })
						database.collection(collection).find(where).toArray(callback);
						db.close();
					}else{
						console.log(error);
					}
					// db.close();
				})
			}
			
			find('student',{age:18},function(error,res){
					if(error==null){
						console.log(res);
					}else{
						console.log(error);
					}
			})
			
			function update(collection,where,value,callback){
				mongo.connect(url,function (error,db){
					if(error==null){
						var database=db.db('school');
						// database.createCollection('teacher',function(error,res){
						// 	if(error==null){
						// 		console.log(res);
						// 	}else{
						// 		console.log(error);
						// 	}
						// })
						database.collection(collection).updateOne(where,value,callback);
						db.close();
					}else{
						console.log(error);
					}
					// db.close();
				})
			}
			update('student',{name:'cat3'},{$set:{age:131}},function(error,res){
					if(error==null){
						console.log(res);
					}else{
						console.log(error);
					}
			})
			
			function deleteData(collection,where,callback){
				mongo.connect(url,function (error,db){
					if(error==null){
						var database=db.db('school');
						// database.createCollection('teacher',function(error,res){
						// 	if(error==null){
						// 		console.log(res);
						// 	}else{
						// 		console.log(error);
						// 	}
						// })
						database.collection(collection).deleteOne(where,callback);
						db.close();
					}else{
						console.log(error);
					}
					// db.close();
				})
			}
			
			deleteData('student',{name:'cat3'},function(error,res){
					if(error==null){
						console.log(res);
					}else{
						console.log(error);
					}
			})
			