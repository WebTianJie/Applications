// pages/appletjump/appletjump.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /***
   * 数据分析
   */
  dataAnalise(){
    wx.reportAnalytics('user', {
      nam:'zhangsan',
      age:'20'
    })
    console.log('传送成功');
  },
  /***
   * 数据上班
   */
  dataUplaod(){
    wx.reportMonitor('0',10);
    console.log('上报成功');
  },
  /***
   * 跳转其它的小程序
   */
  jump(){
    // wx.navigateBackMiniProgram 小程序返回
    wx.navigateToMiniProgram({//最大数量10
      appId:'wx51441ba03f4b09f2',
      path:'pages/index/index?id=5646',//默认打开的路径,可以带参数
      extraData:{//其他的参数
        foor:'bar',
      },
      envVersion:'develop',//跳转的版本,开发本,上线版,体验版
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