export  function getValue(obj,key) {
    if(!obj){
        return obj;
    }
    let templateNames=key.split('.');
    let temp=obj;
    for (let i=0;i<templateNames.length;i++){
        if(temp[templateNames[i]]){
            temp=temp[templateNames[i]];
        }else{
            return undefined;
        }
    }
    return temp;
}

//obj:{name:'a',age:18,a:{x:0}}
//data,obj.a.x
export function setValue(obj,data,value){
    if(!obj){
        return ;
    }
    let attr=data.split('.');
    let temp=obj;
    for(let i=0;i<attr.length-1;i++){
        if(temp[attr[i]]){
            temp=temp[attr[i]]
        }else{
            return  ;
        }
    }
    if(temp[attr[attr.length-1]]){
        temp[attr[attr.length-1]]=value;
    }
}

export  function  getEnvAttr(vm,vnode){
    return mergeAttr(vm._data,vnode.env);
}

export  function  mergeAttr(attrTarget,attrOrigin){
    if(attrTarget==null){
        return clone(attrOrigin);
    }
    if(attrOrigin==null){
        return  clone(attrTarget);
    }
    let  result={};
    let  tarAttrs=Object.getOwnPropertyNames(attrTarget);
    let  oriAttrs=Object.getOwnPropertyNames(attrOrigin);
    for(let i=0;i<tarAttrs.length;i++){
        result[tarAttrs[i]]=attrTarget[tarAttrs[i]];
    }
    for(let i=0;i<oriAttrs.length;i++){
        result[oriAttrs[i]]=attrOrigin[oriAttrs[i]];
    }
    return result;
}
function  clone(obj){
    let result=null;
    if(obj instanceof  Array){
        result=cloneArray(obj);
    } else if(obj instanceof  Object){
        result=cloneObj(obj);
    } else {
        result=obj;
    }
    return result;
}

function cloneArray(array){
    if(!array){
        return ;
    }
    let result=new Array(array.length);
    for(let i=0;i<array.length;i++){
        result[i]=clone(array[i]);
    }
    return result;
}

function cloneObj(obj){
    if(!obj){
        return ;
    }
    let result={};
    for(let prop in obj ){
        result[prop]=clone(obj[prop]);
    }
    return result;
}




















