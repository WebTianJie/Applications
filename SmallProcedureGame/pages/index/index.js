// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      newArr:[
        {link:'111',title:'王者荣耀'},
        { link: '', title: '吃鸡游戏' },
        { link: '', title: '穿越火线' },
        { link: '', title: '英雄联盟' },
        { link: '', title: '梦幻西游' },
        { link: '', title: '罪恶都市' },
        { link: '', title: '梦幻西游'},
        { link: '', title: '连连看' },
        { link: '', title: 'QQ飞车' }
        
      ],
      flashArr:[
        { title: '火车', imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563327679&di=7c2e1250f9d8e2695c722df17f1605c2&imgtype=jpg&er=1&src=http%3A%2F%2Fnewsimg.5054399.com%2Fuploads%2F091028%2F1256702808_4ae7c3586ba69.jpeg'},
        { title: '火车', imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562732973486&di=7ffc3dc9a96a6fab53d3691f66e132b2&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F90%2F23%2F55a7b48d86771_1024.jpg' },
        { title: '火车', imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562732983580&di=2cd9c09b7bfb6e1a1fcb61f99da6ad8d&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20140815%2Fhuoyanqichecemiantaobaodianzhaobeijing_2736789.jpg' }
      ],
      classArr:[
        { url: '11', icon:'/icon/t1.png',title:'秒杀'},
        { url: '11', icon: '/icon/t2.png', title: '对战' },
        { url: '', icon: '/icon/t3.png', title: '收藏' },
        { url: '', icon: '/icon/t4.png', title: '日志' },
        { url: '', icon: '/icon/t5.png', title: '设置' }
      ],
      navArr: [
      { url: '11', icon: '/icon/u1.png', title: '秒杀' },
      { url: '11', icon: '/icon/u2.png', title: '对战' },
      { url: '', icon: '/icon/u3.png', title: '收藏' },
      { url: '', icon: '/icon/u4.png', title: '日志' },
      { url: '', icon: '/icon/u5.png', title: '设置' },
      { url: '11', icon: '/icon/u6.png', title: '对战' },
      { url: '11', icon: '/icon/u7.png', title: '对战' },
      { url: '11', icon: '/icon/u8.png', title: '对战' },
      { url: '11', icon: '/icon/u9.png', title: '对战' },
      { url: '11', icon: '/icon/u10.png', title: '对战' }
    ],
    gameArr:[
      { title: '王者', imgSrc:'/icon/y1.png'},
      { title: '吃鸡', imgSrc: '/icon/y1.png' },
      { title: '消消乐', imgSrc: '/icon/y1.png' }
    ]
  },
  /**
   * 
   */
  linkFn(){
    console.log('跳转');
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