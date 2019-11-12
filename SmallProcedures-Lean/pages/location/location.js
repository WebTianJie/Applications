// pages/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'',
    latitude:''
  },
  /**
   * 获取地理位置
   */
  getLocation(){
    let  that=this;
    wx.getLocation({//需要在app.json里面配置信息
      type:'wgs84',
      success: function(res) {
        console.log(res);
        wx.request({
          url: 'http://api.go2map.com/engine/api/regeocoder/json?points='+res.longitude+','+res.latitude+'&type=1',
          success(res){
            console.log(res.data.response.data[0]);
            that.setData({
              longitude: res.data.response.data[0].x,
              latitude: res.data.response.data[0].y
            })
          }
        })
      },
    })
  },
  /**
   *获取发票抬头信息 
   */
  getInvoiceTtitle(){
    let that=this;
    //获取发票抬头
    wx.chooseInvoiceTitle({
      success(res){
        console.log(res);
        that.setData({
          bankName: res.bankName
        })
      },
      fail(err){
        console.log(err);
      }
    })
  },
  /***
   * 获取发票信息
   */
  getInvoice(){
    console.log('e');
    wx.chooseInvoice({
      success(res){
        console.log(res);
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