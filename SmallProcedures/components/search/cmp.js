// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:String
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
       onSearch(e){
         const keyWords=e.detail.value||this.data.value;
        if(keyWords===''){
          return;
        }else{
          wx.navigateTo({
            url:`/pages/search/search?searchWords=${keyWords}`
          })
        }
      },
      onBlur(e){
          const value=e.detail.value;
          this.setData({
            value:value
          })
      }
  }
})
