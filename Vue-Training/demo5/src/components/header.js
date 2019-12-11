/**

 * author  Administrator 创建

 * date 2019-12-09 09:34

 */
const template=` 
    <nav>
        <div class="left">
            <router-link to="/">首页</router-link>
            <router-link to="/moveIndex">电影页</router-link>
        </div>
        <div class="right"  v-if="loginUser">
            <span>当前用户{{loginUser.name}}</span>
            <button @click="handleLoginOut">退出登录</button>
        </div>
    </nav>
`
export default {
  template,
  computed:{
    loginUser(){
      return this.$store.state.loginUser.data;
    }
  },
  methods:{
    handleLoginOut(){
        this.$store.dispatch('loginUser/loginOut');
        this.$router.push('/login');
    }
  }
}