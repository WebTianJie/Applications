import {renderData} from './render.js'
import {rebuild} from './mount.js'
function constructObjProxy(vm, obj, namespace) {
	let proxyObj = {};
	for (let prop in obj) {
		Object.defineProperty(proxyObj, prop, {
			configurable: true,
			get() {
				return obj[prop];
			},
			set(value) {
				obj[prop] = value;
				renderData(vm,getNameSpace(namespace,prop));
			}

		})
		Object.defineProperty(vm, prop, {
			configurable: true,
			get() {
				return obj[prop];
			},
			set(value) {
				obj[prop] = value;
				let val=getValue(vm._data,getNameSpace(namespace,prop));
				if(val instanceof Array){
					rebuild(vm,getNameSpace(namespace,prop));
					renderData(vm,getNameSpace(namespace,prop));
				}else{
					renderData(vm,getNameSpace(namespace,prop));
				}
			}
		
		})
		if(obj[prop] instanceof Object){
			proxyObj[prop]=constructProxy(vm,obj[prop],getNameSpace(namespace,prop));
		}
	}
	return proxyObj;
}
//我们知道那个属性被修改了,才能对页面上的内容进行更新
//我们需要先能够捕获修改的这个事件
//所以我们需要用代理的方式,来实现监听属性修改
export function constructProxy(vm, obj, namespace) { //vm,due对象,obj标识要进行代理的对象,namespace命名空间
	//递归
	let proxyObj = null;
	if (obj instanceof Array) {
			proxyObj=new Array(obj.length);
			for(var  i=0;i<obj.length;i++){
				proxyObj[i]=constructProxy(vm,obj[i],namespace);
			}
			proxyObj=proxyArr(vm,obj,namespace);
	} else if (obj instanceof Object) {
		proxyObj = constructObjProxy(vm, obj, namespace);
	} else {
		throw new Error('Error');
	}
	return proxyObj;
}

function getNameSpace(nowNameSpace,nowProp){
	if(nowNameSpace==null||nowNameSpace==''){
		return nowProp;
	}else if(nowProp==null||nowProp==''){
		return nowNameSpace;
	}else{
		return nowNameSpace+'.'+nowProp;
	}
}
function proxyArr(vm,arr,namespace){
	let  obj={
		eleType:'Array',
		toString:function(){
			let  result='';
			for(let i=0;i<arr.length;i++){
				result +=arr[i]+', ';
			}    
			console.log(getNameSpace(namespace,prop));
			return result.substring(0,result.length-2);
		}
	};
	defArrayFunc.call(vm,obj,'push',namespace,vm);
	defArrayFunc.call(vm,obj,'pop',namespace,vm)
	defArrayFunc.call(vm,obj,'shift',namespace,vm)
	defArrayFunc.call(vm,obj,'unshift',namespace,vm)
	arr.__proto__=obj;
	return arr;
}
const arrayProto=Array.prototype;
function defArrayFunc(obj,func,namespace,vm){
	Object.defineProperty(obj,func,{
		enumerable:true,
		configurable:true,
		value:function(...args){
			let original=arrayProto[func];
			const result=original.apply(this,args);
			console.log(getNameSpace(namespace,''));
			rebuild(vm,getNameSpace(namespace,''));
			renderData(vm,getNameSpace(namespace,''));
			return result;
		}
	})
}
	
