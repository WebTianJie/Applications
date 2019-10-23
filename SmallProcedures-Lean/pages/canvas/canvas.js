// pages/canvas/canvas.js
Page({
  // 保存x坐标
  sx:0,
  // 保存y坐标
  sy:0,
  //是否是橡皮
  isClear:false,
  /**
   * 页面的初始数据
   */
  data: {
      color:'#000',
      pen:2
  },
  /**
   * 选择笔刷
   */
  selectBrush(e){
      this.setData({
         pen:parseInt(e.currentTarget.dataset.brush)
      })
      this.isClear=false;
  },
  /***
   * 选择颜色
   */
  selectColor(e){
    this.setData({
      color: e.currentTarget.dataset.color
    })
    this.isClear = false;
  },
  /***
   * 清除画布
   */
  clearCanvas(){
    if(this.isClear){
      this.isClear=false;
    }else{
      this.isClear=true;
    }
  },
  /***
   * 开始移动
   */
  touchStart(e){
    this.sx = e.changedTouches[0].x;//获取开始坐标
    this.sy = e.changedTouches[0].y;//获取结束坐标
    this.ctx = wx.createContext();//创建绘画对象
    if(this.isClear){//判断橡皮擦功能
      this.ctx.setStrokeStyle('#ddd');//橡皮擦的原理
      this.ctx.setLineCap('round');//线条圆润
      this.ctx.setLineJoin('round');//设置连那条线交叉样式
      this.ctx.setLineWidth(40);//设置画笔的粗细
      this.ctx.save();//保存当前的坐标轴的,缩放,旋转,平移信息
      this.ctx.beginPath();//开始一个路径
      this.ctx.arc(this.sx,this.sy,5,0,2*Math.PI,true);//添加一个弧形的路径到当前的路径,总共画360度
      this.ctx.fill();//对路径进行填充
      this.ctx.restore();//回复之前的保存过的坐标轴缩放,旋转,平移信息
    }else{
      this.ctx.setStrokeStyle(this.data.color);//设置画笔的颜色
      this.ctx.setLineWidth(this.data.pen);//设置画笔的粗细
      this.ctx.setLineCap('round');//线条圆润
      this.ctx.beginPath();//开始画
    }
  },
  /***
   * 开始移动
   */
  touchMove(e){
    let ex = e.changedTouches[0].x;
    let ey = e.changedTouches[0].y;
    if(this.isClear){
      this.ctx.save();// 保存之前的坐标轴缩放, 平移, 旋转信息
      this.ctx.moveTo(this.sx,this.sy);//把路径移动到指点的坐标点
      this.ctx.lineTo(ex,ey);//添加一个新的点,然后在画布中创建从该点到最后的指定点的线条
      this.ctx.stroke();//当前路径描边
      this.ctx.restore();//保存之前的坐标轴缩放,平移,旋转信息
      this.sx=ex;
      this.sy=ey;
    }else{
      this.ctx.moveTo(this.sx,this.sy);
      this.ctx.lineTo(ex,ey);
      this.ctx.stroke();
      this.sx=ex;
      this.sy=ey;
    }
    wx.drawCanvas({
      canvasId:'myCanvas',
      reserve:true,
      actions:this.ctx.getActions()
    })
  },
  /***
   * 移动结束
   */
  touchEnd(){

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