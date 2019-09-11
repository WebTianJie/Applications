import {setValue} from '../../until/ObjectUtil.js'

export function vmodel(vm,elm,data){
	elm.onchange=function(){
		setValue(vm._data,data,elm.value);
	}
}