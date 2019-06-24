// components/subscribe/cmp.js
import { MyTagsListModel } from '../../models/mytagslist'
const tagsListModel = new MyTagsListModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number,
    type:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    class: "common"
  },
  attached() {
    this.loadTagsList();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      this.setStorage();
      this.toggleClass();
      this.triggerEvent('tap');
    },
    loadTagsList() {
      const tagId = this.properties.tagId;
      let isMyTag = false;
      isMyTag = tagsListModel.loadMyTagList(tagId);
      if (isMyTag) {
        this.setData({
          class: 'subscribe'
        })
      }
    },
    setStorage() {
      const tag = {
        tag: this.properties.tag,
        tagId: this.properties.tagId,
        type: this.properties.type
      }
      let mytagslist = tagsListModel.getTagsList();
      if (this.data.class == "common") {
        mytagslist.unshift(tag);
        tagsListModel.setTagsList(mytagslist);
      } else {
        tagsListModel.removeTagsList(tag.tagId);
      }
    },
    toggleClass() {
      let className = '';
      if (this.data.class == 'common') {
        className = "subscribe";
      } else {
        className = "common";
      }
      this.setData({
        class: className
      })
    }
  }
})
