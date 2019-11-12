// pages/loginstate/loginstate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * wx登录
   */
  wxlogin(){
    wx.login({
      success(res) {
        console.log(res.code);
        //向公司的服务器发送请求
        wx.request({
          url: 'www.uguoba.con/requestapi',//公司后台接口
          data: { code: res.code },
          success(res) {
            console.log(res);
            let openID = res.openID;
            let sessionKey = res.sessionKey;
            //存储storage
            wx.setStorage({
              key: 'userinfo',
              data: {
                openID: openID,
                sessionKey: sessionKey
              }
            })
          },
          fail(err) {
            console.log('err', err);
          }
        })
      }
    })
  },
  /***
   * 登录
   */
  login(e){
   this.wxlogin();
  },
  /***
   * 获取公司信息
   */
  getComInfo(){
    //从缓存中获取用户登录状态
    wx.getStorage({
      key: 'userinfo',
      success: function(res) {
        //向服务器发送数据,获取数据
        let openId=res.openID;
        let sessionKey=res.sessionKey;
        //验证登录状态sessionkey是否失效(服务器是狗删除)
        wx.checkSession({
          success(){
            this.send();
          },
          fail(){
            //重新登录
            this.wxlogin();
          }
        })
        
      },
    })
    
  },
  /***
   * 向服务器发送数据
   */
  send(){
    wx.request({
      url: 'www.uguoba.con/comapi',
      data: {
        openID: openId,
        sessionKey: sessionKey
      },
      success(res) {
        //处理服务器返回数据
      }
    })
  },
  /**
   * 获取账号信息
   */
  getAccountInfo(){
    const accountInfo = wx.getAccountInfoSync();
    console.log(accountInfo);
  },
  /***
   * 获取用户信息
   */
  getUserInfo(){
    wx.getUserInfo({
      success(res){
        console.log(res);
      },
      fail(res){
        console.log(res);
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