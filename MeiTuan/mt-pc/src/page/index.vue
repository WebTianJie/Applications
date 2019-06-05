<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu/>
      </el-col>
      <el-col :span="19">
        <m-life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="isStyle"></m-container>
      </el-col>
    </el-row>
     <el-row>
      <el-col :span="24">
        <m-container :nav="discount"></m-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu";
import MLife from "@/components/index/life";
import MContainer from "@/components/index/container";
export default {
  data() {
    return {
      isStyle: {
        class:"isstyle",
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "span"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      },
      discount:{
          class:'discount',
          title:'很优惠',
          list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "xiuxian"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    MLife,
    MContainer
  },
  created(){
    console.log(this.$store.state.userName);
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>