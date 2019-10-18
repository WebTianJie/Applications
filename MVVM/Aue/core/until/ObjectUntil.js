/**

 * author  张高瑞 创建

 * date 2019-09-17 10:32
 * 工具类
 */

export function getValue(obj,template){
    if(!obj){
        return obj;
    }
    let nameList=template.split('.');
    let temp=obj;
    for(let i=0;i<nameList.length;i++){
        if(temp[nameList[i]]){
            temp=temp[nameList[i]];
        }else{
            return undefined;
        }
    }
    return temp;
}
//data:{obj:{x:1,y:1}}
export function setValue(obj,data,value){
    if(!obj){
        return;
    }
    let  attrList=data.split('.');
    let temp=obj;
    for(let i=0;i<attrList.length-1;i++){
        if(temp[attrList[i]]){
            temp=temp[attrList[i]];
        }else{
            return undefined;
        }
    }
    if(temp[attrList[attrList.length-1]]!=null){
        temp[attrList[attrList.length-1]]=value;
    }
}
//合并两个(多个)对象属性
export function  mergeAttr(obj,obj1){
    if(obj==null){
        return clone(obj1);
    }
    if(obj1==null){
        return clone(obj);
    }
    let result={};
    let namesObj=Object.getOwnPropertyNames(obj)
    for(let i=0;i<namesObj.length;i++){
        result[namesObj[i]]=obj[namesObj[i]];
    }
    let namesObj1=Object.getOwnPropertyNames(obj1)
    for(let i=0;i<namesObj1.length;i++){
        result[namesObj1[i]]=obj1[namesObj1[i]];
    }
    return result;
}
function easyClone(obj){//无法克隆代理对象
    JSON.parse(JSON.stringify(obj));
}
//经典克隆算法
 export function  clone(obj){
    if(obj instanceof Object){
        return cloneObj(obj);
    }else if(obj instanceof  Array){
        return cloneArray(obj)
    }else{
        return  obj;
    }
}

function cloneObj(obj){
    let result={};
    let  names=Object.getOwnPropertyNames(obj);
    for(let i=0;i<names.length;i++){
        result[names[i]]=clone(obj[names[i]]);
    }
    return result;
}

function cloneArray(obj){
    let result=[obj.length];
    for(let i=0;i<obj.length;i++){
        result[i]=clone(obj[i]);
    }
    return result;
}
export function getEnvAttr(vm,vnode){
    let result=mergeAttr(vm._data,vnode.env);
    result=mergeAttr(result,vm._computed);
    return result;
}