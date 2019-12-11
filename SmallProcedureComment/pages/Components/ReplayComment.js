// pages/Components/ReplayComment.js
const app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    replyList:{
        type:Array,
        value:[]
      }
  },
  /**
   * 组件的初始数据
   */
  data:{
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addFabulousReplay(e){
        var  param={
       isClicked : e.currentTarget.dataset.isclicked,
       count : parseInt(e.currentTarget.dataset.fabulous),
       id : parseInt(e.currentTarget.dataset.id)
    }
    this.triggerEvent('addFabulousReplay',param);
    
    }
  }
})
