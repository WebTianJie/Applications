// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      temp:'lincehis',
      arr:[
        {
          name: '明天',
          age: 18
        },
        {
          name: '明天',
          age: 18
        },
        {
          name: '明天',
          age: 18
        },
        {
          name: '明天',
          age: 18
        }
      ],
    arr1:[
      {
        name: '梦梦',
        age: 18
      },
      {
        name: 'm丽丽',
        age: 19
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().setWatcher(this);
    this.setData({
      temp:'北冥'
    })
  },
  watch: {
    temp: function (newValue) {
      console.log(newValue); // name改变时，调用该方法输出新值。
    }
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
    var self=this;
    setTimeout(function(){
     
    },10)
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
      var c=this.data.arr.concat(this.data.arr1);
      this.setData({
        arr:c
      })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var c = this.data.arr.concat(this.data.arr1);
    this.setData({
      arr: c
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})