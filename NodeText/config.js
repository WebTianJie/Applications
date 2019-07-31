var  fs=require('fs');
var  file=fs.readFileSync('./server.conf').toString().split('\r\n');
var config={};
for(var  i=0;i<file.length;i++){
	var temp=file[i].split('=');
	config[temp[0]]=temp[1];
}
module.exports=config;