// pages/recoder/reocder.js
Page({
  tempVoice:'',
  /**
   * 页面的初始数据
   */
  data: {

  },
  //开始录音
  recordVoice(){
    let  that=this;
    wx.startRecord({
      success(res){
        console.log('success',res);
        that.tempVoice=res.tempFilePath
      },
      fail(res){
          console.log('falil',res);
      }
    }) 
    setTimeout(()=>{
        wx.stopRecord();
    },5000) 
  },
  /**
   * 播放音频
   */
  playVoice(){
    let that=this;
    wx.playVoice({
      filePath: that.tempVoice
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