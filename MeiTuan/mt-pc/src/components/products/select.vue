<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>
        {{title}}
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
          <dt class="nav-title">{{title}}</dt>
          <span v-for="(item,index) in list" :key="index">{{item.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: [
        'title',
        'list',
    ],
};
</script>

<style lang="scss" scoped>
</style>