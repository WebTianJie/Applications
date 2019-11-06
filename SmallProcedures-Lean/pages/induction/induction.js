// pages/induction/induction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screen:'正面',
    alpha:0
  },
  /**
   * 开始监听
   */
  start(res){
    console.log(e);
    wx.startDeviceMotionListening({
      success(e){
        console.log(e);
      }
    })
  },
  /**
   * 结束监听
   */
  stop(){
    wx.stopDeviceMotionListening({
      success(res){

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     /***
      * alpha number 当手机的x/y和地球的x/y重合的时候,绕着Z轴旋转的角度为alpha,范围值在[0,2*PI],旋转逆时针为正
      */
     let that=this;
     wx.onDeviceMotionChange((res)=>{
       let alpha = parseFloat(res.alpha);
       if (alpha > 45 && alpha < 136) {
         screen = '左侧'
       }
       else if (alpha > 225 && alpha < 316) {
         screen = '右侧'
       }
       else if (alpha > 135 && alpha < 226) {
         screen = '反面'
       } else {
         screen = '证明';
       }
       that.setData({
         screen: screen,
         alpha: alpha
       })
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