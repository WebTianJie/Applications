<template>
    <div class="categroy">
        <dl class="m-categroy">
            <dt>按拼音首字母搜索 : </dt>
            <dd v-for="(item,index) in list" :key="index">
                <a :href="'#city_'+item">{{item}}</a>
            </dd>
        </dl>
        <dl v-for="(item,index) in cityList" :key="index" :id="'city_'+index.toUpperCase()"  class="m-categroy-section">
            <dt>{{index.toUpperCase()}}</dt>
            <dd ><span v-for="city in item" @click="changeCity(city)" :key="city.id">{{city.name}}</span></dd>
        </dl>
    </div>
</template>

<script>
    import api from '@/Api/index.js'
    export default {
        data() {
            return {
                list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
                cityList: {},
            }
        },
        methods:{
            changeCity(item) {
                this.$store.dispatch('setPosition',item);
                this.$router.push({name:'index'})
            }
        },
        created(){
            api.getCityList().then(res=>{
            var obj={};
                res.data.data.forEach((item,index)=>{
                    if(!obj[item.firstChar]){
                        obj[item.firstChar]=[];
                    }
                    obj[item.firstChar].push(item);

                })
              this.cityList=obj;
              console.log(obj);
            })

        }
    }
</script>

<style lang="scss" >
    @import '@/assets/css/changecity/categroy.scss'
</style>