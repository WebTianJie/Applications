//创建behavior构造器
module.exports=Behavior({
  behavior:[],
  //属性:
  properties:{
    myBehaviorProperty:{
      type:String
    }
  },
  //数据data
  data:{
    myBehaviorData:{

    }
  },
  //声明周期
  //方法
  methods:{
    myBehaviorMethod:function(){
      console.log('from my behavior ');
    }
  }
})