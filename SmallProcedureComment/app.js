//app.js
App({
  onLaunch: function (e) {
    let  that=this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        that.getOpenId(res.code);
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
          
        }
      }
    })
  
  },
  /***
   * 根据code获取openid
   */
   getOpenId(code){
     let that=this;
    wx.request({
      url: that.globalData.serverPath + 'getOpenId?code=' + code,
      success: function (res) {
        var openid = JSON.parse(res.data.data).openid;
        that.getUserByOpenId(openid);
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  /**
   * 根据openid获取用户消息
   */
  getUserByOpenId(_id){
    let that=this;
    wx.request({
      url: that.globalData.serverPath + 'getUserByOpenId?_id=' + _id,
      success: function (res) {
         if(res.data.data.length>0){
            wx.navigateTo({
              url: '/pages/personal/personal'
            })
         }
        //可以把openid存到本地，方便以后调用
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  userInfoReadyCallback(res){
    this.globalData.userInfo = res.userInfo
  },
  globalData: {
    userInfo: null,
    serverPath:'http://192.168.6.182:12306/',
    title:'文章标题'
  }
})