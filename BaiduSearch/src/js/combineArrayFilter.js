function lastFilterArray(config){
	return function(data){
		for(var ele in config){
			data=config[ele](store.getState(ele),data);
		}
		return data;
	}
}

var filterArray=lastFilterArray({
	type:filterArrayByType,
	name:filterArrayByName
})