
export default {
  state: {
    count:1
  },
  getters:{
    dbCount(state){
        return state.count*2;
    }
  },
  mutations: {
    changeCount(state,count){
      state.count+=count;
    }
  },
    actions:{
      changeCount({commit},count){
       setTimeout(()=>{
          commit('changeCount',count);
       },1000)
      }
    },
  modules: {
  }
}
