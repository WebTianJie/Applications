function filterByText(data,text){
	data=data.filter(function(ele,index,self){{
		return ele.name.indexOf(text)>-1;
	}})
	return data;
}