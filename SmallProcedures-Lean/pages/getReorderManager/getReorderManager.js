// pages/getReorderManager/getReorderManager.js
const recorderManager=wx.getRecorderManager();
const innerAudioContext=wx.createInnerAudioContext();
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
  /***
   * 开始录音
   */
  start(){
    const options={
      duration:10000,//录音时长
      sampleRate:16000,//采样率
      numberOfChannels:1,//录音通道数
      encodeBitRate:96000,//编码码率
      format:'mp3',//音频格式,有效aac/mp3
      frameSize:50//指定帧大小,单位kb
    }
    recorderManager.start(options);
    recorderManager.onStart(()=>{
        console.log('start');
    })
    recorderManager.onError((err)=>{
      console.log(err);
    })
  },
  /**
   * 停止录音
   */
  stop(){
    let that=this;
    recorderManager.stop();
    recorderManager.onStop((res)=>{
      that.tempFilePath=res.tempFilePath;
      console.log('停止录音',res.tempFilePath);
    })
  },
  /**
   * 播放录音
   */
  play(){
    innerAudioContext.autoplay=true;
    innerAudioContext.src = that.tempFilePath;
    innerAudioContext.onPlay(()=>{
      console.log('播放');
    })
    innerAudioContext.onError((err)=>{
      console.log('err');
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