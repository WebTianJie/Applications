var studentDao=require('../dao/studentDao.js')
var path=new Map();
function queryGrade(success){
}
path.set('/queryGrade',queryGrade);
module.exports.path=path;