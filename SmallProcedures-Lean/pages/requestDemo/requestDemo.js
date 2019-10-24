// pages/requestDemo/requestDemo.js
Page({
  requestUrl:'https://www.baidu.com/s?wd=%E8%8B%B9%E6%9E%9C',
  /**
   * 页面的初始数据
   */
  data: {

  },
  /***
   * 请求
   */
  requestOp(){
    wx.request({
      url: this.requestUrl,
      data:{},
      header:{
        'content-type':'application/json'
      },
      method:'Get',
      dataType:'json',
      responseType:'text',
      success:(res)=>{
          console.log(res);
      },
      faill:(fail)=>{
          console.log(fail);
      },
      complete:(com)=>{
        console.log(com);
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