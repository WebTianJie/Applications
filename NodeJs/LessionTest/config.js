/**

 * author  Administrator 创建

 * date 2019-12-17 13:58

 */
var  fs=require('fs');
var file=fs.readFileSync('./service.conf').toString().split('\r\n');
var  golabalConfig={};
for(var i=0;i<file.length;i++){
    var temp=file[i].split('=');
    if(temp.length<2){
        continue
    }else{
        golabalConfig[temp[0]]=temp[1];
    }
}

module.exports=golabalConfig;