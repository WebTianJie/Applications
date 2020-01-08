import VNode from "../vdom/vnode.js";
import {prepareRender,clearMap,getVNodeByTemplate} from "./render.js";
import {vmodel} from "./grammer/vmodel.js";
import {vForInit} from "./grammer/vfor.js";
import {mergeAttr} from "../Until/ObjectUntil.js";
import {checkVbind} from "./grammer/vbind.js";
import {checkVon} from "./grammer/von.js";


export function initMount(Due) {
    Due.prototype.$mount=function (el) {
        let vm=this;
        let rootDom=document.getElementById(el);
        mount(vm,rootDom);
    }
}
export  function mount(vm,el){
    //进行挂载
    vm._vnode=constructVnode(vm,el,null);
    //准备进行渲染
    prepareRender(vm,vm._vnode);
    // console.log(getVnode2Template());
    // console.log(getTemplate2Vnode());
}

function constructVnode(vm,elm,parent) {
    let vnode=analysisAttr(vm,elm,parent);
    if(vnode==null){
        let children=[];
        let data=null;
        let tag=elm.nodeName;
        let nodeType=elm.nodeType;
        let text=getNodeText(elm);
        vnode=new VNode(tag,elm,children,text,data,parent,nodeType);
        if(vnode.nodeType==1 && elm.getAttribute('env')){
            vnode.env=mergeAttr(vnode._data,JSON.parse(elm.getAttribute('env')));
        }else{
            vnode.env=mergeAttr(vnode._data,parent ? parent.env : {});
        }
    }
    checkVbind(vm,vnode);
    checkVon(vm,vnode);
     let childs=vnode.nodeType==0 ? vnode.parent.elm.childNodes : vnode.elm.childNodes;
     for(let i=0;i < childs.length;i++){
         let childnode=constructVnode(vm,childs[i],vnode);
         if(childnode instanceof  VNode){
             vnode.children.push(childnode);
         }else{//返回节点数组
            vnode.children=vnode.children.concat(childnode);
         }
     }
     return vnode;
}
function getNodeText(elm){
    if(elm.nodeType==3){
        return elm.nodeValue;
    }else{
        return '';
    }
}

function analysisAttr(vm,elm,parent) {
    if(elm.nodeType==1){
        let attrName=elm.getAttributeNames();
        if(attrName.indexOf('v-model') > -1){
            vmodel(vm,elm,elm.getAttribute('v-model'));
        }
        if(attrName.indexOf('v-for') > -1){
           return  vForInit(vm,elm,parent,elm.getAttribute('v-for'));
        }
    }
}
export  function rebuild(vm,template){
    let vnodes=getVNodeByTemplate(template);
    for(let i=0;i<vnodes.length;i++){
        vnodes[i].parent.elm.innerHTML='';
        vnodes[i].parent.elm.appendChild(vnodes[i].elm);
        let result=constructVnode(vm,vnodes[i].elm,vnodes[i].parent);
        vnodes[i].parent.children=[result];
        clearMap();
        prepareRender(vm,vm._vnode);
    }
}

