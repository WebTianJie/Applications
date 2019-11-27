<template>
    <div>
<!--        <Calendar></Calendar>-->
        <DatePicker></DatePicker>
    </div>
</template>

<script>
     // import Calendar from "./Components/Calendar";
    import DatePicker from "./Components/DatePicker";
    export default {
        name: "app",
        data(){
            return {
                msg:'welcome come to vue world !!!'
            }
        },
        components:{
            DatePicker
        }
    }
</script>

<style scoped>

</style>