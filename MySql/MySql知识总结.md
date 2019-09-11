##一:MySql下载安装5.7
## 数据库的种类
	1:关系型数据库(表格类型的数据库):MySql,Oracle(收费,节省人力),DB2,SqlServer,数据主要存在硬盘上
	2:非关系型数据库(链式的,KV的):MongoDB(数据存在硬盘上,不使用sql语句),Redis(数据存在内存里),Memcache(数据存在内存里面)
	3:阿里提出来的去IOE(I,IBM小型机,O:Oracle,E:EMC设备)
	
	实时数据库:相应的速度快,响应快
	非实时的数据库:Hive(大数据库数据库),HBase,ElasticSearch
## 脚本命令 每条语句都是以分号结束的;
	MYSQL的引擎
		MYISAM:使用场景:读的很多,写的非常少.写的表级锁,每次一个写的请求,都是独占一张表写,
		INNODB:使用场景:读较多,写也较多.行级锁,
	1:show databases; 所有的数据库
	2:use mysql;:连接使用选定的数据库
	3:show tables;:显示数据表
	4:desc tablename;:查看表的字段信息
	5:show create table db;:查看表的创建语句
	6:select * from db;查看表里面的所有的信息
	7:create database school;:创建数据库
	7:show create table tablename;显示创建表的脚本
	创建table ,每一个表格都是一个对象,必须有一个没有含义,没有意义,没有关系的主键
	字段的数据类型
	1:int 整数
	2:bigint(21) 长整数
	3:浮点数 float
	4:double 双精度浮点数
	5:varchar(16) 字符串
	6:text 文本类型
	7:创建表语句
	CREATE TABLE `student` (
	  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'studentId',
	  `stu_num` int(11) NOT NULL COMMENT '学生学号',
	  `name` varchar(32) NOT NULL COMMENT '学生姓名',
	  `age` int(11) NOT NULL COMMENT '学生年龄',
	  `class` int(11) NOT NULL,
	  PRIMARY KEY (`id`),
	  UNIQUE KEY `student_stu_num_uindex` (`stu_num`)
	) ENGINE=InnoDB DEFAULT CHARSET=latin1
	8:增加字段语句
		alter table student
		add math int not null comment '数学成绩';
	9:修改字段
		alter table student change math maths int not null comment '数学成绩';
	10:删除字段
		ALTER TABLE student drop math
	11:修改数据库的编码格式(数据库,表和字段要同时修改)
		alter database dbname character set utf8 修改数据库
		alter table student default character set utf8
		alter table student convert to character set utf8
	12:数据新增
		insert into student (`stu_num`,`name`,`age`,`class`,`math`) values (2,'张明',18,2,98);
	13:数据更新
		update student set age = 19,name="xiongmao" where id=2;
	14:数据查询
		select * from student 查询所有数据
		select name,age from  student 查询姓名,年龄两个字段
		select name,age from student where id=1 查询id是1的name和age
	15:查询汇总
		select count(1) from student 查询总人数
	16:求和
		select sum(age) from student where id>2; 求id大于2的,年龄的总和
	16:求平均数
		select avg(age) from student where id>2; 求id大于2的,年龄的平均数
		select avg(age) as '平均年龄' from student where id>2; 求id大于2的,年龄的平均数,并且给字段添加别名
	17:分组汇总
		select count(1) from student group by class;
		select class, count(1),avg(age) '班级人数' from student group by class;//只有group by的字段可以查询,其它的字段能不能被查询,可以用函数处理字段
	18:并集条件查询
	  select * from student where  age=18 and id=2 age=18并且id=2
	19:交集条件查询
	  select * from student where age=18 or id=2   age=18 或者id=2
	20:限制语句
		select * from student limit 2 只查询前两条
		select * from student limit 2,3 在前两条后,查询三条
	21:排序语句
	    select * from student  order by age 按照年龄排序
		select * from student order by age desc 按照年龄的倒序查询
	22:删除语句 
		 delete from student where id=5; //删除id=5的数据
	23:模糊查询 更高效
		select * from blog where title like  "%vue%" order by id desc limit 0 ,3
		select * from blog where locate('vue',title)>0  order by id desc limit 0,5 更高效