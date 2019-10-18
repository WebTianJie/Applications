/**

 * author  张高瑞 创建
 * 挂载节点的方法
 * date 2019-09-13 10:18
 */
import VNode from "../vdom/vnode.js";
import {prepareRender,getTemplate2VNnode,getVNodeByTemplate,clearMap} from "./render.js";
import {vmodel} from "../grammmer/vmodel.js";
import {vforInit} from "../grammmer/vfor.js";
import {mergeAttr} from "../until/ObjectUntil.js";
import {checkBind} from "../grammmer/vbind.js";
import {checkVOn} from "../grammmer/von.js";

export   function mount(vm,elm){
    //进行挂载
    vm._vnode=constructVNode(vm,elm,null);
    //进行渲染,建立渲染索引
    prepareRender(vm,vm._vnode);
}

function initMount(Aue){
    Aue.prototype.$mount=function(elm){
        let vm=this;
        let rootDom=document.getElementById(elm);
        mount(vm,rootDom);
    }
}

function constructVNode(vm,elm,parent){
   let vnode=analysisAttrs(vm,elm,parent);
   if(vnode == null){
       let children=[];
       let text=getNodeText(elm);
       let data=null;
       let nodeType=elm.nodeType;
       let tag=elm.nodeName;
       vnode = new VNode(tag,elm,children,text,nodeType,data,parent);
       if(elm.nodeType==1 && elm.getAttribute('env')){
         vnode.env=mergeAttr(vnode.env,JSON.parse(elm.getAttribute('env')))
       }else{
           vnode.env=mergeAttr(vnode.env,parent ? parent.env:{});
       }
   }
    checkBind(vm,vnode);
    checkVOn(vm,vnode);
   let childs=vnode.nodeType==0?vnode.parent.elm.childNodes:vnode.elm.childNodes;
   let len=vnode.nodeType==0?vnode.parent.elm.childNodes.length:vnode.elm.childNodes.length;
   for(let i=0;i<len;i++){
       let childNode=constructVNode(vm,childs[i],vnode);
       if(childNode instanceof  VNode){//返回单一节点的时候
            vnode.children.push(childNode);
       }else{//返回节点数组的时候
            vnode.children=vnode.children.concat(childNode);
       }
   }
   return vnode;
}

function  getNodeText(elm){
    if(elm.nodeType==3){
        return elm.nodeValue;
    }else{
        return '';
    }
}

function analysisAttrs(vm,elm,parent){
    if(elm.nodeType==1){
        let  attrNames=elm.getAttributeNames();
            if(attrNames.indexOf('v-model')>-1){
                let value=elm.getAttribute('v-model');
                vmodel(vm,elm,value);
            }
            if(attrNames.indexOf('v-for')>-1){
                return vforInit(vm,elm,parent,elm.getAttribute('v-for'));
            }
    }

}

export function rebuild(vm,template){
    let vnode=getVNodeByTemplate(template);
    for(let i=0;i<vnode.length;i++){
        vnode[i].parent.elm.innerHTML='';
        vnode[i].parent.elm.appendChild(vnode[i].elm);
        let result=constructVNode(vm,vnode[i].elm,vnode[i].parent);
        vnode[i].parent.children=[result];
        clearMap();
        prepareRender(vm,vm._vnode)
    }
}