function filterArrByText(data,text){
	if(!text){
		return data;
	}
	data=data.filter(function (ele,index,self){
		return ele.name.indexOf(text)>-1;
	})
	return data;
}
