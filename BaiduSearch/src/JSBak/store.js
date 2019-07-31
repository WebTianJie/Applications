function storeInit(initState){
	var state=initState||{};
	var funcList=[];
	function getState(type){
		return state[type];
	}
	function disPatch(action){
		state[action['type']]=action.value;         
		for(var i=0;i<funcList.length;i++){
			funcList[i]();
		}
	}
	function subscribe(func){
		funcList.push(func);
	}
	return {
		getState:getState,
		disPatch:disPatch,
		subscribe:subscribe
	}
}

var store=storeInit({
	text:'',
	type:'all'
})