// pages/tuya/tuya.js
Page({
  //定义坐标变量
  startX:0,
  startY:0,
  /**
   * 页面的初始数据
   */
  data: {
      pen:2,
      color:'#00ff00'
  },
  /***
   * 
   */
  clearCanvas(e){
     
  },
  /***
   * 改变笔刷事件
   */
  selectBrush(e){
    this.setData({
      pen:parseInt(e.currentTarget.dataset.brush)
    })
  },
  /***
   * 改变颜色
   */
  selectColor(e){
    this.setData({
      color:e.currentTarget.dataset.color
    })
  },
  /**
   * 触摸事件开始
   */
  touchStart(e){
    //获取当前坐标
    this.startX=e.changedTouches[0].x;
    this.startY=e.changedTouches[0].y;
    //创建绘图上下文对象
    this.context=wx.createContext();
    //设置颜色
    this.context.setStrokeStyle(this.data.color);
    //设置笔触
    this.context.setLineWidth(this.data.pen);
    //设置圆角
    this.context.setLineCap('round');
    //开始绘制
    this.context.beginPath();
  },
  /***
   * 触摸移动事件
   */
  touchMove(e){
    let sx1 = e.changedTouches[0].x;
    let sy1= e.changedTouches[0].y;
    //设置画笔移动到起始点
    this.context.moveTo(this.startX,this.startY);
    //绘制到sx1,sy1的直线
    this.context.lineTo(sx1,sy1);
    //需要进行路径的描边
    this.context.stroke();
    //重新设置坐标点
    this.startX=sx1;
    this.startY=sy1;
    //绘制
    wx.drawCanvas({
      canvasId:'mycanvas',
      reserve:true,
      actions:this.context.getActions()//获取绘图动作数组
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