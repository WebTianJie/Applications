import {getValue} from '../until/ObjectUtil.js'
export  function prepareRender(vm,vnode){
	if(vnode==null){
		return ;
	}
	if(vnode.nodeType==3){//是个文本节点
		analysisTemplateString(vnode);
	} 
	if(vnode.nodeType==0){
		setTemplate2Vnode(vnode.data,vnode);
		setVnode2Template(vnode.data,vnode);
	}
	analysisAttr(vm,vnode);
	for(let i=0;i<vnode.children.length;i++){
		prepareRender(vm,vnode.children[i]);
	}
	
}

function analysisTemplateString(vnode){
	let templateStrlist=vnode.text.match(/{{[a-zA-Z0-9_.]+}}/g);
	for(let i=0;templateStrlist && i<templateStrlist.length;i++){
		setTemplate2Vnode(templateStrlist[i],vnode);
		setVnode2Template(templateStrlist[i],vnode);
	}
}
//通过模板找到那些节点用到了这个模板
let template2Vnode=new Map();
//通过节点,找到这个节点下面有些哪些模板
let vnode2Template=new Map();

export function renderMinix(Due){
	Due.prototype._render=function(){
		renderNode(this,this._vnode);
	}	
}

export function  renderData(vm,data){
	let vnodes=template2Vnode.get(data);
	if(vnodes!=null){
		for(let i=0;i<vnodes.length;i++){
			renderNode(vm,vnodes[i]);
		}
	}
}
export function renderNode(vm,vnode){
	if(vnode.nodeType==3){
		let template=vnode2Template.get(vnode);
		if(template){
			let result=vnode.text;
			for(let i=0;i<template.length;i++){
				let templateValue=getTemplateValue([vm._data,vnode.env],template[i]);
				if(templateValue){
					result=result.replace('{{'+template[i]+'}}',templateValue);
				}
			}
			vnode.elm.nodeValue=result;
		}
	}else if(vnode.nodeType==1 && vnode.tag=='INPUT'){
		let templates=vnode2Template.get(vnode);
		if(templates){
			for(let i=0;i<templates.length;i++){
				let templateValue=getTemplateValue([vm._data,vm.env],templates[i]);
				if(templateValue){
					vnode.elm.value=templateValue;
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
function getTemplateValue(objs,templateName){
	for(let i=0;i<objs.length;i++){
		let temp=getValue(objs[i],templateName);
		if(temp!=null){
			return temp;
		}
	}
	return null;
}
function setTemplate2Vnode(template,vnode){
	let templateName=getTemplateName(template)
	let vnodeSet=template2Vnode.get(templateName);
	if(vnodeSet){
		vnodeSet.push(vnode);
	}else{
		template2Vnode.set(templateName,[vnode]);
	}
}
function setVnode2Template(template,vnode){
	let templateSet=vnode2Template.get(vnode);
	if(templateSet){
		templateSet.push(getTemplateName(template));
	}else{
		vnode2Template.set(vnode,[getTemplateName(template)]);
	}
};
function getTemplateName(template){
	//判断是否有花括号有的话则去掉,没有的户则直接返回
	if(template.substring(0,2)=="{{" && template.substring(template.length-2,template.length)=="}}"){
		return template.substring(2,template.length-2);
	}else{
		return template;
	}
}

function analysisAttr(vm,vnode){
	if(vnode.nodeType!=1){
		return ;
	}
	let atttrNames=vnode.elm.getAttributeNames();
	if(atttrNames.indexOf('v-model')>-1){
		setTemplate2Vnode(vnode.elm.getAttribute('v-model'),vnode);
		setVnode2Template(vnode.elm.getAttribute('v-model'),vnode);
	}
}

export function getTemplate2VnodeMap(){
	return  template2Vnode;
}
export function getVnode2TemplateMap(){
	return vnode2Template;
}

export function getVNodeByTemplate(template){
	return template2Vnode.get(template);
}

export function  clearMap(){
	template2Vnode.clear();
	vnode2Template.clear();
}