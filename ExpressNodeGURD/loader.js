var fs=require('fs');
var  path=new Map();
var  config=require('./config.js');
var files=fs.readdirSync('./'+config['web_path']+'/');

function init(app){
    for(var  i=0;i<files.length;i++){
        var file=require('./'+config['web_path']+'/'+files[i]);
        if(file.path){
            for(var [k,v] of file.path){
                if(!path.get(k)){
                    path.set(k,v);
                    app.get(k,v);
                }else{
                    throw Error('接口重复请确定',k);
                }
            }
        }
    }

}
module.exports={
    init:init,
    path:path
}
