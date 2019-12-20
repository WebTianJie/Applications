var fs=require('fs');
var config=require('./config.js');
var files=fs.readdirSync('./'+config['web_path']+'/');
var requireList=new  Map();
function init(app){
    for(var i=0;i<files.length;i++){
        var file=require('./'+config['web_path']+'/'+files[i]);
        for(var [k,v] of file){
            if(!requireList.get(k)){
                requireList.set(k,v);
                app.get(k,v);
            }else{
                throw  Error('接口重复',k);
            }
        }
    }
}
module.exports={
    init:init
};