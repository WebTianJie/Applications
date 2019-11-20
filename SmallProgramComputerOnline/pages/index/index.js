// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:''
  },
  /***
   * cal 计算函数
   */
  cal(e){
    console.log(e);
    let that=this;
    let num1=e.detail.value.num1;
    let num2 = e.detail.value.num2;
    let opt=e.detail.target.dataset.opt;
    console.log(opt);
    if(num1==""||num2==""){
      wx.showToast({
        title: '数值未填'
      })
      return ;
    }else{
      wx.showLoading({
        title: '计算中'
      })
      wx.cloud.callFunction({
        name:'cal',
        data:{
          num1:num1,
          num2:num2,
          opt:opt
        },
        success(res){
          console.log(res);
           that.setData({
             result:res.result
           })
           wx.hideLoading();
        },
        fail(err){
          console.log(res);
        }
      })
    }
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