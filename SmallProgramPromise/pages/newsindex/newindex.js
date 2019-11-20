// pages/newsindex/newindex.js
Page({
  news:{
    title: '',
    des: '',
    author: '',
    source: '',
    content: ''
  },
  /**
   * 页面的初始数据
   */
  data: {
   
  },
  /***
   * 表单提交
   */
  fromSubmit(e){
    this.news.title=e.detail.value.title;
    this.news.des = e.detail.value.des;
    this.news.author = e.detail.value.author;
    this.news.source = e.detail.value.source;
    this.news.content = e.detail.value.content;
    let flag=this.validate(this.news);
    if(!flag){
      wx.showToast({
        title: '信息输入有误'
      })
    }else{
      //传送数据给云端数据
      // this.addNewsCloud(this.news);
      this.addCloudNewDataByCloudDB(this.news);
    }
  },
  /***
   * 综合调用
   */
  addCloudNewDataByCloudDB(news){
    let sendData = {
      dbname: 'news',
      type: 'insert',
      data: news
    };
    wx.cloud.callFunction({
      name:'cloudDB',
      data:sendData,
      complete(res){
        console.log(res);
        if(res.result._id){
            wx.showToast({
              title: '数据录入成功'
            })
        }
      },
      fail(err){
        console.log(err);
      }
    })
  },
  /**
   * 云端传送
   */
  addNewsCloud(news){
    wx.cloud.callFunction({
      name: "newsAdd",
      data:{
        news
      },
      success(res){
          console.log('res',res);
      },
      complete(res){
        console.log('com',res);
      },
      fail(err){
        console.log(err);
      }
    })
  },
  /***
   * 验证
   */
  validate(news){
      if(news.title==''||news.des==''||news.author==''||news.source==''||news.content==''){
        return false;
      }
      return true;
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