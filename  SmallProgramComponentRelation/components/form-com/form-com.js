// components/form-com/form-com.js
var  formBehaviors=require('./behavior.js');
Component({
  relations:{
    "formBehaviors":{
      type:"descendant",//关联节点是子孙节点
      target: formBehaviors,
      linked:function(target){
        console.log('form-linked',target);
      }
    }
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
