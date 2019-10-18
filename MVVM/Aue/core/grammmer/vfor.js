/**

 * author  张高瑞 创建

 * date 2019-09-19 11:57
 * v-for指令
 */

import VNode from "../vdom/vnode.js";
import {getValue} from "../until/ObjectUntil.js";

export function vforInit(vm, elm, parent, instruction) {
    let virtualNode=new VNode(elm.nodeName,elm,[],'',0,getVirtualNodeData(instruction)[2],parent);
    virtualNode.instructions=instruction;
    parent.elm.removeChild(elm);
    parent.elm.appendChild(document.createTextNode(''));
    analysisInstructions(vm,instruction,elm,parent);
    return virtualNode;
}
function getVirtualNodeData(instruction){
    let insSet=instruction.trim().split(' ');
    if(insSet.length !=3 || insSet[1] != 'in' && insSet[1] != 'of'){
        throw new Error('Error: grammer is Error')
    }
    return insSet;
}
function analysisInstructions(vm,instruction,elm,parent){
    let  insSet=getVirtualNodeData(instruction);
    let  dataSet=getValue(vm._data,insSet[2]);
    if(!dataSet){
        throw new Error('Error get value is error')
    }
    let resultSet=[];
    for(let i=0;i<dataSet.length;i++){
        let tempDom=document.createElement(elm.nodeName);
        tempDom.innerHTML=elm.innerHTML;
        let env=analysisKv(insSet[0],dataSet[i],i);//获取局部变量
        tempDom.setAttribute('env',JSON.stringify(env));//将变量添加到dom中去
        parent.elm.appendChild(tempDom);
        resultSet.push(tempDom);
    }
    return resultSet;
}

function analysisKv(instruction,value,index){
       if(/([0-9a-zA-Z_$]+)/.test(instruction)){
            instruction=instruction.trim().substring(1,instruction.length-1);
       }
       let keys=instruction.split(',');
       if(keys.length==0){
           throw new Error('error key is error');
       }
       let obj={};
       if(keys.length>=1){
           obj[keys[0].trim()]=value;
       }
       if(keys.length>=2){
           obj[keys[1].trim()]=index;
       }
       return obj;
}