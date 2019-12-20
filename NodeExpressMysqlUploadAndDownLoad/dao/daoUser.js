var dbuntil=require('./Dbutils.js');
function  insertUserMsg(name,path,originalname,size,success){
    var  sql="insert into user (name,img_path,origin_name,img_size) values (?,?,?,?)";
    var  param=[name,path,originalname,size];
    var  connection=dbuntil.createConnection();
    connection.query(sql,param,function (err,res) {
        if(err==null){
            success(res);
        }
    });
}

module.exports={
    insertUserMsg
}