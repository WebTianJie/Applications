// pages/RecorderDemo/recorderDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    j: 1,
    isSpeaking: true,
    voices: [],
  },
  /**
   * 开始播放
   */
  gotoPlay(e) {
      let filePath=e.currentTarget.dataset.key;
      //点击开始播放
      wx.showToast({
        title: '播放结束',
        icon: 'success',
        dutation: 1000
      })
      wx.playVoice({
        filePath: filePath,
        success(){
          wx.showToast({
            title: '播放结束',
            icon:'success',
            dutation:1000
          })
        }
      })
  },
  /**
   * 开始录音
   */
  touchStart(e) {
    let that = this;
    let date = new Date();
    //麦克风帧动画
    speaking.call(this);
    this.setData({
      isSpeaking: true
    })
    //开始录音
    wx.startRecord({
      success(res) {
        console.log(res);
        let tempPath = res.tempFilePath;
        console.log(res);
        //保存
        wx.saveFile({
          tempFilePath: tempPath,
          success(res) {
            //持久路径
            //本地文件路径大小,限制在100m
            let saveFilePath = res.savedFilePath;
            console.log(saveFilePath);
          }
        })
        //成功提示
        wx.showToast({
          title: '录音成功',
          icon: 'success',
          dutation: 1000
        })
        //获取音频列表
        wx.getSavedFileList({
          success(res) {
            let voices = [];
            for (let i = 0; i < res.fileList.length; i++) {
              let ctime = new Date(res.fileList[i].createTime);
              let size = (res.fileList[i].size / 1024).toFixed(2);
              let voice = {
                filePath: res.fileList[i].filePath,
                ctime: ctime,
                size: size
              }
              //拼接数组
              voices = voices.concat(voice);
              that.setData({
                voices: voices
              })
            }
          }
        })
      },
      fail(res) {
        console.log(res);
      }
    })
  },
  /**
   *结束录音
   */
  touchEnd(e) {
    //关闭麦克风
    this.setData({
      isSpeaking: false
    })
    clearInterval(this.timer);
    wx.stopRecord();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getSavedFileList({
      success(res) {
        let voices = [];
        for (let i = 0; i < res.fileList.length; i++) {
          let ctime = new Date(res.fileList[i].createTime);
          let size = (res.fileList[i].size / 1024).toFixed(2);
          let voice = {
            filePath: res.fileList[i].filePath,
            ctime: ctime,
            size: size
          }
          //拼接数组
          voices = voices.concat(voice);
          that.setData({
            voices: voices
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})

//麦克风帧动画
function speaking() {
  let that = this;
  let i = 0;
  setInterval(() => {
    i++;
    i = i % 5;
    that.setData({
      j: i
    })
  }, 200)
}