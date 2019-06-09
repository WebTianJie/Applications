// components/bigimage/cmp.js
import {myBeh} from "../behaviors/my-behavior.js"
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[myBeh],
  properties: {
    // 简写
    // imgSrc:{type:String},
    // mainTitle:{type:String},
    // imgSrc: {
    //   type: String,
    //   value: 'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
    //   observer: function (oldValue,newValue,changePath) {

    //   }
    // },
    // mainTitle: {
    //   type: String,
    //   value: '时候is地偶联剂看电视里看风景的洛杉矶发了多少经费落实到',
    //   observer: function (oldValue,newValue,changePath) {

    //   }
    // },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // src:'',
    // title:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
