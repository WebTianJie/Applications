// pages/shockandscreenshots/shockandscreenshots.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    con:'用户没有截屏'
  },
  screenhots(){

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
    let that=this;
    wx.onUserCaptureScreen(function (res) {
      that.setData({
        con: '用户截屏了'
      })
    })
  },
  /**
   * 设备长时间振动
   */
  longShock(){
   wx.vibrateLong({
     success(){
       console.log('长时间震动');
     }
   })
  },
  /***
   * 设备短时间震动
   */
  shortShock(){
    wx.vibrateShort({
      success(){
        console.lg('短时间震动');
      }
    })
  },
  /***
   * 添加手机来向你人
   */
  addContractor(){
    wx.addPhoneContact({
      firstName: '张三',
      nickname:'zs',
      remark:'程序员',
      mobilePhoneNumber:'17788165326',
      email:'4464664@qq.com'
    })
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