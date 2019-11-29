import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    name:'天劫天罪',
    age:15,
    studentList:[]
  },
  getters:{
    person(state){
      return '姓名:'+state.name+'年龄:'+state.age;
    },
    newStudentList(state){
      return state.studentList.map(student=>'姓名||:'+student.name+'年龄||:'+student.age);
    }
  },
  mutations: {
    changeStudentList(state,{tempObj,name}){
      state.studentList.push(tempObj);
      state.name=name;
    }
  },
  actions: {
    changeStudentList({commit},payload){
     setTimeout(()=>{
       commit('changeStudentList',payload);
     },1000)
    }
  },
  modules: {
  }
})
