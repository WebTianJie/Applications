// pages/wximage/wximage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:[],
    upateImage:'',
    serviceImage:'http://g.hiphotos.baidu.com/image/pic/item/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 选择图像
   */
  chooseimage(){
    let  that=this;
    wx.chooseImage({//选择图片
      success: function(res) {   
        console.log(res);      
          that.setData({
            upateImage: res.tempFilePaths,
            tempFilePaths: res.tempFilePaths
          })
      }
    })
  },
  /**
   * 获取图片信息
   */
  getImageInfo(){
    let that=this;
    wx.getImageInfo({
      src: that.data.tempFilePaths[0],
      success(res){
        console.log(res);
      }
    })
  },
  /**预览图片 */
  previewImage(){
    let that=this;
    wx.previewImage({
      urls: [that.data.tempFilePaths[0]]
    })
  },
  /**
   * 下载保存网路图片
   */
  downLoadService(){
    let that=this;
     wx.downloadFile({
       url:that.data.serviceImage,
       success(res){
         wx.saveImageToPhotosAlbum({
           filePath: res.tempFilePath,
           success(){
             console.log('保存成功了');
           },
           fail(err){
             console.log(err);
           }
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