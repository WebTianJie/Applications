// pages/electricandphone/electricandphone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    battery:'100%',
    isCharging:false
  },
  /***
   * 拨打电话
   */
  formCallPhone(e){
    console.log(e);
    let phoneNUmber=e.detail.value.phone;
    wx.makePhoneCall({
      phoneNumber: phoneNUmber 
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
    let that=this;
    wx.getBatteryInfo({
      success(res){
        console.log(res);
        that.setData({
          battery:res.level-2,
          isCharging:res.isCharging
        })
      }
    })
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