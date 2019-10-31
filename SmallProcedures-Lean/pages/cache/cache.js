// pages/cache/cache.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cacheparam:'',
    urlparam:'',
    apiparam:'',
    globalApi: app.globalData.globalApi,
  },
  /**
   * 设置缓存
   * Sync:同步
   *wx.setStorageSync
   */
  setStorage(){
    wx.setStorage({
      key: 'name',//..不可重复,不可不写
      data: 'tom',
      success(e){
          console.log('已经存好了');
      }
    })
  },
  /**
   * 移出缓存
   * Sync:同步
   * wx.removeStorageSync
   */
  removeStorage(){
    wx.removeStorage({
      key: 'name',
      success: function(res) {
        console.log('移出成功');
      },
    })
  },
  /***
   * 获取缓存
   * Sync:同步
   * wx.getStorageInfoSync
   */
  getStorage(){
   wx.getStorageInfo({
     success: function(res) {
       console.log(res);
     },
   })
  },
  /**
   * 清除缓存数据
   * Sync:同步
   * wx.clearStorageSync
   */
  clearStorage(){
    wx.clearStorage();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       globalApi:app.globalData.globalApi
     })
      this.setData({
        urlparam: options.param
      })
      this.setData({
        apiparam: options.apiParam
      })
      wx.getStorage({
        key: 'name',
        success: function(res) {
          console.log(res);
        },
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
    let that=this;
      wx.getStorage({
        key: 'id',
        success: function(res) {
          that.setData({
            cacheparam:res.data
          })
          wx.removeStorage({
            key: 'id',
            success: function (res) {
              console.log('删除成功');
            },
          })
        },
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