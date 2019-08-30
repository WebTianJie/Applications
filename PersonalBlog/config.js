var fs=require('fs');
var conArr=fs.readFileSync('./server.conf').toString().split('\r\n');
var config={};
for(var i=0;i<conArr.length;i++){
	var  tempArr=conArr[i].split('=');
	config[tempArr[0]]=tempArr[1];
}

module.exports=config;