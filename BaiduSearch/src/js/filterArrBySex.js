/**

 * author  张高瑞 创建

 * date 2019-09-13 16:49
 * 根据性别来进行筛选数据
 */

function filterArrBySex(sex,data){
    if(!sex){
        return;
    }
    if(sex=='all'){
        return data;
    }
    data=data.filter(function(item,index,self){
        return item.sex==sex;
    })
    return data;
}