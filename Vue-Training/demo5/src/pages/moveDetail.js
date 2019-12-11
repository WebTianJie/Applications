/**

 * author  Administrator 创建

 * date 2019-12-09 10:07

 */


import  Move  from '../components/move.js'
import moveServices from "../services/moveServices.js";
import Loading from '../components/loading.js'
const template=`
 <div class="data-container">
    <Loading :show="isShow"></Loading>
    <Move v-if="MoveData" :move="MoveData"></Move>
</div>
`

export  default{
    template,
    data(){
        return {
            MoveData:null,
            isShow:false
        }
    },
    components: {
        Move,
        Loading
    },
    mounted(){
        this.isShow=true;
        moveServices.getMovie(this.$route.params.id).then((res)=>{
            this.MoveData=res;
            this.isShow=false;
        })
    }
}