/***
 * 在worker线程中,会自动创建一盒worker对象,可以直接使用
 */
//监听主线程的诗句
worker.onMessage((res)=>{
  console.log('这时候worker内部线程打印的数据');
  let x=res.x;
  let y=res.y;
  let sum=add(x,y);
  //发送数据回到主线程
  worker.postMessage({
    sum:sum
  })
})
/***
 * 求和操作
 */
function add (x,y){
  return parseInt(x)+parseInt(y);
}