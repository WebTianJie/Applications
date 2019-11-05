// pages/scanning/scanning.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },
  /**
   * 从相机和相册扫码
   */
  sanCode2(){
    let that=this;
    wx.scanCode({
      success(res) {
        console.log(res);
        that.setData({
           src:res.result
        })
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  /***
   * 只从相机扫描
   */
  sanCode1(){
    wx.scanCode({
      onlyFromCamera:true,
      success(res){
        console.log(res);
        wx.showToast({
          title: res.result,
        })
      },
      fail(err){
        console.log(err);
      }
    })
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