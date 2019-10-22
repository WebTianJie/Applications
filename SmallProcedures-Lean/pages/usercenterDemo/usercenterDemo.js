// pages/usercenterDemo/usercenterDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      personName:'',
      password:'',
      sex:'',
      hobby:'',
      birthday:'',
      studay:'',
      isMember:'',
      agreementing:''
  },
  /**
   * 姓名:
   */
  nameBlur(e){
    this.setData({
      personName:e.detail.value
    })
  },
  /***
   * pwd
   */
  pwdBlur(e){
    this.setData({
      password: e.detail.value
    })
  },
  /**
   * 性别
   */
  radioChange(e){
    this.setData({
      sex: e.detail.value==1?'male':'female'
    })
  },
  /***
   *爱好
   */
  checkChange(e){
    this.setData({
      hobby:e.detail.value
    })
  },
  /***
   * 生日
   */
  dateChange(e){
    this.setData({
      birthday:e.detail.value
    })
  },
  /**
   * 学习时间
   */
  slideChange(e){
    this.setData({
      studay:e.detail.value
    })
  },
  /**
   * 会员判断
   */
  isMember(e){
    this.setData({
      isMember:e.detail.value
    })
  },
  /***
   * 表单重置
   */
  formReset(){
    console.log('reset');
  },
  /***
   * 表单提交
   */
  formSubmit(){
    console.log(0);
    let member={
      personName:this.data.personName,
      sex:this.data.sex,
      hobby:this.data.sex,
      birthday:this.data.birthday,
      studay:this.data.studay,
      isMember:this.data.isMember,
      agreementing:this.data.agreementing
     }
     //向服务器提交
     //向云端提交
     console.log(member);
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