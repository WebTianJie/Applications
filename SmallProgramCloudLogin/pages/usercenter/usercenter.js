// pages/usercenter/usercenter.js
let phone='';
let name='';
let id='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    //读取缓存数据
    wx.getStorage({
      key: 'loginInfo',
      success: function(res) {
        console.log(res);
        phone=res.data.phone;
        name=res.data.name;
        id=res.data.id;
        that.setData({
          name:name
        })
      },
      fail(){
        wx.showToast({
          title: '微信登录方式错误或登录异常',
        })
        setTimeout(function(){
            wx.redirectTo({
              url: '/pages/index/index'
            })
        },)
      }
    })
    //缓存数据存在现实内容

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