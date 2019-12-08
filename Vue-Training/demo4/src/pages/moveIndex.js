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
    <loading :show="isShow"></loading>
    <MoveList
       :dataList="moves"
    ></MoveList>
    <Pager
     :current="current"
     :pageSize="pageSize"
     :total="total" 
     :panelNumber="panelNumber"
     @change="changePage($event)"
    ></Pager>
</div>
`
export  default  {
    template,
    data(){
        return {
            isShow:true,
            current: 1,
            pageSize: 2,
            total:0,
            panelNumber: 5 ,//显示的页码个数,
            moves:[]
        }
    },
    mounted(){
        this.setMoves();
    },
    methods:{
        setMoves(){
            const that=this;
            that.isShow=true;
            moveServices.getMovies(this.current,this.pageSize).then(function(res) {
                that.total = res.total;
                that.moves = res.datas;
                that.isShow = false;
            })
        },
        changePage(newPage){
            this.current=newPage;
            this.setMoves();
        }
    },
    components: {
        MoveList,
        Pager,
        loading
    }
}