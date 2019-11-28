<template>
    <div>
<!--        <Calendar></Calendar>-->
<!--        <DatePicker></DatePicker>-->
        <tree :treeData="treeData"></tree>
    </div>
</template>

<script>
     // import Calendar from "./Components/Calendar";
    //import DatePicker from "./Components/DatePicker";
    //import tree from './Components/vue-tree'
     import tree from './Components/Tree'
    export default {
        name: "app",
        data(){
            return {
                msg:'welcome come to vue world !!!',
                treeData:  [
                    {
                        name: '一级 1',
                        children: [
                            {
                                name: '二级 1-1',
                                children: [
                                    {
                                        name: '三级 1-1-1',
                                        children: [
                                            {
                                                name: '四级 1-1-1-1'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '一级 2',
                        children: [
                            {
                                name: '二级 2-1',
                                children: [
                                    {
                                        name: '三级 2-1-1'
                                    }
                                ]
                            },{
                                name: '二级 2-2',
                                children: [
                                    {
                                        name: '三级 2-2-1',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '一级 3',
                        children: [
                            {
                                name: '二级 3-1',
                                children: [
                                    {
                                        name: '三级 3-1-1'
                                    }
                                ]
                            },
                            {
                                name: '二级 3-2',
                                children: [
                                    {
                                        name: '三级 3-1-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }

        },
        components:{
            tree
        }
    }
</script>

<style scoped>

</style>