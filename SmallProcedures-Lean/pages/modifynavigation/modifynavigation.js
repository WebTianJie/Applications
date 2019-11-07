// pages/modifynavigation/modifynavigation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:5,
    i:'123'
  },
  /**
   * 动态改变tabbar
   */
  setItem(){
    wx.setTabBarItem({
      index: 0,
      text:'测试'
    })
  },
  /***
   * 显示红色角标
   */
  setRedDot(){
    wx.showTabBarRedDot({
      index: 1
    })
    setTimeout(()=>{
      wx.hideTabBarRedDot({//隐藏红色角标
        index: 1,
      })
    },2000)
  },
  /***
   * 数字角标
   */
  showBage(){
    wx.setTabBarBadge({
      index: 0,
      text: '3'
    });
    setTimeout(()=>{
      wx.removeTabBarBadge({
        index: 0
      });
    },3000)
  },
  /**
   * 设置红色角标
   */
  flashDot(){
    let that=this;
    let count=this.data.count;
    if(that.data.i!=null){
        that.setData({
          timer:setInterval(()=>{
            count--;
            //求余数,偶数显示,奇数不显示
            if(count%2==0){
              wx.showTabBarRedDot({
                index: 1
              })
            }else{
              wx.hideTabBarRedDot({
                index: 1
              })
            }
            if(count==0){
              clearInterval(that.data.timer);
            }
          },500)
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})