function renderPage(data){
	if(data.length==0){
		return ;
	}
	var htmlStr='';
	data.forEach(function(ele,index,self){
		htmlStr+='<li><img src="'+ele.src+'"/><p class="name">'+ele.name+'</p><p class="des">'+ele.des+'</p></li>';
	});
	oUl.innerHTML=htmlStr;
}