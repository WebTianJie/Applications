import {setValue} from "../../Until/ObjectUntil.js";

export function vmodel(vm,elm,data) {
    elm.oninput=function(){
       setValue(vm._data,data,elm.value);//vue对象的dada,v-model的表达式值,页面上元素输入的值
    }
}