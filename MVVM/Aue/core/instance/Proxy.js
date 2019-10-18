/**
 *
 * @param vm 需要代理到的对象
 * @param proxyArr 需要代理的数组
 * @param namespace 命名空间
 */
import {renderData} from "./render.js";
import {rebuild} from "./mount.js";

function proxyArr(vm, proxyArr, namespace){
    let obj={
        eleType:'Array',
        toString:function(){
            let result='';
            for(let i=0;i<proxyArr.length;i++){
                result+=proxyArr[i]+',';
            }
            return result.substring(0,result.length-2);
        },
        push:function(){},
        pop:function(){},
        shift:function(){},
        unshift:function(){}
    }
    defineArr.call(vm,obj,'push',namespace,vm);
    defineArr.call(vm,obj,'pop',namespace,vm);
    defineArr.call(vm,obj,'shift',namespace,vm);
    defineArr.call(vm,obj,'unshift',namespace,vm);
    proxyArr.__proto__=obj;
    return proxyArr;
}

/**
 *
 * @param vm
 * @param arr
 * @param func
 * @param namespace
 */
let arrProto=Array.prototype;
function defineArr(obj,func,namespace,vm){
    Object.defineProperty(obj,func,{
        enumerable:true,
        configurable:true,
        value:function(...args){//这里的value就是,就是obj['push']等函数
            let original=arrProto[func];
            const result=original.apply(this,args);
            rebuild(vm,getNameSpace(namespace,''));
            renderData(vm,getNameSpace(namespace,''));
            return result;
        }
    })
}

/**
 *
 * @param vm 要代理到的对象
 * @param proxyData 需要代理的属性
 * @param namespace 命名空间
 */
function proxyObject(vm,proxyData,namespace){
    let proxyObj={};
    for(let  prop in proxyData){
        Object.defineProperty(proxyObj,prop,{
            configurable:true,
            get:function () {
                return proxyData[prop];
            },
            set:function (value) {
                proxyData[prop]=value;
                renderData(vm,getNameSpace(namespace,prop));
            }
        })
        Object.defineProperty(vm,prop,{
            configurable:true,
            get:function () {
                return proxyData[prop];
            },
            set:function (value) {
                proxyData[prop]=value;
                let val=getValue(vm._data,getNameSpace(namespace,prop));
                if(val instanceof  Array){
                    rebuild(vm,getNameSpace(namespace,prop));
                    renderData(vm,getNameSpace(namespace,prop));
                }else{
                    renderData(vm,getNameSpace(namespace,prop));
                }

            }
        })
        if(proxyData[prop] instanceof Object){
            proxyData[prop]=constructProxy(vm,  proxyData[prop],getNameSpace(namespace,prop));
        }
    }
    return proxyObj;
}

/**
 *
 * @param nowNameSpace 命名空间
 * @param nowProp 当前属性
 * @returns {string|*}
 * 属性设计到嵌套对象的时候,需要用到命名空间来查看属于那一级对象
 */
function getNameSpace(nowNameSpace,nowProp){
    if(nowNameSpace==null || nowNameSpace==''){
        return  nowProp;
    }else if(nowProp==null || nowProp==''){
        return nowNameSpace;
    }else{
        return nowNameSpace+'.'+nowProp;
    }
}

/**

 * @author  张高瑞 创建

 * @date 2019-09-12 11:35

 * vm需要代理到的对象,也是Aue对象
 *
 * proxyData需要代理的属性
 *
 * namespace 命名空间
 *
 * 我们必须知道那个属性被修改了,才能对页面上的内容进行修改
 * 首先我们必须要能捕获修改这个事件
 * 搜我们使用代理的方式来实现监听属性的修改
 */
export function constructProxy(vm,proxyData,namespace){
    let  proxyObj={};
    if(proxyData instanceof  Array){
        proxyObj=new Array(proxyData.length);
        for(let  i=0;i<proxyData.length;i++){
            proxyObj[i]=constructProxy(vm,proxyData[i],namespace);
        }
        proxyObj=proxyArr(vm,proxyData,namespace);
    }else if(proxyData instanceof  Object){
        proxyObj=proxyObject(vm,proxyData,namespace)
    }else {

    }
    return proxyObj;
}