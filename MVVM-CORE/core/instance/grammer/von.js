import {getValue} from "../../Until/ObjectUntil.js";

export function  checkVon(vm,vnode){
    if(vnode.nodeType !=1 ){
        return ;
    }
    let attrNames=vnode.elm.getAttributeNames();
    for(let i=0;i< attrNames.length;i++){
        let tempAttr=attrNames[i].trim();
        if(tempAttr.indexOf('v-on') == 0 || tempAttr.indexOf('@') == 0){
            let name=tempAttr.split(":")[1];
            von(vm,vnode,name,vnode.elm.getAttribute(tempAttr));
        }
    }
}

function von(vm,vnode,name,event){
    let method=getValue(vm._methods,event);
    vnode.elm.addEventListener(name,proxy(vm,method));
}
function proxy(vm,method){
    return function () {
        method.call(vm);
    }
}
