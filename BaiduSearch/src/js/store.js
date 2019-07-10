function createStore(initState){
	var state=initState||{};
	var funList=[];
	function getState(type){
		return state[type];
	}
	function disPatch(action){
		state[action.type]=action.value;
		funList.forEach(function(ele,index,self){
			ele();
		})
	}
	function subscribe(func){
		funList.push(func);
	}
	return {
		getState:getState,
		disPatch:disPatch,
		subscribe:subscribe
	}
}
var store=createStore({
	text:'',
	sex:'all'
})