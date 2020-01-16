# Rect 概述
 官网:https://react.docschins.org
## 什么是react
  React是由FaceBook研发的,用于解决UI复杂度的开源JavaScript库,目前有React社区,联合维护
  > 它不是框架,只是为了解决UI复杂度而诞生的一个库
## React的特点
   - 轻量: React的开发版的所有源码,包含注释,仅3000行
   - 原生: 所有的React的代码都是用原生的JS书写而成,不依赖其它任何库
   - 易扩展: React对代码的封装程度很低,没有过多的使用魔法,所以React中很多功能可以扩展
   - 不依赖宿主环境:React只依赖原生的js,不依赖任何其他的东西,包括运行环境,所以它可以被轻松的移植到浏览器,
     桌面应用,移动端.
   - 渐进式:React并非框架,对整个工程没有强制约束力.这对那些已经存在的工程,可以逐渐的将其改造为React,而不需要全盘重写
   - 单向数据流: 所有的数据都是自顶而下流动
   - 用js代码声明界面
   - 组件化
对比vue
 |  对比项   |  Vue   | React |
 |  :-----:  | :---:  | :---: |
 | 全球使用量 |        |   √   |
 | 国内使用量 |   √    |       |
 |    性能    |   √    |   √   |
 |   易上手   |   √    |       |
 |   灵活度   |        |   √   |
 |   大型企业 |        |   √   |
 | 中小型企业 |        |   √   |
 |     生态   |        |   √   |


## 学习路径
整体原则:熟悉API -->深入理解原理
## react 文件引入
<!--React的核心库,与宿主环境无关-->
<script crossorigin src="https://unpkg.com/react@16.7.0/umd/react.development.js"></script>
<!--依赖核心库,将核心功能与页面功能结合-->
<script crossorigin src="https://unpkg.com/react-dom@16.7.0/umd/react-dom.development.js"> </script>
## react创建元素 React.createElement();
        //创建span元素
        //第一个参数:元素类型,如果字符串,一个普通的html
        //第二个参数,元素的属性,一个对象
        //后续参数 ,元素节点
        var span=React.createElement('span',{
            class:'header'
        },'我是span元素')
        //创建h1元素
        var h1=React.createElement('h1',{
            title:'第一个React元素'
        },'Hello Word',span);
## JSX
  js扩展语法,需要使用babel编译
  <!--编译JSX-->
  <!--编译JSX-->
  <script src="https://unpkg.com/babel-standalone@6/babel.js"></script>
  <script type="text/babel"> script的type是babel
      var  h1=<h1>第一个React元素 <span>我是一个span元素</span></h1>
      ReactDOM.render(h1,document.getElementById('root'))
  </script>
## 脚手架搭建工程
 官方:create react-app 工程名字
 第三方:next.js,umi.js
 安装脚手架
 yarn  create react-app 工程名字
 启动工程
 yarn start
 凡是使用jsx,都需要react包
## 插件配置
    1:emmet插件
## JSX
    本质是一个js对象,
    只能有一个根节点
    浏览器目前不支持,需要babel
    每一个jsx元素必须要有结束


## JSX潜入表达式
    - 在jsx中使用注释
    - 表达式作为内容的一部分
       const a=1234;
        const b=5678;
        const div=(
            <h1 key={i}>{i}
             {/*这是jsx里面的注释方法*/}
             {a} * {b}={a * b}
            </h1>
        )
      - null,undefined,false不会显示
      - 普通对象不能作为子元素
      - 可以放置react元素对象
      - 如果是数组,会把数组的每一元素作为子元素加进来
      - 不能给元素添加class=""的属性,应该是className=""
    - 将表达式作为元素属性
    - 属性使用小驼峰命名法
    - 防注入攻击
     - 自动编码
     - dangerousSetInnerHTML
     let dangeroue=(
         <div dangerouslySetInnerHTML={{
             __html:content
         }}>

         </div>
     )
    注释写法:{/*注释内容*/}
## 元素的不可改变性
 - 虽然jsx元素是一个对象,但是该对象中的输有属性都不可以更改
 - 如果确实需要更改元素的属性,需要重新创建JSX元素
# 组件和组件属性
   包含内容,样式和功能的UI单元
## 创建组件
    - 函数组件
      1:必须要返回一个React元素
      2:组件首字母必须大写
      3:本质上还是一个React元素,首字母大写是区分组件元素和普通React元素的区别
    - 类组件
      1:必须是一个React元素
      2:必须返回一个元素
      3:有一个render函数
      4:必须继承React.Component
    - 组件属性 组件的属性应该使用小驼峰命名法
        **组件无法改变组件的属性**
        **React中哲学:属性属于谁,谁才能修改**
        **React数据是自顶而下的流动的**
      1:函数组件,属性会作为一个对象,传递给组件
        - 传值
           <MyFuncComp numer={2}/>
        - 接收值
        export  default  function  MyFuncComp(prop) {
              return <h1>组件内容{prop.numer}</h1>
          }
      2:类组件,属性作为对象,传递给构造函数
        - 传值
          <MyClassComp numer='m1' />
        - 接收值 class组件绑定的属性,会自动传递给构造函数,构造函数会传递给super();可以直接this.props.numer调用使用
          export  default  class MyClassComp extends  React.Component{
              // constructor(props){
              //     super(props);
              //     console.log(props);
              // }
              render(){
                  return <h1>我是类组件{this.props.numer}</h1>
              }
          }
