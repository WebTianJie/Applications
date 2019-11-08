// pages/dualmoderefresh/dualmoderefresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc:'http://image2.sina.com.cn/ent/d/2005-06-21/U105P28T3D758537F326DT20050621155831.jpg',
    imgtitle:'热气球环游'
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
     wx.showLoading({
       title: '正在加载'
     })
     setTimeout(()=>{
       this.setData({
         imgsrc: 'http://photocdn.sohu.com/20120104/Img331112824.jpg',
         imgtitle: '可爱猫咪'
       })
       wx.hideLoading();
       //停止系统加载时间
       wx.stopPullDownRefresh();
     },2000)
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  console.log('到底部了');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})