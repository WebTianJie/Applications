var dbutil=require('./Dbutil.js');

function queryAllStudent(success){
    var sql='select * from student';
    var connection=dbutil.createConnection();
    connection.connect();
    connection.query(sql,function(err,res){
        if(err==null){
            success(res);
        }else{
           console.log(err);
        }
    })
    connection.end();
}
function queryStudentByStunum(stu_num,success) {
    var sql = 'select * from student where stu_num=?';
    var param = [stu_num];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(sql, param, function (err, res) {
        if (err == null) {
            success(res);
        } else {
            console.log(err);
        }
    })
    connection.end();
}
function insertUserMsg(name,img_path,origin_name,img_size,success) {
    var sql = 'insert into user (name,img_path,origin_name,img_size) values (?,?,?,?)';
    var param = [name,img_path,origin_name,img_size];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(sql, param, function (err, res) {
        if (err == null) {
            success(res);
        } else {
            console.log(err);
        }
    })
    connection.end();
}
module.exports={
    insertUserMsg:insertUserMsg,
    queryAllStudent:queryAllStudent,
    queryStudentByStunum:queryStudentByStunum
}