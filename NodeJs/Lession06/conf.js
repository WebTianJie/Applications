var fs=require('fs');
var config=fs.readFileSync('server.conf');
var globaConf={};
var configs=config.toString().split('\r\n');
for(var i=0;i<configs.length;i++){
	var tempConf=configs[i].split("=");
	if(tempConf.length<2){
		continue;
	}else{
		globaConf[tempConf[0]]=tempConf[1];
	}
}
if(globaConf["path_positioin"]=="relative"){
	globaConf.basePath=__dirname+globaConf.path;
}else{
	globaConf.basePath=globaConf.path;
}

module.exports=globaConf;