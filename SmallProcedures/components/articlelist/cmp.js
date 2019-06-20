// components/articlelist/cmp.js
import { IndexModel } from '../../models/index'
const indexModel = new IndexModel();
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
      type:Number,
      value:0,
      observer:'hasMoreData'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hasMoreData(){
      console.log('once');
      this.setData({
        noMoreData:false
      })
    },
    loadMore() {
      if (this._isLock()||this.data.noMoreData) {
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
    _getMoreArticleList() {
      const mazagineId = this.data.mazagineId;
      console.log(mazagineId);
      const start = this.data.articleList.length;
      indexModel.getArticleList(mazagineId, start).then(res => {
        const combArr = this.data.articleList.concat(res);
        if(combArr.length==this.data.articleList.length){
          this.setData({
            noMoreData:true
          })
        }
        this.setData({
          articleList: combArr
        })
        this._unLock();
      });
    }
  }
})
