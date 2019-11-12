// pages/workerandwxml/workerandwxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   result:''
  },
  /***
   * 触发主线程
   */
  touch(e){
    console.log(e);
    let that=this;
    let num1=e.detail.value.num1;
    let num2 = e.detail.value.num2;
    if(num1==''||num2==''){
      wx.showModal({
        title: '数据异常',
        content: '请检查输入的数据'
      })
      return ;
    }
    //创建worke线程对象
    const worker=wx.createWorker('/workers/myworkers.js');
    //发送数据
    worker.postMessage({
      x:num1,
      y:num2
    })
    //监控
    worker.onMessage((res)=>{
      console.log('这是主线程的onMessag对象',res);
      that.setData({
        result:res.sum 
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