// pages/index/index.js
let phone = '';
let name = '';
let psw = '';
const db = wx.cloud.database().collection('login');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isZhuce: true
  },
  /***
   * 获取用户电话
   */
  getPhone(e) {
    phone = e.detail.value
  },
  /***
   * 获取密码
   */
  getPsw(e) {
    psw = e.detail.value
  },
  /**
   * 获取名称
   */
  getName(e) {
    name = e.detail.value
  },
  /**
   * 注册
   */
  reg() {
    let that = this;
    //获取用户信息
    //判断输入合法性
    if (!this.validate()){
      return ;
    }
    //判断手机号是否存在
    db.where({
      phone: phone
    }).get({
      success(res) {
        if (res.data.length > 0) {
          //手机号已经存在
          wx.showToast({
            title: '手机号已存在',
            icon: 'null'
          })
          //跳转登录界面
          that.setData({
            isZhuce: false
          })
        } else {
          that.zhuce();
        }
      }
    })
    return;
    //注册信息到云数据库

    //提示完成后跳转
  },
  /***
   * 验证
   */
  validate(){
    if(name==''){
      wx.showToast({
        title: '用户名不能空',
        icon: 'none'
      })
      return false;
    }
    if(phone==''||phone.length<11){
      wx.showToast({
        title: '手机号不正确',
        icon: 'none'
      })
      return false;
    }
    if(psw==''|| psw.length<3){
      wx.showToast({
        title: '密码格式不对',
        icon:'none'
      })
      return false;
    }
    return  1;
  },
  /***
   * 注册函数
   */
  zhuce() {
    let that = this;
    //注册信息到云数据库
    db.add({
      data: {
        name: name,
        phone: phone,
        psw: psw
      },
      success(res) {
        //提示使用户
        wx.showToast({
          title: '注册成功',
          icon: 'none',
        })
        //跳转登录界面
        that.setData({
          isZhuce: false
        })
      }
    })
  },
  /***
   * 登录
   */
  login() {
    db.where({
      phone: phone,
      psw: psw
    }).get({
      success(res) {
       if(res.data.length>0){
         wx.setStorage({
           key: 'loginInfo',
           data: {
             name:name,
             phone:phone,
             id:res.data[0]._id
           },
         })
         wx.showToast({
           title: '登录陈宫',
           icon:''
         })
         wx.redirectTo({
           url: '/pages/usercenter/usercenter',
         })
       }else{
         wx.showToast({
           title: '用户名或密码错误',
           icon:'none'
         })
       }
        
      },
      fail(err) {
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /***
   * 显示注册
   */
  showZhuce() {
    this.setData({
      isZhuce: true
    })
  },
  /***
   * 显示登录
   */
  showDengLu() {
    this.setData({
      isZhuce: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})