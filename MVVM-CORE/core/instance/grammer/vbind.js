import {getValue,getEnvAttr} from "../../Until/ObjectUntil.js";
import {generateCode,isTrue} from "../../Until/code.js";

export function checkVbind(vm,vnode){
    if(vnode.nodeType != 1){
        return ;
    }
    let  attrName=vnode.elm.getAttributeNames();
    for(let i=0;i<attrName.length;i++){
       if(attrName[i].indexOf('v-bind')==0 || attrName[i].indexOf(':')==0){
         vbind(vm,vnode,attrName[i],vnode.elm.getAttribute(attrName[i]));
       }
    }
}

function vbind(vm,vnode,template,value){
        if(!template){
            return ;
        }
        let attr=template.split(':');
        if(/^{[\w\W]+}$/.test(value)){
            let compression=value.trim().substring(1,value.length-1);
            let comps=compression.split(',');
            let result=analysisCompress(vm,vnode,comps);
            vnode.elm.setAttribute(attr[1],result);
        }else{
            let result=getValue(vm._data,value);
            vnode.elm.setAttribute(attr[1],result);
        }

}

function  analysisCompress(vm,vnode,comps){
    //获取当前环境变量
    let attr=getEnvAttr(vm,vnode);
    let envCode=generateCode(attr);
    let  result='';
    for(let i=0;i<comps.length;i++){
        let site=comps[i].indexOf(':');
        if(site > -1){
            let code=comps[i].trim().substring(site+1,comps[i].length);
            if(isTrue(code,envCode)){
                result+=comps[i].substring(0,site);
            }
        }else{
            result+=comps[i]+',';
        }
    }
    if(result.length>0){
        result=result.substring(0,result.length-1);
    }
    return result;
}