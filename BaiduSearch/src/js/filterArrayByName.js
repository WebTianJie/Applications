function filterArrayByName(name,data){
	if(!data){
		return data;
	}
	data=data.filter(function(ele,index){
		return ele.name.indexOf(name)>-1;
	})
	return  data;
}