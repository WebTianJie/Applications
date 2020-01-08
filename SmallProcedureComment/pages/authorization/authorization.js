// pages/authorization/authorization.js
const app = getApp();
const until=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.showModal({
            title:'留言需要授权',
            success(res){
              if(res.cancel){
                that.setData({
                  show:true
                })
              }
            }
         })
        }
      }
    })
  
  },
  getUserInfo: function(e) {
    if (!e.detail.userInfo) {
      return;
    }
    app.globalData.userInfo = e.detail.userInfo;
    wx.setStorageSync('userInfo', e.detail.userInfo);
    app.getCode().then(function(res){
        return  until.getOpenId(res.code);
    }).then(function(res){
        return until.getUserByOpenId(JSON.parse(res.data.data).openid);
    }).then(function(res){
        if(res.data.data.length > 0){
          wx.setStorageSync('uguobadmin',res.data.data[0].username);
          wx.reLaunch({
            url: '/pages/personal/personal'
          })
        }else{
          wx.reLaunch({
            url: '/pages/index/index'
          })
        }
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