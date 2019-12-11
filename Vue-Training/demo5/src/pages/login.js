import Loading from '../components/loading.js'
const template = `
<div>
    <Loading :isLoading="isLoading">登陆中...</Loading>
    <div class="center">
        <p>
            <label>账号：</label>
            <input type="text" v-model="loginId"/>
        </p>
        <p>
            <label>密码：</label>
            <input type="password" v-model="loginPwd"/>
        </p>
        <p>
            <button @click="login">登录</button>
        </p>
    </div>
</div>

`;

export default {
    template,
    data() {
        return {
            loginId: "",
            loginPwd: ""
        }
    },
    components:{
      Loading
    },
    // computed:Vuex.mapState({
    //     isLoading: state.loginUser.isLoading
    // }),
    computed:{
      isLoading(){
          return this.$store.state.loginUser.isLoading
      }
    },
    methods: {
        async login() {
            const result =  this.$store.dispatch("loginUser/login", {
                loginId: this.loginId,
                loginPwd: this.loginPwd
            })
            if (result) {
                this.$router.push("/");
            }
            else{
                window.alert("账号密码错误");
            }
        }
    }
}