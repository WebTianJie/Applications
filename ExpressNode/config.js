var fs=require('fs');
var res=fs.readFileSync('./server.conf').toString();
var arr=res.split('\r\n');
var config={};
for(var  i=0;i<arr.length;i++){
	var temp=arr[i].split('=');
	config[temp[0]]=temp[1];
}

module.exports=config;