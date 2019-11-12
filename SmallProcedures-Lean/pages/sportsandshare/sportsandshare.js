// pages/sportsandshare/sportsandshare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /***
   * 运动
   */
  sport(){
    wx.getWeRunData({
      success(res){
        console.log(res);
      },
      fail(err){
        console.log(err);
      }
    })
  },
  /***
   * 分享
   */
  share(){

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
     /**
      * title:标题
      *path:转发后的页面
      *imgUrl:自定义的图片路径
      */
      return {
        title:'清凉暑假亲自游玩记',
        path:'/pages/index/index',
        imageUrl:'http://img.sccnn.com/bimg/337/6624.jpg'
      }
  }
})