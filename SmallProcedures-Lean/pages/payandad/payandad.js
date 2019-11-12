// pages/payandad/payandad.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /***
   * 1:必须是认证过的
   * 2:必须是企业的微信号
   * 3:小程序必须开通了支付功能
   * 4:必须和公司的服务器相联系
   * 5:和后端签名保持一致
   * 
   */
  payMent(){
      wx.requestPayment({//发起支付
        timeStamp: '',
        nonceStr: '',
        package: '',
        signType: '',
        paySign: '',
      })
  },
  /***
   * 授权
   */
  setAuth(){
    wx.getSetting({
      success(res){
        if(!res.authSetting["scope.record"]){//判断是否开启录音功能,
          wx.authorize({
            scope: 'scope.record',
            success(){
              wx.srartRecord();//开启录音功能
            }
          })
        }
      }
    })
  },
  /***
   * 广告
   * 在微信公众平台设置推广,广告组
   * banner广告,自己的广告
   * 视频广告,插屏广告,别人在你这边的广告
   */
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