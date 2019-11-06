// pages/usertinfoandnavgitor/usertinfoandnavgitor.js
Page({
  menuList:['学校','家庭','公司','酒吧'],
  /**
   * 页面的初始数据
   */
  data: {
    showcon:''
  },
  /***
   * 动态设置导航条
   */
  setNavigateBarTitile(){
    let that=this;
    wx.showNavigationBarLoading();
    wx.setNavigationBarTitle({
      title: '用户正在输入'
    })
    setTimeout(()=>{
      wx.setNavigationBarTitle({
        title: '我的微信'
      })
      that.setData({
        showcon:'新内容'
      })
      wx.hideNavigationBarLoading();
    },3000)
    
  },
  /**
   * 消息提示框
   * icon:sucess,loading,none
   * images:自定义图片
   * mask:是否有透明层,防止触摸穿透
   */
  showtoast(){
    wx.showToast({
      title:'操作确认',
      icon:'success',
      images:'',
      duration:3000,
      mask:false,
      success(res){
        console.log(res);
      },
      fail(err){
        console.log(err);
      },
      complete(com){
        console.log(com);
      }
    })
  },
  /***
   * 模态框
   * showcanel,是否显示确定取消按钮
   * cancelText返回文本按钮
   */
  showmodule(){
    wx.showModal({
      title: '提示',
      content: '确定需要删除吗?',
      showCancel:true,
      cancelColor:'red',
      cancelText:'返回',
      confirmColor:'green',
      confirmText:'下一步',
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(err);
      },
      complete(com) {
        console.log(com);
      }
    })
  },
  /***
   * 加载层
   * mask:后面元素无法操作
   */
  showloading(){
    wx.showLoading({
      title: '数据正在查询',
      mask:true,
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(err);
      },
      complete(com) {
        console.log(com);
      }
    })
    setTimeout(()=>{
      wx.hideLoading({
        success(res) {
          console.log(res);
        },
        fail(err) {
          console.log(err);
        },
        complete(com) {
          console.log(com);
        }
      })
    },3000)
  },
  /***
   * 显示操作菜单
   */
  showactionsheet(){
    let  path='';
    wx.showActionSheet({
      itemList: this.menuList,
      itemColor:'#ccc',
      success(res) {
        console.log(res);
        switch(res.tapIndex){
          case 0:
          path='school';
          break;
          case 1:
            path = '/pages/index/index';
            break;
          case 2:
            path = 'school';
            break;
          case 3:
            path = 'school';
            break;
        }
        wx.redirectTo({
          url: path,
        })
      },
      fail(err) {
        console.log(err);
      },
      complete(com) {
        console.log(com);
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