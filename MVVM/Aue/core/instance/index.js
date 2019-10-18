import {initMixin} from './init.js'
import {renderMixin} from './render.js'
function Aue(options){
    //初始化Aue
    this._init(options);
    //初始化created
   if(this._created != null){
       this._created.apply(this);
   }
    this._render();
}

initMixin(Aue);
renderMixin(Aue);
export default Aue;