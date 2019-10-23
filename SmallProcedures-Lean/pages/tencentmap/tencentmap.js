// pages/tencentmap/tencentmap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      controls:[
        {
          id:1,
          iconPath:'/image/location.png',
          position:{
            left:0,
            top: 300 - 50,
            width:50,
            height:50
          },
          clickable:true,
        }
      ],
    polyline: [{
      points: [
        {
          latitude: 23.099994,
          longitude: 113.3245211
        },
        {
          latitude: 23.11499,
          longitude: 113.324520
        }
      ],
      color: '#FF00DD',
      width: 2,
      dottedLine: true
    }],
      markers: [
      {
        id: 0,
        iconPath: '/image/location.png',
        width: 50,
        height: 50,
        latitude: 23.099994,
        longitude: 113.324520
      }
    ]
  },
  /**
   * 标记被点击
   */
  markTap(e){
    console.log(e);
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