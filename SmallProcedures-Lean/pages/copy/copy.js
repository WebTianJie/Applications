
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'黄河之水天上来,奔流到海不复回,回不来了',
    copytext:''
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
   * 一键复制
   */
  copy(){
    let that=this;
    wx.setClipboardData({
      data: that.data.text,
      success(){
         wx.showToast({
           title: '复制成功',
         })
      }
    })
  },
  showcopy(){
    let that=this;
    wx.getClipboardData({
      success(res){
       that.setData({
         copytext:res.data
       })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //监控内存的警告
    wx.onMemoryWarning(()=>{
      console.log('内存警告');
      //清空缓存
      wx.clearStorage();
      wx.showToast({
        title: '玩得太久了,手机内存不够用了',
      })
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