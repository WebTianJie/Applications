var  fs=require('fs');
var confs=fs.readFileSync('./server.conf').toString().split('\r\n');
var config={};
for(var i=0;i<confs.length;i++){
	var  temp=confs[i].split('=');
	config[temp[0]]=temp[1];
}

module.exports=config;
