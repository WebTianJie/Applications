// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navArr:['青芒','兴趣','物质','世界','新事','灵魂'],
    navCurrindex:0,
    activeId:'nav0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navTap(e){
      const lasetIndex=this.data.navCurrindex;
      const index=e.target.dataset.index;
      this.setData({
        navCurrindex:index,
        activeId:`nav${index == 0 ? 0 : index-1}`
      })
      if(lasetIndex==index){
        return;
      }
      this.triggerEvent('nav',{index:index},false);
    }
  }
})
