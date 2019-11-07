// pages/scrollview/scrollview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:0,
    ishide:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /***
   * toTop滚动到顶部
   */
  toTop(e){
    console.log(e.detail.scrollTop);
    let  top=e.detail.scrollTop;
    if(top>600){
      this.setData({
        ishide:false
      })
    }else{
      this.setData({
        ishide: true
      })
    }
  },
  //返回顶部
  goTop(e){//回到顶部
      this.setData({
        top:0
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