// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const  db=cloud.database();
const  $=db.command.aggregate;
const collection = db.collection('books');
// 云函数入口函数
exports.main = async (event, context) => {
  //一旦在服务器云端有异步操作,则我们可以使用await
  return await collection.aggregate()
  .group({
    _id:'$category',//分组字段
    avgNum: $.avg('$sales')
  }).end();
}