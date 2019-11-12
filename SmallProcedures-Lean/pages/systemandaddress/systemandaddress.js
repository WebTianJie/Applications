//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
      opList:[{
        name:"拍照",
        value:"通过"
      }],
      shows:true
  },
  /***
   * 收货地址
   */
  address(){
    wx.chooseAddress({
      success(res){
        console.log(res);
      }
    })
  },
  /***
   * 系统设置
   */
  setSys(){
    let list=[];
    let that=this;
    wx.openSetting({
      success(res){
        console.log(res);
        let obj=[
          {
            name: '地址',
            value: res.authSetting['scope.address']
          },
          {
            name: '摄像',
            value: res.authSetting['scope.camera']
          },
          {
            name: '录音',
            value: res.authSetting['scope.record']
          },
          {
            name: '用户授权信息',
            value: res.authSetting['scope.userInfo']
          },
          {
            name: '保存相册',
            value: res.authSetting['scope.writePhotoAlbum']
          }
        ]
        that.setData({
          opList:obj,
          shows:false
        })
      }
    })
  },
  /***
   * 查看授权
   */
  userAuth(){
    wx.getSetting({
      suceess(res) {
        console.log(res);
      }
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
