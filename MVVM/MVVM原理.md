1:export default a 和不加defalut的区别,在外面的引入的时候加了defalut的不需要{}可以直接用,不加default的需要添加{a}才能使用
2:属性代理
  
 function constructObjProxy(vm, obj, namespace) {//属性是一级属性
 	console.log(obj);
 	let proxyObj = {};
 	for (let prop in obj) {
 		Object.defineProperty(proxyObj, prop, {
 			configurable: true,
 			get() {
 				return obj[prop];
 			},
 			set(value) {
 				obj[prop] = value;
 				console.log(getNameSpace(namespace,prop));
 			}
 
 		})
 		Object.defineProperty(vm, prop, {
 			configurable: true,
 			get() {
 				return obj[prop];
 			},
 			set(value) {
 				obj[prop] = value;
 		
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
 
 function getNameSpace(nowNameSpace,nowProp){//设置修改的属性的命名空间(该属性是在哪个属性里面(适应于属性中还有对象的情况))
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
 function defArrayFunc(obj,func,namespace,vm){//代理数组对象的,代理的是数组的哥哥方法.push,pop,shift,unshift
 	Object.defineProperty(obj,func,{
 		enumerable:true,
 		configurable:true,
 		value:function(...args){
 			let original=arrayProto[func];
 			const result=original.apply(this,args);
 			console.log(getNameSpace(namespace,''));
 			return result;
 		}
 	})
 }
 3:虚拟dom
 4:经典克隆算法
	export function easyClone(obj){//不能克隆代理对象
		JSON.parse(JSON.stringify(obj));
	}
	
	function clone(obj){//不能克隆代理对象
		if(obj instanceof Array){
			cloneArray(obj);
		}else if(obj instanceof Object){
			cloneObject(obj);
		}else{
			return obj;
		}
	}
	function cloneObject(obj){
		let result={};
		let names=Object.getOwnPropertyNames(obj);
		for(let  i=0;i<names.length;i++){
			result[names[i]]=clone(obj[names[i]]);
		}
		return result;
	}
	
	function cloneArray(obj){
		let  result=new Array(obj.length);
		for(let i=0;i<obj.length;i++){
			result[i].clone(obj[i]);
		}
		return reuslt;
	}
  
