var studentDao=require('../dao/studentDao.js');
function queryAllStudent(success){
	studentDao.queryAllStudent(success);
}
function queryStudentByName(name,pwd,success){
	
	studentDao.queryStudentByName(name,pwd,success);
}
module.exports={
	queryAllStudent:queryAllStudent,
	queryStudentByName:queryStudentByName
}