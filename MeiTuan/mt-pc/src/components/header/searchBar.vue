<template>
  <div class="search-panel">
     <el-row class="m-header-searchbar">
       <div class="center">
         <el-col :span="3" class="left"><img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt=""></el-col>
          <el-col :span="10"  class="right">
            <div class="wrapper">
                <el-input v-model="keyword" @focus="focus" @blur="blur" placeholder="请输入内容"></el-input>
                <el-button type="primary" icon="el-icon-search" ></el-button>
                <dl class="hotPlace" v-if="isHotPlace">
                  <dt>热门索索</dt>
                 <dd v-for="(item, index) in hotPlaceList" :key="item + '_'+ index">
                            <router-link  :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                </dl>
                <dl class="searchList" v-if="isSearchList">
                  <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                </dl>
            </div>
            <p class="suggest">
               <router-link v-for="(item, index) in suggestList" :key="item + '~' + index" :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </p>
        </el-col>
       </div>
     </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: '',
      isFocus: false,
      hotPlaceList: ['温泉度假村', '99旅馆连锁', '尚客快捷酒店', '7天连锁酒店'],
      searchList: ['火锅', '重庆', '小火锅', '老北京火锅', '营养火锅'],
      suggestList: ['温泉度假村', '99旅馆连锁', '尚客快捷酒店', '7天连锁酒店'],
    };
  },
  computed: {
    isHotPlace() {
            return !this.keyword && this.isFocus;
        },
    isSearchList() {
        return this.keyword && this.isFocus;
    }
  },
  methods: {
    focus() {
        this.isFocus = true;
    },
    blur() {
        var self = this;
        setTimeout(function() {
            self.isFocus = false;
        }, 200)
    },
  },
};
</script>

