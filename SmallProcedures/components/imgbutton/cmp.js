// components/imgbutton/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    openType:String,
    imgSrc:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo(e){
      this.triggerEvent('getuserinfo',e.detail,false);
    }
  }
})
