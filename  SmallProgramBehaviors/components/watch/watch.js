// components/watch/watch.js
Component({
  //声明周期函数
  attached(){
    let arr = [110,120,130,140];
    console.log(arr);
    this.setData({
      num1:100,
      num2:200,
      "student.name":'北冥',
      newname:'',
      "student.age":100,
      studentAge:arr
    })
  },
  /***
   * 监听器
   */
  observers:{
    'num1,num2':function(num1,num2){//num1,num2和传入的形参对应,如果只有一个参数,实参就是num1
      this.setData({//此处不要设置监听的属性,不然的话会陷入死循环
        sum:num1+num2
      })
    },
    // "student.name":function(myname){
    //     this.setData({
    //       newname: 'welcome to '+myname
    //     })
    // },
    "student.**": function (prop) {
      console.log(prop);
    },
    // "studentAge[0]":function(age){
    //     console.log('修改了:'+age);
    // },
    "studentAge.**": function (item) {
      console.log(item);
    },
    "**":function(allPop){//每次setData都会触发,就算是修改的值还是原来的值
      console.log("全局的监听",allPop);
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
      num1:10,
      num2:20,
      sum:30,
      student:{
        name:'tom',
        age:20
      },
      studentAge:[10,2,23]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
