// pages/index/index.js
import { IndexModel } from '../../models/index'
const indexModel = new IndexModel();
import {random} from '../../unitl/randomStr'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList:[],
    markList:[],
    recommend:{},
    getMore:'',
    mazagineId:0,
    loading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadArticleList();
    // wx.showLoading();
  },
  loadArticleList(mazagineId) {
    //getRecommendInfo
    //   // 1:推荐
    //  indexModel.getRecommendInfo().then(res=>{
    //     console.log(res);
    //   })
    //   //2:标记列表
    //   indexModel.getMarkTypeList().then(res=>{
    //     console.log(res);
    //   })
    //   //3:文章列表
    //   indexModel.getArticleList().then((res) => {
    //     console.log(res);
    //   }).catch((err) => {

    //   });
    const getRecommendInfo = indexModel.getRecommendInfo(mazagineId);
    const getMarkType = indexModel.getMarkTypeList(mazagineId);
    const getArticleList = indexModel.getArticleList(mazagineId);
    Promise.all([getArticleList, getMarkType,getRecommendInfo]).then(res => {
      // wx.hideLoading();
      this.setData({
        articleList:res[0],
        markList:res[1],
        recommend:res[2]
      })
      this.hideLoading();
    });
  },
  hideLoading(){
    this.setData({
      loading:false
    })
  },
  toPage() {
    wx.navigateTo({
      url: '/pages/inside/inside?a=10'
    })
  },
  goCateLog(){
    wx.switchTab({
      url:"/pages/cateloglist/cateloglist"
    })
  },
  navTap(e){
   this.resetData();
   var index=e.detail.index;
   this.setMazagineId(index);
   this.scrollPageTop();
   this.loadArticleList(index);
  },
  resetData(){
    this.setData({
      articleList:[],
      markList:[],
      recommend:{}
    })
  },
  scrollPageTop(){
    wx.pageScrollTo({
      scrollTop:0,
      dutation:200
    })
  },
  setMazagineId(mazagineId){
    this.setData({
      mazagineId:mazagineId
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
   this.setData({
    getMore:this.data.getMore+random(20)
   })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})