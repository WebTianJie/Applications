// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /****
   * 显示弹框
   */
  show(){
    //通过组件对象,调用组件内部的方法
    this.dialog.showDialog();
  },
  /**
   * 由组件内部发起的事件
   */
  _cancelEvent(){
    console.log('你点击取消按钮');
    this.dialog.hideDialog();
  },
  /***
   * 确定事件
   */
  _confirmEvent(){
    console.log('你点击确定按钮');
    this.dialog.hideDialog();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     /**获得dialog组件 */
     this.dialog=this.selectComponent('#dialog')
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