// pages/caneraDemo/cameraDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      src:''
  },
  /***
   * 拍摄
   */
  takePhoto(){
    const ctx=wx.createCameraContext(this);
    ctx.takePhoto({
      quality:'high',
      success:(res)=>{
        //设定到缓存
        wx.setStorage({
          key: 'photoPeople',
          data: res.tempImagePath
        })
        wx.redirectTo({
          url: '/pages/caneraDemo/photo'
        })
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