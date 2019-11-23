// components/form-com/submit.js
var formBehaviors = require('./behavior.js');
Component({
  behaviors: [formBehaviors],
  relations: {
    "./form-com": {
      type: "ancestor",//关联的目标节点为子孙节点
      target: formBehaviors,
      linked: function (target) {
        console.log('submit linked', target);
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
