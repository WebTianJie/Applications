var personArr=[
			{name:'王玲',src:'src/images/1.jpg',des:'很好55',sex:'m',age:18},
			{name:'刘东',src:'src/images/2.jpg',des:'很好44',sex:'f',age:16},
			{name:'李晗',src:'src/images/3.jpg',des:'很好33',sex:'m',age:13},
			{name:'张天星',src:'src/images/4.jpg',des:'很好22',sex:'f',age:12},
			{name:'张天行',src:'src/images/4.jpg',des:'很好44',sex:'m',age:12},
			{name:'陈楠',src:'src/images/5.jpg',des:'很好11',sex:'m',age:19}
];
var oUl=document.getElementsByTagName('ul')[0];
var btnArray=[].slice.call(document.getElementsByClassName('btn'),0);
var oInput=document.getElementsByTagName('input')[0];
var lastActiveBtn=btnArray[2];
renderPage(personArr);
store.subscribe(function(){
	renderPage(lastFilterArr(personArr));
})
btnArray.forEach(function(item,index,self){
	item.onclick=function(){
		store.dispatch({
			type:'sex',
			value:this.getAttribute('sex')
		})
		changeActive(this);
	};
})

oInput.oninput=function(){
	store.dispatch({
		type:'text',
		value:this.value
	})
}











