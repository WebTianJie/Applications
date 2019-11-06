// pages/guest/guest.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    count:0,
    value:''
  },
  /***
   * 输入框输入时间
   */
  inputChange(e){
     this.setData({
       count: e.detail.value.length,
       value:e.detail.value
     })
  },
  /**
   * 留言
   */
  btnGuest(){
    let that=this;
    if(this.data.count==0){
        wx.showToast({
          title: '请输入留言内容',
        })
    }
    let userInfo = app.globalData.userInfo;
    wx.request({
      url: app.globalData.serverPath + 'insertComment?title=' + that.data.title + '&content=' + that.data.value + '&nickName=' + userInfo.nickName + '&avatarUrl=' + userInfo.avatarUrl,
      success(res){
        wx.showToast({
          title: res.data.msg,
        })
        wx.reLaunch({
          url: '/pages/index/index'
        })
      },
      error(err){
        console.log(err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       title: app.globalData.title
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