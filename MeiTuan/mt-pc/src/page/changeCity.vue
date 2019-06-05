<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot-city title="热门城市 : " :hotlist="hotList"/>
    </el-row>
    <el-row>
      <hot-city title="最近搜索 : " :hotlist="lastsearch"/>
    </el-row>
    <el-row>
      <category/>
    </el-row>
  </div>
</template>

<script>
import api from "@/Api/index";
import Province from "@/components/changeCity/province";
import HotCity from "@/components/changeCity/hot";
import Category from "@/components/changeCity/category";
export default {
  data() {
    return {
      hotList: [],
      lastsearch: []
    };
  },
  components: {
    Province,
    HotCity,
    Category
  },
created() {
    api.getHotCity().then(res=>{
        this.hotList=res.data.data;
    })
    api.getRecents().then(res=>{
        this.lastsearch=res.data.data;
    })
}
};
</script>

<style lang="scss" scoped>
</style>