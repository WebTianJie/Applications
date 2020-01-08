import  {constructProxy} from "./proxy.js";
import {initMount} from "./mount.js";
let uid=0;
export  default  function initMixin (Due) {
    Due.prototype._init=function (options) {
        const vm=this;
        vm.uid=uid++;
        vm._isDue=true;
        //初始化data
        if(options && options.data){
            vm._data=constructProxy(vm,options.data,'');
        }
        //初始created
        if(options && options.created){
            vm._created=options.created;
        }
        //初始化methods
        if(options && options.methods){
            vm._methods=options.methods;
            for(let name in options.methods){
                vm._methods[name]=options.methods[name];
            }
        }
        //初始化computed
        if(options && options.mounted){
            vm._mounted= options.mounted;
        }
        //初始化el挂载
        if(options && options.el){
            initMount(Due);
            if(this._mounted){
                this._mounted.call(this);
            }
            this.$mount(options.el);
        }
    }
}