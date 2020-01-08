import VNode from "../../vdom/vnode.js";
import {getValue} from "../../Until/ObjectUntil.js";

export function vForInit(vm,elm,parent,instructions) {
    let  vnode=new VNode(elm.nodeName,elm,[],'',getVnodeData(instructions)[2],parent,0);
    vnode.instructions=instructions;
     parent.elm.removeChild(elm);
     parent.elm.appendChild(document.createTextNode(''));
    let  result=analysisInstructions(vm,instructions,elm,parent);
    return vnode;
}
function analysisInstructions(vm,instructions,elm,parent){
    if(!instructions){
        return null;
    }
    let inSet=getVnodeData(instructions);
    let data=getValue(vm._data,inSet[2]);
    let  result=[];
    for(let i=0;i < data.length;i++){
        let tempDom=document.createElement(elm.nodeName);
        tempDom.innerHTML=elm.innerHTML;
       let env=analysisKV(inSet[0],data[i],i);
       tempDom.setAttribute('env',JSON.stringify(env));
       parent.elm.append(tempDom);
       result.push(tempDom);
    }
    return result;
}
function analysisKV(instructions,data,index){
    let keyGrammer=/[A-Za-z0-9_$]+/;
    if(keyGrammer.test(instructions)){
        instructions=instructions.trim().substring(1,instructions.length-1);
    }
    let keys=instructions.split(',');
    let obj={};
    if(keys.length>=1){
        obj[keys[0]]=data;
    }
    if(keys.length>=2){
        obj[keys[1]]=index;
    }
    return  obj;
}
function getVnodeData(instructions) {
   if(!instructions){
       return null;
   }
   let datas=instructions.trim().split(' ');
   if(datas.length != 3 || datas[1] != 'of' && datas[1] != 'in'){
        throw Error('语法错误');
   }
   return  datas;
}