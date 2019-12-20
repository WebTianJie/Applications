var fs=require('fs');
var file=fs.readFileSync('./serve.conf').toString().split('\r\n');
var globalConfig={};
for(var  i in  file){
    var temp=file[i].split('=');
    if(temp.length<2){
        continue;
    }else{
        globalConfig[temp[0]]=temp[1];
    }
}

module.exports=globalConfig;