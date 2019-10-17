// pages/eventDemo/eventDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight:0,
    currIndex:0,
    classArr: ['color-red', 'color-green', 'color-green', 'color-green', 'color-green', 'color-green', 'color-green'],
    navigatorArr: [
      { link: '111', title: '王者荣耀' },
      { link: '', title: '吃鸡游戏' },
      { link: '', title: '穿越火线' },
      { link: '', title: '英雄联盟' },
      { link: '', title: '梦幻西游' },
      { link: '', title: '罪恶都市' },
      { link: '', title: '梦幻西游' },
      { link: '', title: '连连看' },
      { link: '', title: 'QQ飞车' }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
      wx.getSystemInfo({
        success: function(res) {
          let clientHeight=res.windowHeight;
          let clientWIDTH=res.windowWidth;
          let ratio=750/clientWIDTH;
          let rpxSwiper=clientHeight*ratio;
          that.setData({
            swiperHeight: rpxSwiper
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 
   */
  changeActive(event){
    let classActiveArr=[];
    for (let i = 0; i < this.data.classArr.length;i++){
      if (i == event.currentTarget.dataset.index){
          classActiveArr.push('color-red');
        }else{
          classActiveArr.push('color-green');
        }
    }
    this.setData({
      currIndex: event.currentTarget.dataset.index,
      classArr: classActiveArr
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

  }
})