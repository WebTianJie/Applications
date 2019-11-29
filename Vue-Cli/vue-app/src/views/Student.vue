<template>
    <div class="student">
      <AddStudent></AddStudent>
      <StudentList></StudentList>
    </div>
</template>

<script>
    import AddStudent from "../components/sudent/AddStudent";
    import StudentList from "../components/sudent/StudentList";
    export default {
        name: "Student",
        components:{
            AddStudent,
            StudentList
        }
    }
</script>

<style scoped>

</style>