// components/com/com.js
var myBehvaior = require('my-beheavior');
Component({
  behaviors: [myBehvaior],
  //生命周期
  created(){
    console.log('com created');
  },
  attached(){
    console.log('com attached');
  },
  detached(){
    console.log('com detached');
  },
  lifetimes:{
    created() {
      console.log('com created');
    },
    attached() {
      console.log('com attached');
    },
    detached() {
      console.log('com detached');
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
