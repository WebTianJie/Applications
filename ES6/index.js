/**

 * author 张高瑞 创建

 * date 2019-09-25 15:45

 */
//
// function average(...arg){
//     arg.sort(function(a,b){
//         return  a-b;
//     })
//     arg.shift();
//     arg.pop();
//     return sum(...arg);
// }
// function sum(...arg){
//     let sum=0;
//     arg.forEach(function(item,index,self){
//         sum+=item;
//     })
//     return sum;
// }
// console.log(average(89,78,44,22,55,45,66));
//
//
// let arr1=[1,2,3,4];
// let arr2=[6,7,8];
// let newArr=[...arr1,...arr2];
// console.log(newArr);

//
// let com={
//     name:'duyi',
//     age:'18'
// }
//
// let teachP={
//     leader:{
//         name:'cg',
//         age:20
//     },
//     personNum:125
// }
//
//
// let obj={
//     ...com,
//     ...teachP
// }



// let com={
//     name:'duyi',
//     age:'18'
// }
//
//
// let leader={
//     name:'cg',
//     age:20
// }
// let teachP={
//     leader:{
//         ...leader
//     },
//     personNum:125
// }
//
//
// let obj={
//     ...com,
//     ...teachP,
//     leader:{
//         ...leader
//     }
// }


//
// let com={
//     name:'duyi',
//     age:'18'
// }
//
// let teachP={
//     leader:{
//         name:'cg',
//         age:20
//     },
//     personNum:125
// }
//
//
// let obj=Object.assign({},com,teachP);
// console.log(obj);


// let obj={
//     name:'北冥',
//     fn:function (){
//         setTimeout(function(){
//             console.log(this);
//         })
//     }
// }
// let msg='天劫';
// let obj= {
//     msg:'北冥',
//     fn:function (){
//         setTimeout(()=>{console.log(this.msg)},200)
//     }
// }
// obj.fn();
// let sum11=obj.fn;
// sum11();



let arr1=[1,2,3,4,4,5];
let arr2=[2,3,3,6,7,8];

let os1=new Set(arr1);
let os2=new Set(arr2);


let arr3=[...os1].filter(function(ele){
   return  os2.has(ele);
})

console.log(arr3);