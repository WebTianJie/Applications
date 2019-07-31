function renderPage(data){
	if(!data||data.length==0){
		return ;
	}
	var strHmtl='';
	data.forEach(function (ele,index,self){
		strHmtl+='<li><img src="'+ele.src+'"/><p class="name">'+ele.name+'</p><p class="des">'+ele.des+'</p></li>';
	})
	oUl.innerHTML=strHmtl;
}