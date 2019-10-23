// pages/navgator/navgator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /***
   * 微信接口跳转
   */
  tapNivator(){
    wx.switchTab({
      url: '/pages/usercenterDemo/usercenterDemo',
    })
  },
  /***
   * 其它跳转
   */
  otherNigator(){
    // wx.redirectTo({
    //   url: '/pages/moveableDemo/moveableDemo',
    // })
    // wx.reLaunch({
    //   url: '/pages/moveableDemo/moveableDemo',
    // })
    // wx.navigateTo({
    //   url: '/pages/moveableDemo/moveableDemo',
    // })
    wx.navigateBack({
      url: '/pages/moveableDemo/moveableDemo'
    })
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