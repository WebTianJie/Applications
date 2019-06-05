<template>
  <div :class="['choose-wrap',disabled ? 'disabled':'']" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}:</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showSelectActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(s,n) in provinceList" :key="n">
            <span
              v-for="(item,index) in s"
              :key="index"
              :class="{'mt-item':true,active:item.name==value}"
              @click="changeValue(item)"
            >{{item.name}}</span>
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
    };
  },
  props: ["title", "province", "value", "showSelectActive","disabled","className"],
  computed: {
    provinceList() {
      let col = Math.ceil(this.province.length / 12);
      let resultList = [];
      for (var i = 0; i < col; i++) {
        var data = this.province.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    }
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      // this.isShowWrapper=true;
      if(!this.disabled){
        this.$emit("change_active", true);
      }
    },
    documentClick() {
      this.$emit("change_active", false);
    },
    changeValue(value) {
      this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/changecity/select.scss";
</style>