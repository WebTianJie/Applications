var sudentDao=require('../dao/studentDao.js');
function queryAllStudent(success){
	return sudentDao.queryAllStudent(success);
}
module.exports={
	queryAllStudent:queryAllStudent
}