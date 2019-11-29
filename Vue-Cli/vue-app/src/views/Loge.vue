<template>
  <div id="wrapper">
<!--    <input type="text"   v-model="form.name">-->
<!--    <input type="text"  v-model="form.passWord" show-password type="password" minlength=6 maxlength=12>-->
<!--    <button  @click="onSubmit">登录</button>-->
    <main>
      <div id="login-form">
        <h3>登录 Jin-chat</h3>
        <form ref="form" :model="form" :rules="rules">
          <div class="user">
            <label><i class="el-icon-user-solid icon"></i></label>
            <input  v-model="form.name" type="text"/>
          </div>
          <div class="pwd">
            <label><i class="el-icon-lock icon"></i></label>
            <input v-model="form.passWord" show-password type="password" minlength=6 maxlength=12 />
          </div>
          <button type="primary" round  @click="onSubmit">登录</button>
        </form>
        <p style="text-align: center;">还没有账号？立即<a style="color: #cccccc;" href="javascript:;"> 注册 </a></p>
      </div>
    </main>
  </div>
</template>

<script>
  // import SystemInformation from './LandingPage/SystemInformation'
  export default {
    name: 'landing-page',
    // components: { SystemInformation },
    created(){

      
    },
    data() {
      return {
        logining: false,  //设置登录按钮状态
        form: {
          name:'',
          passWord:'',
          type: [],
        },
        rules: {
                username: [{required: true, message: '请输入用户名', trigger: 'blur'}],   //登录时验证用户名密码是否为空
                password: [{required: true, message: '请输入密码', trigger: 'blur'}]
            }
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      onSubmit(){
      
      this.$axios.post('/login', {
         name: this.form.name,
          password: this.form.passWord,
     })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },
      // getinput(){
      //   // console.log('input获取焦点');
        
      // },
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
  }
  a {
    text-decoration : none
  }
  body { 
    font-family: 'Source Sans Pro', sans-serif; 
    /*background-image: url(../assets/img/body_bd.jpg);*/
    background-size: cover;
    background-repeat: no-repeat;
  }

  #wrapper {
    /* background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      ); */
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }
  #login-form{
    width: 400px;
    height: 500px;
    padding: 35px;
    color: #EEE;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -250px;
  }
  #login-form h3{
    text-align: center;
    font-size: 20px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #FFFFFF;
    height: 20px;
    line-height: 20px;
    padding: 0 0 35px 0;
  }
  .el-input__inner{
    width: 250px;
    background-color: transparent;
    border: none;
    margin-left: 50px;
    font-size: 20px;
    color:#fff;
  }
  .user,.pwd{
    
    height: 46px;
    padding: 0 5px;
    margin-bottom: 30px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  .icon{
    width: 25px;
    height: 25px;
    color: #aaa;
    position: absolute;
    margin: 6px 17px;
    font-size: 30px;
  }
  .el-button.is-round{
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    border-radius: 50px;
    background: #0096e6;
    width: 100%;
    border: none;
    margin-bottom: 20px;
  }
</style>
