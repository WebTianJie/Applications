<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :class="{'s-nav-active':item.active}" :key="item.key">{{item.name}}</li>
    </ul>
    <div class="el-row">
        <item  v-for="(item,index) in productsList" :key="index"  :meta="item" />
    </div>
  </div>
</template>

<script>
import api from '@/Api/index'
import Item from "@/components/products/item.vue";
export default {
  components: {Item,},
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productsList: [
        {
          image: "https://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@220w_125h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃"
            }
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元"
            }
          ]
        }
      ]
    };
  },
  created() {
    api.getGoodsList().then(res=>{
      this.productsList=res.data.data;
    })
  }
};
</script>

<style lang="scss" scoped>
</style>