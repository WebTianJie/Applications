function filterBySex(data,type){
	if(type=="all"){
		return data;
	}
	data=data.filter(function(ele,index,self){
		return ele.sex==type;
	})
	return data;
}