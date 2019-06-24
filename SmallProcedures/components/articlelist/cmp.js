// components/articlelist/cmp.js
import { IndexModel } from '../../models/index'
const indexModel = new IndexModel();
import { SearchModel } from '../../models/search'
const searchModel = new SearchModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value: [],
      observer() {//监听属性的变化
        // console.log('我是articlelist我发生了改变');
      }
    },
    getMore: {
      type: String,
      value: '',
      observer: 'loadMore'
    },
    mazagineId: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    },
    searchWord: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    type: ''
  },
  attached() {
    const pages = getCurrentPages();
    const length = pages.length - 1;
    const pageType = pages[length].route;
    let type = '';
    if (pageType == 'pages/search/search') {
      type = "search";
    } else {
      type = "index"
    }
    this.setData({
      type: type
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    hasMoreData() {
      this.setData({
        noMoreData: false
      })
    },
    loadMore() {
      if (this._isLock() || this.data.noMoreData) {
        return;
      }
      this._onLock();
      this._getMoreArticleList();
    },
    _isLock() {
      return this.data.loading;
    },
    _onLock() {
      this.setData({
        loading: true
      })
    },
    _unLock() {
      this.setData({
        loading: false
      })
    },
    getArticleList(mazagineId, start) {
      indexModel.getArticleList(mazagineId, start).then(res => {
        const combArr = this.data.articleList.concat(res);
        if (combArr.length == this.data.articleList.length) {
          this.setData({
            noMoreData: true
          })
        }
        this.setData({
          articleList: combArr
        })
        this._unLock();
      });
    },
    getSearchArticleList(start) {
      const searchWord = this.data.searchWord;
      let articleList = this.data.articleList;
      searchModel.getSearchArticleList(searchWord,start).then(res => {
        articleList.push(res.data.data);
        this.setData({
          articleList: articleList
        })
        this._unLock();
      })
    },
    _getMoreArticleList() {
      const mazagineId = this.data.mazagineId;
      const start = this.data.articleList.length;
      const type = this.data.type;
      if (type == "index") {
        this.getSearchArticleList(start);
      } else {
        this.getArticleList(mazagineId, start);
      }

    }
  }
})
