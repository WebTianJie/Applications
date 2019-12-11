/**

 * author  Administrator 创建

 * date 2019-12-06 15:48

 */
import MoveList from "../components/moveList.js";
import Pager from "../components/pager.js";
// import allMoves from './mockDatas.js';
import moveServices from "../services/moveServices.js";
import loading from '../components/loading.js'
const  template=`
<div>
<button @click="handleClick">返回首页</button>
    <loading :isLoading="isLoading"></loading>
    <MoveList
       :dataList="datas"
    ></MoveList>
<!--    <Pager-->
<!--     :value="current"-->
<!--     :pageSize="pageSize"-->
<!--     :total="total" -->
<!--     :panelNumber="panelNumber"-->
<!--     @input="changePage($event)"-->
<!--    ></Pager>-->
    <Pager
     v-model="current"
     :pageSize="pageSize"
     :total="total" 
     :panelNumber="panelNumber"

    ></Pager>
</div>
`
export  default  {
    template,
    data(){
        return {
             //isShow:true,
            // current: 1,
            // pageSize: 2,
            // total:0,
            //panelNumber: 5 ,//显示的页码个数,
            // moves:[]
        }
    },
    mounted(){
        // this.setMoves();
        this.$store.dispatch("move/fetch");
    },
    // computed:Vuex.mapState('move',['current','isLoading','panelNumber','pageSize','datas','total']),
    computed:{
        ...Vuex.mapState('move',['isLoading','panelNumber','pageSize','datas','total']),
        current:{
            set(newPage){
                this.$store.commit('move/setState',{current:newPage});
                this.$store.dispatch('move/fetch')

            },
            get(){
              return  this.$store.state.move.current;
            }
        }
    },
    methods:{
        // changePage(newPage){
        //     this.$store.commit('move/setState',{current:newPage});
        //     this.$store.dispatch('move/fetch')
        // },
        handleClick(){
            this.$router.push('/');
        }
    },
    components: {
        MoveList,
        Pager,
        loading
    }
}