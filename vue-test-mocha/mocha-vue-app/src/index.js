/**

 * author  Administrator 创建

 * date 2019-12-02 14:30

 */

export  const abs=num=>{
    let res=num;
    if(num<0){
        return -num;
    }
    if(typeof num !=='number'){
        return NaN;
    }
    return res;
}

export  const add=(num1,num2)=>{
    return num1+num2;
}

