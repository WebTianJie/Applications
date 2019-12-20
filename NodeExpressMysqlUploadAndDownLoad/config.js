var fs=require('fs');
var file=fs.readFileSync('./serve.conf').toString().split('\r\n');
var golbalConfig={}
for(var i=0;i<file.length;i++){
    var temp=file[i].split('=');
    if(temp.length<2){
        continue;
    }else{
        golbalConfig[temp[0]]=temp[1];
    }
}
module.exports=golbalConfig;

