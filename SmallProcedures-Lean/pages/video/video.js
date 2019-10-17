// pages/video/video.js
function randomCOlor(){
  let rgb=[];
  for(let i=0;i<3;i++){
    let color=Math.floor(Math.random()*256).toString(16);
    color=color.length==1 ? '0'+color:color;
    rgb.push(color);
  }
  return '#'+rgb.join('');
}
Page({
  inputVlue:'',
  /**
   * 页面的初始数据
   */
  data: {
    src:'',
    danmulist:[
      {
        text:'最好看的视频',
        color:'white',
        time:1
      },
      {
        text: '感觉不错',
        color: 'green',
        time: 3
      },
      {
        text: '这是一个人,还是两个人',
        color: 'yellow',
        time: 6
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.videoContext = wx.createVideoContext('muvideo', this)
  },
  /***
   * 输入操作
   */
  inputBlur(e){
      this.inputVlue=e.detail.value
  },
  /**
   * 发送弹幕
   */
  senDanmu(){
    this.videoContext.sendDanmu({
      text:this.inputVlue,
      color:randomCOlor()
    })
  },
  /***
   * 获取视频
   */
  getVideo(){
    let that=this;
    wx.chooseVideo({
      sourceTpye:['camera','album'],
      maxDuration:60,
      camera:['front','back'],
      success(res){
        that.setData({
          src: res.tempFilePath
        })
      }
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