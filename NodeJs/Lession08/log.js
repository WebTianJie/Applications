var fs=require('fs');
var config=require('./config');
var fileName=config.log_path+config.log_name;
// fs.writeFile(fileName,'同步日志内容1234567890-',function(){
// 	
// });
fs.appendFile(fileName,data);//追加写操作
function log(data){
	if(data.length>0){
		fs.writeFileSync(fileName,data+'\n',{flag:'a'});
	}
}
module.exports.write=log;