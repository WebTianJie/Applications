// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//定义db
const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event);
  return await db.collection('shujuku').update({
    data:{
      age: event.age
    }
  }).then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  })
}