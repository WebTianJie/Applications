/**

 * author  张高瑞 创建

 * date 2019-09-24 10:29
 * v-on绑定事件
 */
import {getValue} from "../until/ObjectUntil.js";

export function checkVOn(vm,vnode){
  if(vnode.nodeType != 1){
      return ;
  }
  let attrNames=vnode.elm.getAttributeNames();
  for(let i=0;i<attrNames.length;i++){
      if(attrNames[i].indexOf('v-on:')==0 || attrNames[i].indexOf('@:')==0){
            von(vm,vnode,attrNames[i].split(':')[1],vnode.elm.getAttribute(attrNames[i]));
      }
  }
}
export function von(vm,vnode,event,name){
    let method=getValue(vm._methods,name);
    vnode.elm.addEventListener(event,proxyEvent(vm,method));
}

function proxyEvent(vm,method) {
   return function (){
       method.apply(vm);
   }
}