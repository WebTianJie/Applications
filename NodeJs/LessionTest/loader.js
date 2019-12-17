var  fs=require('fs');
var config=require('./config.js');
var  fileArr=fs.readdirSync(config['web_path']);
var  methodDataSet=new Map();
for(var  i=0;i<fileArr.length;i++){
    var path=require('./'+config['web_path']+'/'+fileArr[i]).path;
    if(path){
        for( var [k,v] of path){
           if(!methodDataSet.get(k)){
               methodDataSet.set(k,v);
           }else{
               throw new Error('接口已经存在');
           }
        }
    }else{
        console.log('路径不存在');
    }
}

module.exports=methodDataSet