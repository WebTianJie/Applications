function filterArr(config){
	return function (data){
		for(var item in config){
			data=config[item](data,store.getState(item));
		}
		return data;
	}
}

var combineFilterArr=filterArr({
	text:filterArrByText,
	type:filterArrBySex
})