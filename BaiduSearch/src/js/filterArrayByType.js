 function filterArrayByType(type,data){
	 if(!data||type=='all'){
		 return data;
	 }
	 data=data.filter(function(ele,index){
		 return ele.sex==type;
	 })
	 return data;
 }