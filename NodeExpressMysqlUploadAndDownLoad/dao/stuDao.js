var dbutils=require('./Dbutils.js');
function queryAllStudent(success){
    var sql='select * from student';
    var  connection=dbutils.createConnection();
    connection.query(sql,function (err,res){
        if(err==null){
            success(res);
        }
    });
    connection.end();
}

function  login(stum,pwd,success){
    var sql='select * from student where stu_num=? and pwd=?';
    var  connection=dbutils.createConnection();
    var  param=[stum,pwd];
    connection.query(sql,param,function (err,res){
        if(err==null){
            success(res);
        }
    });
    connection.end();
}

module.exports={
    queryAllStudent,
    login
}