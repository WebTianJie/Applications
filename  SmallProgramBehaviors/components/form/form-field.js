// components/form/form-field.js
Component({
  behaviors:['wx://form-field'],
  //声明周期
  attached(){
    //实例化节点树运行
    this.setData({
      value:'form-value'
    })
  },
  /**
   * 组件的属性列表
   */
  properties: {

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

  }
})
