
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 保存文件
   * 保存文件到本地,会移动临时文件
   */
  saveFile(){
    wx.chooseImage({
      success: function(res) {
        const tempfile=res.tempFilePaths[0];
        //保存
        wx.saveFile({
          tempFilePath: tempfile,
          success(res){
            const saveFilePath=res;
            console.log(saveFilePath)
            //图片存储的路径; C:\Users\Administrator\AppData\Local\微信开发者工具\User Data
            //搜索文件名
          }
        })
        //保存至相册
        wx.saveImageToPhotosAlbum({
          filePath: tempfile,
          success(res){
              console.log(res);
          }
        })
        //保存至视频目录
        wx.saveVideoToPhotosAlbum({
          filePath: tempfile,
          success(res){
            console.log('保存到视频目录');
          }
        })
      },
    })
  },
  /***
   * 获取本地临存储文件
   */
  getFileInfo(){
    wx.chooseImage({
      success: function(res) {
        wx.getFileInfo({
          filePath: res.tempFilePaths[0],
          success(res){
            console.log(res);
            console.log(res.size);//文件大小
            console.log(res.digest);//计算算法 md5/sha1
          }
        })
      },
    })
  },
  /***
   *获取保存文件列表 
   */
  getSaveFileList(){
    wx.getSavedFileList({
      success(res){
        console.log(res);
      }
    })  
  },
  /**
   * 删除临时文件列表
   */
  removeSaveFile(){
    wx.getSavedFileList({
      success(res){
        //删除
        for(let i=0;i<res.fileList.length;i++){
            wx.removeSavedFile({
              filePath: res.fileList[i].filePath,
              success(e){
                console.log('success',e);
              },
              fail(e){
                console.log('fail',e);
              },
              complete(e){
                console.log('complete',e);
              }
            })
        }
      }
    })
  },
  /***
   * 打开文件
   */
  openDocument(){
    wx.downloadFile({
      url:'http://g.hiphotos.baidu.com/image/pic/item/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg',
      success(res){
        console.log(res);
        wx.openDocument({
          filePath: res.tempFilePath,
          fileType:'jpeg',
          success(res){
            console.log('文件已经打开',res);
          },
          fail(e){
            console.log(e);
          }
        })
      },
      fail(e){
        cosnole.log(e);
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