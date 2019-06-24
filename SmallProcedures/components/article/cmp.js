// components/article/cmp.js
import {LikeModel} from '../../models/likelist'
const likeModel=new LikeModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },
  attached() {
    // const likeList = wx.getStorageSync('likeList') || [];
    const likeList = likeModel.getLikeList();
    const likeObj = this.properties.articleDetail;
    const artId = likeObj.artId;
    let  likeStatus=likeModel.loadLikeList(artId);
    // likeList.forEach((ele, index) => {
    //   if (artId == ele.artId) {
    //     likeStatus=true;
    //   }
    // });
    this.setData({
      likeStatus:likeStatus
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    addLikeList(e) {
      const isLike = e.detail;
      // const likeList = wx.getStorageSync('likeList') || [];
      const likeList=likeModel.getLikeList();
      const likeObj = this.properties.articleDetail;
      const artId = likeObj.artId;
      if (isLike) {
        // likeList.unshift(likeObj);
        likeModel.addLikeList(likeObj);
        // wx.setStorageSync('likeList', likeList);
        // likeModel.setLikeList(likeList);
      } else {
        // let artIndex = 0;
        // likeList.forEach((ele, index) => {
        //   if (artId == ele.artId) {
        //     artIndex = index;
        //   }
        // });
        // likeList.splice(artIndex, 1);
        // wx.setStorageSync('likeList', likeList);
        likeModel.removeLikeList(artId);
      }
    }
  }
})
