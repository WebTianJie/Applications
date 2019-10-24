// pages/downLoadFile/downLoadFile.js
Page({
  filePath:'http://up.enterdesk.com/edpic_source/2c/1a/f4/2c1af4e395a1af8a57f67ab5b3772569.jpg',
  /**
   * 页面的初始数据
   */
  data: {
    src:'',
    percent:''
  },
  downLoadFile(){
   let that=this;
   const downloadTask= wx.downloadFile({
        url:this.filePath,
        success:(res)=>{
          console.log(res);
          this.setData({
            src:res.tempFilePath
          })
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
    // downloadTask.abort();//终止下载任务
    downloadTask.onProgressUpdate(res=>{
       console.log('下载进度',res.progress);
       console.log('已经下载',res.totalBytesWritten);
       console.log('下载总长度',res.totalBytesExpectedToWrite);
      //  that.setData({
      //    percent: res.totalBytesWritten / res.totalBytesExpectedToWrite*100
      //  })
        that.setData({
          percent: res.progress
       })
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