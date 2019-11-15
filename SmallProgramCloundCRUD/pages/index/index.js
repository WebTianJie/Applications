// pages/index/index.js
const db=wx.cloud.database({
  env:'cloude-first-001-29zsh'
});
const studentCollectio=db.collection('student');
const _cmd=db.command;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /***
   * 数据录入
   */
  insert(){
    let  addData={
       data:{
         name: 'laiy',
         age: 19,
         birthday: new Date('2001'),
         ctime: db.serverDate(),
         hobby: ['moves', 'game','busketball'],
         isPartyMember: false,
         location:new db.Geo.Point(113,23)
       }
    }
    studentCollectio.add(addData).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  /***
   * 查询单条数据
   */
  selectSingle(){
    studentCollectio.doc('7d44a8205dccb146003eee0c5ccd8ac4').get().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  /***
   * 多条数据查询
   */
  selectMore(){
    studentCollectio.where({
      age:19
    }).get().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  /***
   * 多条件查询
   */
  selectWhereObJ(){
    studentCollectio.where({
      age:16,
      'score.math':80
    }).get().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  /***
   * 查询大于等于19岁学生
   */
  getStudentByAge(){
    studentCollectio.where({
      age:_cmd.gte(19),
      'hobby':'moves'
    }).get().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  /***
   * 更新分数
   */
  updateScore(){
    studentCollectio.doc('7d44a8205dccb146003eee0c5ccd8ac4').update({
      data:{
        'score.math':_cmd.inc(10)
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  /***
   * 更新党员你信息
   */
  updatePartyMember(){
    wx.cloud.callFunction({
      name: 'cloudGetRecord',
      data: { 
        id: "7d44a8205dccb146003eee0c5ccd8ac4"
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(console.error)
  },
  /***
   * 云函数调用
   */
  cloudFunSum(){
    wx.cloud.callFunction({
      name: 'add',
      data:{
        a: 10,
        b: 100
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  /***
   * 删除一条数数据
   */
  delSingleData(){
    studentCollectio.doc('38034ae05dccbb6200411c374f28937e').remove({
      success(res){
        console.log(res);
      }
    })
  },
  /***
   * 删除多条记录
   */
  delMoreData(){
    wx.cloud.callFunction({
      name:'deleteMoreData',
      data:{
        flag:false
      },
      success(res){
        console.log(res);
      },
      fail(err){
        console.log(err);
      }
    })
  },
  /***
   * 修改单条数组的记录
   */
  updateArraySingle(){
    studentCollectio.doc('7c47f3615dccb072003f846e388180fa').update({
      data:{
        "hobby.1":'playball'
      },
      success(res){
        console.log(res);
      },
      fail(err){
        console.log(err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})