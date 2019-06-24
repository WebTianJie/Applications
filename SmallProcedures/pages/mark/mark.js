// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isShow: true,
    likeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadUserMsg();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getUserInfo(e) {
    const userInfo = e.detail.userInfo;
    this.getUserDetail(userInfo);
  },
  getUserDetail(userInfo) {
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        isShow: false
      })
    }
    this.getMyLike();
  },
  loadUserMsg() {
    const userInfo = wx.getUserInfo({
      success: res => {
        var userInfo = res.userInfo;
        this.getUserDetail(userInfo);
        this.getMyLike();
      }
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.loadUserMsg();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  getMyLike() {
    const likeList = wx.getStorageSync('likeList') || [];
    this.setData({
      likeList: likeList
    })
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