// pages/commentslist/commentslist.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      commetnList:[],
      commetCon:'',
      hiddenModel:true,
      contitle:'',
      conid:'',
      nomsg: true
  },
  /***
   * 审批通过
   */
  approval(e) {
    this.updateApprovalCommentsById(e.currentTarget.dataset.id);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let title=options.title;
    this.getAllApprovalCommentsByTitle(title);
  },
  /***
   * 显示详细信息
   */
  showDetail(e){
    let commentObj = this.data.commetnList[e.currentTarget.dataset.index];
    this.setData({
      commetCon:commentObj.comment_con,
      hiddenModel:false,
      contitle:commentObj.comment_user,
      conid:commentObj.id
    })
  },
  /***
   * 隐藏遮罩层
   */
  hideModel(e){
    let target = e.currentTarget.dataset.tartget;
    if(target){
      this.setData({
        hiddenModel: true
      })
    }
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
    let items = this.data.commetnList;
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
      commetnList: items
    })
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

  },

  /***
  * 计算角度,根据两点坐标
  */
  angle(sx, sy, endx, endy) {
    var _x = endx - sx, _y = endy - sy;
    return 360 * Math.atan(_y / _x) / (2 * Math.PI);
  },
  /**
  * 获取待授权评论列表
  */
  getAllApprovalCommentsByTitle(title) {
    let that = this;
    wx.request({
      url: app.globalData.serverPath + 'getAllApprovalCommentsByTitle?title=' + title,
      success(res) {
        let items = res.data.data;
        if(res.data.data.length==0){
          that.setData({
            nomsg: false
          })
        }
        for (let i = 0; i < items.length; i++) {
          items[i].isTouchMove = false;
          items[i].ctime = that.timeFormate(items[i].ctime);
        }
        that.setData({
          commetnList: items
        })
      },
      error(err) {

      }
    })
  },
  /***
   * 
   */
  updateApprovalCommentsById(id){
      let that=this;
      wx.request({
        url: app.globalData.serverPath + 'updateApprovalCommentsById?id=' + id,
        success(res){
           wx.showToast({
             title: '审核通过',
           })
           that.setData({
             hiddenModel:true
           })
          that.getAllApprovalCommentsByTitle(app.globalData.title);
        }
      })
  },
  /** 
   * 时间戳转换
  */
  timeFormate(unixtime) {
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
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    var timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    return timeSpanStr;
  }
})