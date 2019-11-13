// miniprogram/pages/dbObj/dbObj.js
//创建数据库对象
const db = wx.cloud.database();
Page({
  newVal:'',
  /**
   * 页面的初始数据
   */
  data: {
    userlist:[],
    dbFieldVal:''
  },
  /***
   * 获取表单数据
   */
  formSubmit(e){
     let userInfo={
       name:e.detail.value.username,
       age:e.detail.value.userage
     }
    this.cloudDBadd(userInfo);
  },
  /**
 * 获取新记录值
 */
  getNewsFieldVal(e) {
    this.newVal = e.detail.value
  },
  /***
   * 云数据库记录添加
   * shujuku是云数据库的名字
   * add:云提供的增加接口
   * data:要添加的数据
   */
  cloudDBadd(userInfo){
    //c创建服务器端时间ctime
    //回调添加方式
    // db.collection('shujuku').add({
    //   data:{
    //     name: userInfo.name,
    //     age: userInfo.age,
    //     ctime: db.serverDate()
    //   },
    //   success(res){
    //     wx.showToast({
    //       title: '添加成功',
    //     })
    //     console.log(res._id);//新纪录的id
    //   }
    // });
    //Promise添加方式
    db.collection('shujuku').add({
      data: {
        name: userInfo.name,
        age: userInfo.age,
        ctime: db.serverDate()
      }
    }).then(res=>{
      wx.showToast({
        title: '添加成功',
      })
      console.log(res._id);//新纪录的id
    }).catch(err=>{
      console.log(err);
    })
  },
  /**
   * 获取用户列表
   * shujuku:云数据库的名字
   * get查询的方法
   */
  getUserList(){
    let  that=this;
    //回调方式
    // db.collection('shujuku').get({
    //   success(res){
    //     console.log(res);
    //     that.setData({
    //       userlist:res.data
    //     })
    //   }
    // })
    //Promise
    db.collection('shujuku').get().then(res=>{
      console.log(res);
      that.setData({
        userlist: res.data
      })
    }).catch(err=>{
      console.log(err);
    })
  },
  /***
   * 更新单条数据
   * doc:更新数据的条件,此处默认是id
   * update更新方法
   * shujuku:云端数据库
   * data:参数
   */
  updateData(){
    let that=this;
    //回调方法
    // db.collection('shujuku').doc('05a1947c5dcbb60c0002b49c0f33296b').update({
    //   data:{
    //     name:that.newVal
    //   },
    //   success(res){
    //     console.log(res);
    //   },
    //   fail(err){
    //     console.log(err);
    //   }
    // })
    //promise
    db.collection('shujuku').doc('05a1947c5dcbb60c0002b49c0f33296b').update({
      data: {
        name:that.newVal
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
  },
  /***
   * 更新所有数据
   * 更新多条数据需要在云端操作,不能再客户端操作
   */
  updateAllData(){
    let that=this;
    //调用云函数,并传参
    wx.cloud.callFunction({
      name:'updateall',//跟云函数的文件夹的名字保持一致
      data:{//传递的参数
        age:that.newVal
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })

  },
  /***
   * shujuku:云端数据库的名字
   * doc:删除的条件,此处默认是_id
   * remove:删除的方法
   */
  deleteData(){
    db.collection('shujuku').doc(this.newVal)
    .remove()
    .then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  /**
   * shujuku:数据库的名字
   * where:数据库的查询条件
   * get:查询方法
   */
  onLoad: function (options) {
    let that=this;
    //回调方法
    // db.collection('shujuku').where({
    //   _id: '05a1947c5dcbb60c0002b49c0f33296b'
    // }).get({
    //   success(res) {
    //     console.log(res);
    //     that.setData({
    //       dbFieldVal:res.data[0].name
    //     })
    //   }
    // })
    //promise
    db.collection('shujuku').where({
      _id:'05a1947c5dcbb60c0002b49c0f33296b'
    }).get().then(res=>{
      that.setData({
          dbFieldVal:res.data[0].name
        })
    }).catch(err=>{
      console.log(err);
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

  }
})