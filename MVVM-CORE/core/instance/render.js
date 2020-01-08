import {getValue} from "../Until/ObjectUntil.js";
import {vmodel} from "./grammer/vmodel.js";

let template2Vnode=new Map();
let vnode2Template=new Map();

export function renderMixin(Due){
    Due.prototype._render=function (){
        renderNode(this,this._vnode);
    }
}

export function renderData(vm,data) {
    let vnodes=template2Vnode.get(data);
    if(vnodes){
        for(let i=0;i<vnodes.length;i++){
            renderNode(vm,vnodes[i]);
        }
    }
}

function renderNode(vm,vnode){
    if(vnode.nodeType==3){
        let templates=vnode2Template.get(vnode);
        if(templates){
            let result=vnode.text;
            for(let i=0;i<templates.length;i++){
              let templateData=getTemplateValue([vm._data,vnode.env],templates[i]);//当前节点的数据,可以来自data对象,也可以来自父级节点
                if(templateData){
                    result=result.replace('{{'+templates[i]+'}}',templateData);
                }
            }
            vnode.elm.nodeValue=result;
        }
    }else if(vnode.nodeType==1 && vnode.tag=='INPUT'){
            let templates=getTemplate2Vnode(vnode);
            if(templates){
                for(let i=0;i<templates.length;i++){
                    let templateValue=getTemplateValue([vm._data,vnode.env],templates[i]);
                    console.log(templateValue);
                    vnode.elm.value=templateValue;
                }
            }
    }
    else{
        let childs=vnode.children;
        for(let i=0;i<childs.length;i++){
            renderNode(vm,childs[i]);
        }
    }
}
function  getTemplateValue(objs,result){
    for(let i=0;i<objs.length;i++){
        let value=getValue(objs[i],result);
        if(value){
            return value;
        }
    }
    return null;

}
export   function prepareRender(vm,vnode){
    if(vnode==null){
      return ;
    }
    if(vnode.nodeType==3){//文本节点间
      analysisTemplate(vnode);
    }
    if(vnode.nodeType==0){//文本节点间
        setTemplate2Vnode(vnode.data,vnode);
        setVnode2Template(vnode,vnode.data)
    }
    analysisAttr(vm,vnode);
      for(let i=0;i<vnode.children.length;i++){
          prepareRender(vm,vnode.children[i]);
      }
}
function analysisTemplate(vnode) {
  let tempArr=vnode.text.match(/{{[A-Za-z0-9_.]+}}/g);
  for(let i=0; tempArr && i<tempArr.length;i++){
      let tempName=getTempName(tempArr[i]);
      setTemplate2Vnode(tempName,vnode);
      setVnode2Template(vnode,tempName);
  }
}

function setTemplate2Vnode(template,vnode){
    let tempSet=template2Vnode.get(template);
    if(tempSet){
        tempSet.push(vnode);
    }else{
        template2Vnode.set(template,[vnode]);
    }
}

function setVnode2Template(vnode,template){
      let tempSet=vnode2Template.get(vnode);
        if(tempSet){
            tempSet.push(template);
        }else{
            vnode2Template.set(vnode,[template]);
        }
}

function  getTempName(temp) {
      if(temp.substr(0,2)=='{{' && temp.substring(temp.length-2,temp.length)=='}}'){
           return temp.substring(2,temp.length-2);
      }
}

export function getTemplate2Vnode() {
   return  template2Vnode;
}

export function getVnode2Template(){
    return vnode2Template;
}
function analysisAttr(vm,vnode) {
    if(vnode.nodeType==1){
        let attrName=vnode.elm.getAttributeNames();
        if(attrName.indexOf('v-model') > -1){
            setVnode2Template(vnode,vnode.elm.getAttribute('v-model'));
            setTemplate2Vnode(vnode.elm.getAttribute('v-model'),vnode);
        }
    }
}

export  function  getVNodeByTemplate(template) {
    return template2Vnode.get(template);
}

export function  clearMap() {
    template2Vnode.clear();
    vnode2Template.clear();
}