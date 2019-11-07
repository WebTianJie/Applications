// pages/backtop/backtop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ishide:false
  },
  /**回到顶部 */
  goTop(e){
    if(wx.pageScrollTo){
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低,暂无法使用此功能',
      })
    }
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
  /***
   * 页面滚动操作
   */
  onPageScroll(e){
    let srollTop=e.scrollTop;
    if (srollTop>100){
        this.setData({
          ishide:true
        })
    }
    else{
      if (srollTop < 60) {
        this.setData({
          ishide: false
        })
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})