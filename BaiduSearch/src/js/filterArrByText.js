/**

 * author  张高瑞 创建

 * date 2019-09-13 16:43
 * 根据输入文本,筛选数据
 */

function filterArrByText(text,data){
    if(text.length==0){
        return  data;
    }
    data=data.filter(function(item,index,self){
        return item.name.indexOf(text)>-1;
    })
    return data;
}