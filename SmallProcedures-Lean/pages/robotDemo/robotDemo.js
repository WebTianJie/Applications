// pages/robotDemo/robotDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"Let's chat",
    headerLeft:'http://hbimg.b0.upaiyun.com/4c7811030d895c5d40b799d4db5b1e13077370e58bff-9hnxpe_fw658',
    headerRight:'',
    syas:[
      {
        robot:'我是小起,来跟我聊天吧',
        isay:'你好'
      }
    ]
  },
  /***
   * 发送事件
   */
  converSation(e){
    console.log(e);
    let  obj={},
    that=this,
    isay=e.detail.value.says,
    syas=this.data.syas,
    length=syas.length,
    key ='b974438182864737bd1f150510bb62b4'//机器人聊天id
    //发送
    wx.request({
      url: 'http://www.tuling123.com/openapi/api?key='+key+'&info='+isay,
      success(res){
          let tuling=res.data.text;
          obj.robot=tuling;
          obj.isay=isay;
          syas[length]=obj;
          that.setData({
            syas:syas
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
      let that=this;
      wx.getUserInfo({
        success(e){
          that.setData({
            headerRight:e.userInfo.avatarUrl
          })
        }
      })  
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