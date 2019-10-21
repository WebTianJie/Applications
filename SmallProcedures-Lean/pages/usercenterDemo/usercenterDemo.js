// pages/usercenterDemo/usercenterDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:['','',''],
    date:'',
    time:'',
    multiIndex:[0,0,0],
    index:0,
    multiArray:[
      ['中国','北京'],
      ['美国','纽约'],
      ['日本','大阪'],
      ['英国','伦敦','开普勒']
    ],
    country: ['中国','美国','日本','英国'],
    radioArr:[
      {name:'top',checked:false,value:'top'},
      { name: 'tom', checked: false, value: 'tom' },
      { name: 'lily', checked: true, value: 'lily' },
      { name: 'judy', checked: false, value: 'judy' }
    ],
    items:[
      {
        name:'top',value:'CHA'
      },
      {
        name: 'alis', value: 'CHA'
      },
      {
        name: 'tom', value: 'CHA',checked:true
      },
      {
        name: 'lyly', value: 'CHA'
      }
      
    ]
  },
  /**
   * 开关
   */
  switchChange(e){
      console.log(e);
  },
  /**
   *slidechange 
   */
  slideChane(e){
    console.log(e);
  },
  /**
   * picker行变化
   */
  multiChange(e){
    console.log(e);
  },
  /***
   * picker列变化
   */
  coloumnChange(e){
      console.log(e);
  },
  /**
   * 时间变化
   */
  timeChange(e){
      console.log(e);
      this.setData({
        time:e.detail.value
      })
  },
  /***
   * 城市选择
   */
  cityChange(e){
    console.log(e);
    this.setData({
      city:e.detail.value
    })
  },
  /**
   * 日期变化
   */
  dateChange(e){
    console.log(e);
    this.setData({
      date:e.detail.value
    })
  },
  /***
   * 选择以后
   */
  pickChange(e){
      console.log(e.detail.value);
      this.setData({
        index:e.detail.value
      })
      console.log(this.data.index);
  },
  /***
   * 单选框
   */
  radioChange(e){
    console.log(e);
  },
  /***
   * 复选框按钮
   */
  checkChange(){

  },
  /***
   * 
   */
  statusChange(e){
    console.log(e);
  },
  /***
   * 鼠标离开
   */
  blur(){

  },
  /***
   * 获取焦点
   */
  getFocus(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /***
   * 获取电话号码
   */
  phone(){

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