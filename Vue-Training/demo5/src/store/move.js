/**

 * author  Administrator 创建

 * date 2019-12-09 14:14

 */
import  moveServices from '../services/moveServices.js'
export  default {
    namespaced:true,
    state:{
        isLoading:true,
        current: 1,
        pageSize: 2,
        total:0,
        panelNumber: 5 ,//显示的页码个数,
        datas:[]
    },
    mutations:{
        setState(state,newState){
            for(let prop in newState){
                state[prop]=newState[prop];
            }
        }
    },
    actions:{
        fetch(context){
            context.commit('setState',{isLoading:true});
            moveServices.getMovies(context.state.current,context.state.pageSize).then(resp=>{
                context.commit('setState',resp);
                context.commit('setState',{isLoading:false});
            })
        }
    }
}