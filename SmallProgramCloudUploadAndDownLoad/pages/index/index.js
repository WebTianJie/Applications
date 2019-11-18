Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /***
   * 上传图片
   */
  uploadImage(){
    let that=this;
    wx.chooseImage({
      success: function(res) {
        //上传到云存储
        that.cloudUploadImage(res.tempFilePaths[0]);
      },
    })
  },
  /***
   * 上传到云存储
   */
  cloudUploadImage(path){
    if(path==""){
      wx.showToast({
        title: "参数错误",
      })
      return;
    }else{
      wx.cloud.uploadFile({
        cloudPath:'image_icon.png',//云端存储名称
        filePath:path,
        config:{
          env: 'cloude-first-001-29zsh'
        },
        success(res){
          console.log(res);
        },
        fail(err){
          console .log(err);
        }
      })
    }
  },
  /***
   * 下载文件
   */
  downLoadImage(e){
    console.log(e.detail.value.imgPath);
    if (e.detail.value.imgPath==''){
        wx.showToast({
          title: '路径错误',
        })
    }else{
      this.downCloudFile(e.detail.value.imgPath);
    }
  },
  /***
   * 云端下载
   */
  downCloudFile(path){
    let  that=this;
    wx.cloud.downloadFile({
        fileID:path,
        success(res){
          console.log(res);
          that.setData({
            imgPath: res.tempFilePath
          })
        },
        fial(err){
          console.log(err);
        }
    })
  },
  /**
   * 删除云图片路径
   */
  deleteImage(){
    let imgFileList = ['cloud://cloude-first-001-29zsh.636c-cloude-first-001-29zsh-1300673939/image_icon.png'];
     //删除图片
     wx.cloud.deleteFile({
       fileList:imgFileList,
       success(res){
         console.log(res);
         wx.showToast({
           title: '删除成功'
         })
       },
       fail(err){
         console.log(err);
       }
     })
  },
  /***
   * 转化临时文件路径
   */
  getTempFilePath(){
    let fileList = ['cloud://cloude-first-001-29zsh.636c-cloude-first-001-29zsh-1300673939/image_icon.png'];
    wx.cloud.getTempFileURL({
      fileList:fileList,
      success(res){
        console.log(res.fileList[0].tempFileURL);
      },
      fail(err){
        console.log(err);
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