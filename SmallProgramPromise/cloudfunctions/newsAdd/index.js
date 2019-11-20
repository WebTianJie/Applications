// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const collections = cloud.database().collection('news');

// 云函数入口函数
exports.main = async(event, context) => {
  let news = event.news;
  return await collections.add({
    data: news
  })
  // return  new  Promise(()=>{
  //     collections.add({
  //      data:news,
  //     }).then((res)=>{
  //       resolve(res);
  //     })
  // })
}