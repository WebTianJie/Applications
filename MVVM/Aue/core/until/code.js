/**

 * author  张高瑞 创建

 * date 2019-09-23 11:21
 *
 */

//
import {clone} from "./ObjectUntil.js";
export function generateCode(attrs){
    let code='';
    for(let item in attrs){
        // console.log(item,attrs[item]);
        // console.log(item,JSON.stringify(attrs[item]));
        code+='let '+item+' = '+JSON.stringify(clone(attrs[item]))+';';
    }
    return  code;
}

export function isTrue(expression,env){
        let bool=false;
        let code=env;
        code+='if ('+expression+' ) { bool=true; }';
        eval(code);
        return bool;
}