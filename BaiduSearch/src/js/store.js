/**

 * author  张高瑞 创建

 * date 2019-09-13 17:16
 * 状态管理
 */

function storeInit(initState) {
    var state=initState || {};
    var funcList=[];
    function getState(type){
        return state[type];
    }
    function dispatch(action){
        initState[action['type']]=action.value;
        for(var i=0; i<funcList.length;i++){
            funcList[i]();
        }
    }
    function subscribe(func){
        funcList.push(func);
    }
    return {
        getState:getState,
        subscribe:subscribe,
        dispatch:dispatch
    }
}

var  store= storeInit({
    text:'',
    sex:'all'
})