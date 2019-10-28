// pages/websocket/websocket.js
Page({
  message:'',
  /**
   * 页面的初始数据
   */
  data: {
    respnoseMessage:'this is response content'
  },
  /**发送消息 */
  senMsg(){
    let that = this;
    wx.sendSocketMessage({
      data: that.message
    })
    //监听数据是否成功
    wx.onSocketMessage((data) => {
      console.log('接收到服务器的数据', data);
      that.setData({
        respnoseMessage: data.data.replace("[<a href='http://coolaf.com/tool/chattest'>http://coolaf.com</a>]",'')
      })
    })
    wx.onSocketError((data => {
      console.log(data);
      that.setData({
        respnoseMessage:data.data
      })
    }))
  },
  /**
   * 获取发送内容
   */
  recodeMessage(e){
    this.message=e.detail.value;
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
    //建立连接
    wx.connectSocket({
      url: 'ws://123.207.167.163:9010/ajaxchattest'
    })
    //判断连接是否成功
    wx.onSocketOpen(() => {
      console.log('打开连接成功');
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //关闭连接
    wx.closeSocket({});
    //关闭连接失败
    wx.onSocketClose(() => {
      console.log('关闭了');
    });
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