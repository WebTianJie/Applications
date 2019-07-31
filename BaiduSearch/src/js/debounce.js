function debounce(func,delay){
	var timer=null;
	return function () {
		var self=this,arg=arguments;
		clearTimeout(timer);
		timer=setTimeout(function (){
			func.apply(self,arg);
		},delay);
	}
}
