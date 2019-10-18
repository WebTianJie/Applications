/**

 * author  张高瑞 创建

 * date 2019-09-23 09:44
 *
 */
import {getValue,getEnvAttr} from "../until/ObjectUntil.js";
import {generateCode,isTrue} from "../until/code.js";

export function  checkBind(vm,vnode){
    if(vnode.nodeType != 1){
        return;
    }
    let names=vnode.elm.getAttributeNames();
    for(let i=0;i<names.length;i++){
        if(names[i].indexOf('v-bind')==0 || names[i].indexOf(':')==0){
            vBind(vm,vnode,names[i],vnode.elm.getAttribute(names[i]));
        }
    }
}

export function vBind(vm,vnode,name,value){
    let k=name.split(':')[1];
    if(/^{[\w\W]+}$/.test(value)){
        value=value.substring(1,value.length-1);
        let expressionList=value.split(',');
        let result=analysisExpression(vm,vnode,expressionList);
        vnode.elm.setAttribute(k,result);
    }else{
        let v=getValue(vm._data,value);
        vnode.elm.removeAttribute(name);
        vnode.elm.setAttribute(k,v);
    }
}

function analysisExpression(vm,vnode,expressionList){
    //获取当前环境变量
    let attrs=getEnvAttr(vm,vnode);
    //判断表达式是否成立
    let codeEnv=generateCode(attrs);
    //拼接result
    let result='';
    for(let i=0;i<expressionList.length;i++){
        let site=expressionList[i].indexOf(':');
        if(site>-1){
            let code=expressionList[i].substring(site+1,expressionList[i].length);
            //综合上面你的环境变量验证上面的表达式是否成立
            if(isTrue(code,codeEnv)){
                result+=expressionList[i].substring(0,expressionList[i].split(':')[0].length)+',';
            }
        }else{
            result+=expressionList[i]+',';
        }
    }
    if(result.length>0){
        result=result.substring(0,result.length-1);
    }
    return result;
    //obj.x<2+1
    // let code='if(obj.x<2){return true;} else {return false;}'
}