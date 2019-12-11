import loginService from "../services/loginService.js";

export  default {
    namespaced:true,
    state: {
            data: null,
            isLoading: false
    },
    mutations: {//配置状态有些哪些变化,每一个变化是一个函数
        setIsLoading(state, payload) {//改变是否正在登录的状态
            //state当前状态
            //payload:可选的,改参数标识额外信息
            state.isLoading = payload;
        },
        setUser(state, userObj) {
            state.data = userObj;
        }
    },
    actions: {//配置副作用操作,每一个action是一个函数
        async login(context, payload) {//需要传入账号和密码{loginId:xxx,loginPwd:xxx}
            context.commit("setIsLoading", true);
            loginService.login(payload.loginId, payload.loginPwd).then(resp => {
                if (resp) {
                    context.commit("setUser", resp);
                    localStorage.setItem('loginUser', JSON.stringify(resp));
                    return true;
                } else {

                }
                context.commit("setIsLoading", false);
                return false;
            })
        },
        loginOut(context) {
            context.commit("setUser", null);
            localStorage.removeItem('loginUser');
        },
        syncLocal(context) {
            //初始化的Sioux,同步本地存储
            const local = localStorage.getItem('loginUser');
            if (local) {
                const user = JSON.parse(local);
                context.commit('setUser', user);
            }
        }
    }
}