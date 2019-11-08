// pages/animtiondemo/anmitiondemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start:'北京',
    end:'上海',
    lAnimate:'',
    rAnimate:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /***
   * 触发动画,点击奇幻
   */
  trigger(){
    let that=this;
    let option={
      duration:100,
      timingFunction:'ease-in'
    }
    let lanimation=wx.createAnimation(option);
    let ranimating=wx.createAnimation(option);
    lanimation.translateX(100);
    lanimation.opacity(0.1).step();
    ranimating.translateX(-100);
    ranimating.opacity(0.1).step();
    that.setData({
      lAnimate:lanimation.export(),
      rAnimate:ranimating.export()
    })
    setTimeout(()=>{
      //起点
      lanimation.translateX(0);
      lanimation.opacity(1).step();
      //重点
      ranimating.translateX(0);
      ranimating.opacity(1).step();
      let  temp=that.data.start;
      that.setData({
        lAnimate:lanimation,
        rAnimate:ranimating,
        end:temp,
        start:that.data.end
      })
    },100)
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