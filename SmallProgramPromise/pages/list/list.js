// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      newsList:[]
  },
  /***
   * 删除
   */
  delete(e){
    let that=this;
    wx.showModal({
      title: '警告',
      content: '确定删除吗?',
      success(res){
        if(res.confirm){
          let sendData = {
            type: 'delete',
            dbname: 'news',
            condition: {
              _id: e.currentTarget.dataset.id
            }
          }
          that.deleteCloud(sendData);

        }else{
          return;
        }
      }
    })
   
  },
  /***
   * 云端删除
   */
  deleteCloud(sendData){
    let that=this;
    //云端删除
    wx.cloud.callFunction({
      name: 'cloudDB',
      data: sendData,
      complete(res) {
        console.log(res);
        if (res.result.errMsg == 'collection.remove:ok') {
          wx.showToast({
            title: '删除成功',
            success() {
              that.getNewsList();
            }
          })
        }
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  /***
   * 获取新闻列表
   */
  getNewsList(){
    let  that=this;
    let sendData = {
      dbname: 'news',
      type: 'get',
      condition:{},
      skip: 0,
      limit:20
    };
    wx.cloud.callFunction({
      name:'cloudDB',
      data:sendData,
      complete(res){
        that.setData({
          newsList: res.result.data
        })
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
   this.getNewsList();
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