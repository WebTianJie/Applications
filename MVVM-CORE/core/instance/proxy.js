import {renderData} from './render.js';
import {rebuild} from "./mount.js";

export function constructProxy(vm,obj,namespace){
    var proxyObj=null;
    if(obj instanceof Array){
        proxyObj=new  Array(obj.length);
        for(let i=0;i<obj.length;i++){
            proxyObj[i]=constructProxy(vm,obj[i],namespace);
        }
        proxyObj=arrProxy(vm,obj,namespace);
    }else if(obj instanceof Object) {
        proxyObj=constructObjectProxy(vm,obj,namespace)
    }else{
        throw Error('error:不识别属性');
    }
    return proxyObj;
}

function arrProxy(vm,arr,namespace){
    var obj={
        eleType:'array',
        toString:function () {
            let result='';
            for(let i=0;i<arr.length;i++){
                result+=arr[i]+', ';
            }
            return result.substring(0,arr.length-2);
        },
        push:function(){},
    }
    defineArr.call(vm,vm,obj,'push',namespace);
    arr.__proto__=obj;
    return arr;
}
//代理数组
let arrProtoType=Array.prototype;
function  defineArr(vm,obj,func,namespace) {
    Object.defineProperty(obj,func,{
        enumerable:true,
        configurable:true,
        value:function(arg){
         let origin=arrProtoType[func];
         const result=origin.call(this,arg);
            rebuild(vm,getNameSpace(namespace,''));
            renderData(vm,getNameSpace(namespace,''));
         return result;
      }
    })
    
}
//代理对象
function constructObjectProxy(vm,obj,namespace) {
    var  proxyObject={};
    for(let prop in obj){
        Object.defineProperty(proxyObject,prop,{
            configurable:true,
            get:function () {
                return obj[prop]
            },
            set:function(value){
                 obj[prop]=value;
                renderData(vm,getNameSpace(namespace,prop));
            }
        })
        Object.defineProperty(vm,prop,{
            configurable:true,
            get:function () {
                return obj[prop]
            },
            set:function(value){
                obj[prop]=value;
                renderData(vm,getNameSpace(namespace,prop));
            }
        })
        if(obj[prop] instanceof Object){
            proxyObject[prop]=constructProxy(vm,obj[prop],getNameSpace(namespace,prop));
        }
    }
    return  proxyObject;
}
//获取命名空间
function getNameSpace(nowNameSpace,nowProp){
      if(nowNameSpace==null || nowNameSpace==''){
          return nowProp;
      }else if(nowProp==null || nowProp==""){
          return nowNameSpace;
      }else{
          return nowNameSpace+'.'+nowProp;
      }
}