var fs=require('fs');
var config=fs.readFileSync("./server.conf")
var confs=config.toString().split('\r\n');
var  globaConf={};
for(var i=0;i<confs.length;i++){
	var tempS=confs[i].split('=');
	globaConf[tempS[0]]=tempS[1];
}
if(globaConf.static_file_type){
	globaConf.static_file_type=globaConf.static_file_type.split("|");
}else{
	throw new Error("配置文件异常,缺少:static_file_type");
}
module.exports=globaConf;
