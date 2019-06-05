<template>
    <div>
        <span class="name">省份选择:</span>
        <m-select title="省份"    :value="province" :province="provinceList" :showSelectActive="provinceActive" @change_active="changeProvinceActive" @change="changeProvine" />
        <span class="name">城市选择:</span>
        <m-select title="城市" :className='mcity' :disabled="cityDisable" :value="city" :province="cityList"  :showSelectActive="cityActive" @change_active="changeCityActive" @change="changeCity" />
        <span>直接搜索:
        <el-select
                v-model="searchword"
                filterable
                remote
                reserve-keyword
                :remote-method="remoteMethod"
                :loading="loading" 
                placeholder="请输入关键词">
                <el-option
                v-for="item in searchList"
                :key="item.value"
                :label="item.label"
                :value="item">
                </el-option>
        </el-select>
        </span>
    </div>
</template>

<script>
    import MSelect from '@/components/changeCity/select'
    import api from '@/Api/index.js'
    export default {
        data() {
          return {
                  province:'省份',
                  provinceList:['山东','甘肃','安徽','北京','云南','海南'],
                  provinceActive:false,
                  city:'城市',
                  cityList:['德州','济南','蓬莱','青岛','临沂','烟台'],
                  cityActive:false,
                  searchList:['德州','济南','蓬莱','青岛','临沂','烟台','山东','山西'],
                  searchword:'',
                  loading:false,
                  cityDisable:true,
                  mcity:'mcity',
              }
        },
        components:{
            MSelect
        },
        created() {
            api.getProvinceList().then(res=>{
                this.provinceList=res.data.data.map(item=>{
                    item.name=item.provinceName;
                    return item;
                });
            })
        },
        methods:{
            changeProvinceActive(flag) {
                this.provinceActive= flag;
                if(flag){
                    this.cityActive= false;
                }
            },
            changeCityActive(flag) {
                this.cityActive= flag;
                if(flag){
                    this.provinceActive= false;
                }
            },
            remoteMethod () {

            },
            changeCity(value){
               this.city=value.name;
               this.$store.dispatch('setPosition',value);
               this.$router.push({name:'index'})
            },
            changeProvine(value){
                this.cityDisable=false;
                 this.province=value.name;
                 this.cityList=value.cityInfoList;
            }
        }
    }
</script>

<style lang="scss">
     @import '@/assets/css/changecity/iselect.scss'
</style>