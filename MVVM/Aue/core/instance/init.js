import {constructProxy} from "./Proxy.js";
import {mount} from "./mount.js";
let uid=0;
export function initMixin(Aue){
    Aue.prototype._init=function(options){
        const vm=this;
        vm.uid=uid++;
        vm._isAue=true;
        //初始化Data
        if(options || options.data){
            vm._data=constructProxy(vm,options.data,'');
        }
        //初始化Methods
        if(options && options.methods){
            vm._methods=options.methods;
            for(let item in options.methods){
                vm[item]=options.methods[item];
            }
        }
        //初始化computed
        if(options && options.computed){
            vm._computed=options.computed;
        }
        //初始化el并挂载
        if(options && options.el){
            let rootDom=document.getElementById(options.el);
            mount(vm,rootDom);
        }
        //初始化created
        if(options && options.created){
            vm._created=options.created;
        }
    }
}