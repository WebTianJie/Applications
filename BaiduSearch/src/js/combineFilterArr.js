/**

 * author  张高瑞 创建

 * date 2019-09-13 16:55
 * 合并所有的条件
 */

function combineFilterArr(config){
    return function(data){
        for(var item in config){
            data=config[item](store.getState(item),data);
        }
        return data;
    }
}

var lastFilterArr=new combineFilterArr({
    text:filterArrByText,
    sex:filterArrBySex
})