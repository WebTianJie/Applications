function storeInit(initState){
	var  state=initState||{};
	var funclist=[];
	function getState(type){
		return state[type];
	}
	function subscribe(func){
		funclist.push(func);
	}
	function dispatch(action){
		state[[action.type]]=action.value;
		for(var i=0;i<funclist.length;i++){
			funclist[i]();
		}
	}
	return {
		getState:getState,
		subscribe:subscribe,
		dispatch:dispatch
	}
}

var  store=storeInit({
	type:'all',
	name:''
})