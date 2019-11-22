// components/tag-name/tag-name.js
var  myBehaviors=require("my-behavior");
//1:和组件包含同名的属性(property),同名方法(method):组件自身覆盖属性和方法,覆盖behavior的属性和方法
//和其它的behavior包含相同的属性和方法,定义在数字里面靠后的behavior覆盖前面的behavior的属性和方法
//2:同名的是数据(data)的字段,数据类型(数组,json...)是合并,非数据类型(sting,int...)是覆盖
Component({
  behaviors:[myBehaviors],
  /**
   * 组件的属性列表
   */
  properties: {
    myProperty:String
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
