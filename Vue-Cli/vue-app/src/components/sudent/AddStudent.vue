<template>
  <div class="add-student">
    <div>添加学生：{{newPerson}}</div>
    <div>姓名：<input type="text" v-model="name" /></div>
    <div>年龄：<input type="text" v-model="age" /></div>
    <div><button @click="handleClick">添加</button></div>
    <hr />
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
export default {
  data () {
    return {
      name: '',
      age: null
    }
  },
  methods: {
    ...mapState(['changeStudentList']),
    handleClick () {
      const tempObj = {
        name: this.name,
        age: this.age,
        id: +new Date()
      }
       this.$store.state.studentList.push(tempObj);  //普通的修改方法,在严格模式下无效 state
       //this.$store.commit("changeStudentList",{tempObj,name:'重楼'});//严格模式下使用 ,mutations,不引入mapMutations时候使用, 不支持异步
      // this.changeStudentList({tempObj,name:'重楼'}); //mutations,引入mapMutations时候使用, 不支持异步
      // this.$store.dispatch('changeStudentList',{tempObj,name:'重楼'}); //actions 不引入maoState的时候使用
       //this.changeStudentList({tempObj,name:'重楼'});//actions 引入maoState的时候使用
    }
  },
  computed: {
    // mapState
    // ...mapGetters(['person'])
    ...mapGetters({
        newPerson:'person'
    })
  }
}
</script>


<style scoped>
div {
  margin-bottom: 15px;
}
</style>
