import {getValue} from '../until/ObjectUntil.js'
/**
 * author  张高瑞 创建
 * 根据vnode节点进行渲染
 * date 2019-09-13 14:53
 */

let mapTemplate2VNode=new Map();
let mapVNode2Template=new Map();

export  function prepareRender(vm,vnode){
    if(!vnode){
        return ;
    }
    if(vnode.nodeType==3){//文本节点
        analysisTemplate(vnode);
    }
    if(vnode.nodeType==0){
        setTemplate2VNode(vnode.data,vnode);
        setVNode2Template(vnode,vnode.data);
    }
    analysisAttr(vm,vnode);
    let  childs=vnode.children;
    for(let i=0;i<childs.length;i++){
        prepareRender(vm,childs[i]);
    }
}

export function renderMixin(Aue){
    Aue.prototype._render=function(){
        renderNode(this,this._vnode);
    }
}


export  function renderData(vm,template){
    let vnodes=mapTemplate2VNode.get(template);
    if(!vnodes){
        return ;
    }
    for(let  i=0;i<vnodes.length;i++){
        renderNode(vm,vnodes[i]);
    }
}

export function  renderNode(vm,vnode){
    if(!vnode){
        return;
    }
    if(vnode.nodeType==3){//文本节点渲染
        let templates=mapVNode2Template.get(vnode);
        if(templates){
            let result=vnode.text;
            for(let i=0;i<templates.length;i++){
               let templateValue=getTemplateValue([vm._data,vm.env],templates[i]);
                if(templateValue) {
                    result = result.replace('{{' + templates[i] + '}}', templateValue);
                }
            }
            vnode.elm.nodeValue = result;
        }
    }else if(vnode.tag=='INPUT' && vnode.nodeType==1){
        let templates=mapVNode2Template.get(vnode);
        if(templates){
            for(let i=0;i<templates.length;i++) {
                let templateValue = getTemplateValue([vm._data, vm.env], templates[i]);
                if (templateValue) {
                    vnode.elm.value = templateValue;
                }
            }
        }
    }
    else{
        for(let i=0;i<vnode.children.length;i++){
            renderNode(vm,vnode.children[i]);
        }
    }
}


function analysisTemplate(vnode){
    let templateList=vnode.text.match(/{{[0-9a-zA-Z_.]+}}/g);
    for(let i=0;templateList && i<templateList.length;i++){
            setTemplate2VNode(templateList[i],vnode);
            setVNode2Template(vnode,templateList[i]);
    }
}

function setTemplate2VNode(template,vnode){
    let templateName=getTemplateName(template);
    let  vnodeSet=mapTemplate2VNode.get(templateName);
    if(vnodeSet){
        vnodeSet.push(vnode);
    }else{
        mapTemplate2VNode.set(templateName,[vnode]);
    }
}

function setVNode2Template(vnode,template) {
    let templateName=getTemplateName(template);
    let templateSet=mapVNode2Template.get(vnode);
    if(templateSet){
        templateSet.push(templateName);
    }else{
        mapVNode2Template.set(vnode,[templateName]);
    }
}

function getTemplateName(template){//截取花括号{{des}}
    if(template.substring(0,2)=='{{' && template.substring(template.length-2,template.length)=='}}'){
        return template.substring(2,template.length-2);
    }else{
        return template;
    }
}

function getTemplateValue(objs,template){
    for(let i=0;i<objs.length;i++){
            let temp=getValue(objs[i],template);
            if(temp!=null){
                return temp;
            }
    }
    return null;
}

export function getTemplate2VNnode(){
    return mapTemplate2VNode;
}

export function getVNode2Template(){
    return mapVNode2Template;
}
function analysisAttr(vm,vnode){
    if(vnode.nodeType!=1){
        return ;
    }
    let attrNames=vnode.elm.getAttributeNames();
    if(attrNames.indexOf('v-model')>-1){
        setVNode2Template(vnode,vnode.elm.getAttribute('v-model'));
        setTemplate2VNode(vnode.elm.getAttribute('v-model'),vnode);
    }
}
export function getVNodeByTemplate(template){
    return mapTemplate2VNode.get(template);
}
export function clearMap(){
    mapTemplate2VNode.clear();
    mapVNode2Template.clear();
}