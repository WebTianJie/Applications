//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    title: app.globalData.title,
    userInfo: {},
    canUse: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    comments_list: '',
    avatarUrl: ''
  },
  /***
   * 点赞
   */
  addFabulous(e) {
    let isClicked = e.currentTarget.dataset.isclicked;
    let count = parseInt(e.currentTarget.dataset.fabulous);
    let id=parseInt(e.currentTarget.dataset.id);
    this.updateFabulous(isClicked,count,id);
  },
  onLoad: function (e) {
    let that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        canUse: true
      })
      this.getAllComment(that.data.title);
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          canUse: true
        })
        this.getAllComment(that.data.title);
      }

    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            canUse: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    if (!e.detail.userInfo){
        return;
    }
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      canUse: true
    })
    this.getAllComment(this.data.title);
  },
  /**
   * 获取评论列表
   */
  getAllComment(title) {
    let that = this;
    wx.request({
      url: app.globalData.serverPath + 'queryComment?title=' + title,
      success(res) {
        that.setData({
          comments_list: res.data.data
        })
      },
      error(err) {
        
      }
    })
  },
  /**
   * 更新点赞
   */
  updateFabulous(isClicked, count,id){
      let that=this;
      count=isClicked==0?++count:--count;
      isClicked=isClicked==0?1:0;
      wx.request({
        url: app.globalData.serverPath + 'updateFabulous?id=' + id + '&count=' + count +'&isClicked='+isClicked,
        success(res){
          if(res.data.status=='success'){
            that.getAllComment(that.data.title);
          }
        },
        error(err){
            console.log(err);
        }
      })
  }
})
