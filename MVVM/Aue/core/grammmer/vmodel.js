/**

 * author  张高瑞 创建

 * date 2019-09-17 14:29
 *v-model
 */
import {setValue} from '../until/ObjectUntil.js'
export function vmodel(vm,elm,data){
   elm.oninput=function(){
        setValue(vm._data,data,elm.value);//aue对象,该对象的属性,修改后的的值
   }
}