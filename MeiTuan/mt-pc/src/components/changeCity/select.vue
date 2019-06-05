<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}:</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showSelectActive}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col">
            <span v-for="(item,index) in province" :key="index" :class="{'mt-item':true,active:item==value}" @click="changeValue(item)">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // isShowWrapper:false
        }
    },
    props:[
        'title',
        'province',
        'value',
        'showSelectActive',
    ],
    methods:{
        showWrapper(e){
            e.stopPropagation();
            // this.isShowWrapper=true;
            this.$emit('change_active',true);
        },
        documentClick(){
              this.$emit('change_active',false);
        },
        changeValue(value){
             this.$emit('change',value);
        }
    }
};
</script>

<style lang="scss" >
@import "@/assets/css/changecity/select.scss";
</style>