// pages/articlelist/articlelist.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    startx: 0,
    starty: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllComment('all');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /***
  * 移动开始
  */
  touchStart(event) {
    this.setData({
      startx: event.changedTouches[0].pageX,
      starty: event.changedTouches[0].pageY
    })
  },
  /***
   * 移动结束
   */
  touchMove(event) {
    let sx = this.data.startx;
    let sy = this.data.starty;
    let endx = event.changedTouches[0].pageX;
    let endy = event.changedTouches[0].pageY;
    let angle = this.angle(sx, sy, endx, endy);
    let disX = sx - endx;
    let items = this.data.articleList;
    let index = event.currentTarget.dataset.index;
    for (let i = 0; i < items.length; i++) {
      items[i].isTouchMove = false;
      if (i == index) {
        if (disX > 45) {
          items[i].isTouchMove = true;
        } else {
          items[i].isTouchMove = false;
        }
      }
    }
    this.setData({
      articleList: items
    })
  },
  /***
   * 查看评论
   */
  lookup(e){
    let title=e.currentTarget.dataset.more;
    wx.reLaunch({
      url: '/pages/commentslist/commentslist?title='+title
    })
  },
  /**
   * 删除评论
   */
  del(e){
    console.log(e.currentTarget.dataset.title);
    let  that=this;
    wx.request({
      url: app.globalData.serverPath + 'delCommentByTitle?title=' + e.currentTarget.dataset.title,
      success(res){
        that.getAllComment('all');
      }
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
  angle(sx, sy, endx, endy) {
    var _x = endx - sx, _y = endy - sy;
    return 360 * Math.atan(_y / _x) / (2 * Math.PI);
  },
   /**
   * 获取评论列表
   */
  getAllComment(title) {
    let that = this;
    wx.request({
      url: app.globalData.serverPath + 'queryComment?title='+title,
      success(res) {
        let items=res.data.data;
        for (let i = 0; i < items.length; i++) {
          items[i].isTouchMove = false;
          items[i].ctime = that.timeFormate(items[i].ctime);
        }
        that.setData({
          articleList:items
        })
      },
      error(err) {

      }
    })
  },
  /** 
   * 时间戳转换
  */
  timeFormate(unixtime){
    var dateTime = new Date(parseInt(unixtime) * 1000)
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var now = new Date();
    var now_new = Date.parse(now.toDateString()); //typescript转换写法
    var milliseconds = now_new - dateTime;
    month=month<10?'0'+month:month;
    day=day < 10 ? '0' + day : day;
    hour=hour < 10 ? '0' + hour : hour;
    minute=minute < 10 ? '0' + minute : minute;
    var timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    return timeSpanStr;
  }
})