// components/user/user.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     name:String, //string,number,boolean,object,array
     age:{
       type:Number,
       value:'16',
       observer(newVal,odlVal){
          //属性值改变的时候,可以检测到
          console.log(newVal);
          console.log(odlVal);
         this._propertyChange(newVal, odlVal);
       }
     }
  },
  /***
   * 生命周期
   */
  lefttimes(){

  },
  /**
   * 组件的初始数据
   */
  data: {
      con:'学习'
  },
  /**
   * 组件的方法列表,在组件里面不要使用箭头函数,会影响到this指向
   */
  methods: {
    myButton() {
        this.setData({
          age:22
        })
    },
    /***
     * 带下划线的是组件的私有方法
     */
    _privateMethod(){
        //设置,天魂
        this.replaceDataOnPath(['name'],'替换为新文本');
        this.applyDataUpdates();
    },
    /***
     * 属性变动侦测
     *
     */
    _propertyChange(newVal,oldVal){
      console.log("__propertyChange_newval",newVal);
      console.log("__propertyChange_oldval", oldVal);
    }
  }
})
