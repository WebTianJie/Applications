// pages/search/search.js
import { SearchModel } from '../../models/search'
import {random} from '../../unitl/randomStr'
const searchModel = new SearchModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    articleList: [],
    reommend: {},
    tag:'',
    getMore:'',
    laoding:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load');
    const keyWords = options.searchWords;
    this.loadData(keyWords);
    this.loadArticleList(keyWords, 0);
  },
  loadData(keyWords) {
    this.setData({
      value: keyWords
    });
  },
  loadArticleList(keyWords) {
    const articlelist = searchModel.getSearchArticleList(keyWords,0);
    const recommend = searchModel.getSearchRecommend(keyWords);
    Promise.all([recommend, articlelist]).then(res => {
      this.setData({
        recommend: res[0].recommend,
        tag:res[0].tag,
        articleList:res[1]
      })
      this.setData({
        laoding:false
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
console.log('ready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show');
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
    // this.setData({
    //   getMore:this.data.getMore+random(20)
    //  })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})