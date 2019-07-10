function filterArr(config){
	return function (data){
		for (var item in config) {
			data=config[item](data,store.getState(item));
		}
		return data;
	}
}

var lastFilterArr=filterArr({
	text:filterByText,
	sex:filterBySex
})