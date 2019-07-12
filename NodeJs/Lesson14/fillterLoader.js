var fs=require('fs');
var config=require('./config.js');
var  files=fs.readdirSync(config['filter_path']);
var  controllerSet=[];
var pathMap=new Map();
var filterSet=[];
for(var i=0;i<files.length;i++){
	var temp=require('./'+config['filter_path']+'/'+files[i]);
	console.log(temp);
	if(temp.length>0){
		filterSet.push(temp);
	}
}
module.exports=filterSet;