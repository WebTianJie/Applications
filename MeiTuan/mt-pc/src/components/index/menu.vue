<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div v-if="currentDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item ,index) in currentDetail.items"  >
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="(subItem,sIndex) in item.items"  :key="subItem" >{{subItem}}</span>
            </template>
        </div>
    </div>
</template>

<script>
import api from '@/Api/index'
    export default {
        data() {
            return {
                currentDetail: null,
                menuList:[],
            }
        },
        created() {
            api.getMenuList().then(res=>{
                this.menuList=res.data.data;
            })
        },
        methods:{
            menuEnter(item){
                this.currentDetail=item;
            },
            menuLeave(){
                var self= this;
                this.timer=setTimeout(()=> {
                    self.currentDetail= null;
                },200)

            },
            detailEnter(){
                clearTimeout(this.timer);
            },
            detailLeave(){
                this.currentDetail=null;
            }
        }
    }

</script>

<style lang="scss" scoped>
   
</style>