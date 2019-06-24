// pages/cateloglist/cateloglist.js
import { tagInfoList } from '../../unitl/tagList'
import { MyTagsListModel } from '../../models/mytagslist'
const tagModel = new MyTagsListModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList: tagInfoList,
    myTagList: [],
    keywords:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  loadData() {
    const myTagList = tagModel.getTagsList();
    this.setData({
      myTagList: myTagList
    });
  },
  setMyTagsList(){
    this.loadData();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      this.setData({
        keywords:''
      })
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