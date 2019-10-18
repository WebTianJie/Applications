// pages/moveableDemo/moveableDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      items:[],
      startx:0,
      starty:0
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
      let items=[];
      for(let i=0;i<10;i++){
          var item={};
          item.isTouchMove=false;
          item.content ='向左滑动删除,向左滑动删除,向左滑动删除,向左滑动删除,向左滑动删除,向左滑动删除'+'i';
          items.push(item);
      }
      this.setData({
        items:items
      })
  },
  /***
   * 移动开始
   */
  touchStart(event){
    this.setData({
      startx:event.changedTouches[0].pageX,
      starty:event.changedTouches[0].pageY
    })
  },
  /***
   * 移动结束
   */
  touchMove(event){
    let sx=this.data.startx;
    let sy=this.data.starty;
    let endx = event.changedTouches[0].pageX;
    let endy = event.changedTouches[0].pageY;
    let angle=this.angle(sx,sy,endx,endy);
    console.log(angle);
    let disX=sx-endx;
    let items = this.data.items;
    let index = event.currentTarget.dataset.index;
    for(let i=0;i<items.length;i++){
      items[i].isTouchMove = false;
        if(i==index){
          if(disX>45){
            items[i].isTouchMove = true;
          }else{
            items[i].isTouchMove = false;
          }
        }
    }
    this.setData({
      items:items
    })
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

  },
  /***
   * 计算角度,根据两点坐标
   */
  angle(sx,sy,endx,endy){
    var _x=endx-sx,_y=endy-sy;
    return 360*Math.atan(_y/_x)/(2*Math.PI);
  }
})