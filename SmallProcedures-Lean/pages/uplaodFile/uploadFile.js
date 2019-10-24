// pages/uplaodFile/uploadFile.js
Page({
  uploadPath:'',
  /**
   * 页面的初始数据
   */
  data: {
      src:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /***
   * 上传文件
   */
  uploadFile(){

  },
  chooseImg(){
    wx.chooseImage({
      success: function(res) {
        console.log(res);
        const uploadTask = wx.uploadFile({
          url: 'https://www.baidu.com',
          filePath: res.tempFilePaths[0],
          name: 'pic1',
          success:(res)=>{
            console.log(res);
          },
          error:(err)=>{
            console.log('错了',err);
          }
        })
      },
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