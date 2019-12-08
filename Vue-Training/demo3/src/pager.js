/**

 * author  Administrator 创建

 * date 2019-12-06 15:52

 */

const template=`
 <div  id="pager" class="pager">
    <a @click="changePage(1)" class="pager-item" :class="{disabled:current==1}">首页</a> 
    <a @click="changePage(current-1)" class="pager-item" :class="{disabled:current==1}">上一页</a>
    <a @click="changePage(item)" v-for="item in numbers" class="pager-item" :class="{active:current==item}">{{item}}</a>
    <a @click="changePage(current+1)" class="pager-item" :class="{disabled:current==pageNumber}">下一页</a> 
    <a @click="changePage(pageNumber)" class="pager-item" :class="{disabled:current==pageNumber}">尾页</a>
    <span class="pager-text">
        <i>{{current}} / </i>
        <i>{{pageNumber}}</i>
    </span>
</div>
`

export  default {
    template,
    // data() {//只能在组件内部使用,元在网上外部不可以使用
    //     return {
    //         // current: 1,
    //         // pageSize: 10,
    //         // total: 120,
    //         // panelNumber: 5 //显示的页码个数
    //     }
    // },
    props:{
      current:{
          type:Number,
          require:true,
          default:1
      },
      pageSize:{
            type:Number,
            require:true,
            default:10
      },
      total:{
            type:Number,
            require:true,
            default:100
      },
      panelNumber:{
            type:Number,
            require:true,
            default:5
      }
    },
    computed: {
        pageNumber() {
            return Math.ceil(this.total / this.pageSize)
        },
        numbers() {//得到一个页码的数组
            let min = this.current - Math.floor(this.panelNumber / 2);
            if (min < 1) {
                min = 1;
            }
            let max = min + this.panelNumber - 1;
            if (max > this.pageNumber) {
                max = this.pageNumber;
            }
            let arr = [];
            for (var i = min; i <= max; i++) {
                arr.push(i);
            }
            return arr;
            }
    },
    methods: {
        changePage(newNumber) {
            if (newNumber < 1) {
                newNumber = 1;
            } else if (newNumber > this.pageNumber) {
                newNumber = this.pageNumber
            }
            // this.current = newNumber;
            this.$emit('change',newNumber)
        }
    }
}