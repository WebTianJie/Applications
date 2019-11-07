// pages/list/list.js
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
    let index = parseInt(options.index);
   console.log(index);
   let  barText='';
   switch(index){
     case 0:
       barText ='休闲食品';
     break;
     case 1:
       barText = '生活百家';
       break;
     case 2:
       barText = '饮料食品';
       break;
     case 3:
       barText = '生鲜';
       break;
     case 4:
       barText = '外卖';
       break;
   }
   wx.setNavigationBarTitle({
     title:barText
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