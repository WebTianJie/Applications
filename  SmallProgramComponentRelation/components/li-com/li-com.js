// components/li-com/li-com.js
Component({
  relations:{
    "/components/ul-com/ul-com":{
      type:"parent",//关联目标点关系为父节点
      //生命周期执行点
      linked:function(target){//每次被插入到ul-com的时候执行,target是ul-com节点的实例对象,触发在整个组件的attached生命周期之后
          console.log('chiild linked to'+target);
      },
      linkchanged:function(target){
        //每次被移动后执行,出发点在moved生命周期后
      },
      unLinked(target){
          //每次被移除时执行,触发点在detached之后
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    livalue:{
      type:String
    }
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
