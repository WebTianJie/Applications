import {initMixin} from './init.js'
import {renderMinix} from './render.js'
function Due(options){
	this._init(options);
	if(this._created_=null){
		this._created.call(this);
	}
	this._render();
}
initMixin(Due);
renderMinix(Due);
export default Due;