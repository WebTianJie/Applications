/**

 * author  Administrator 创建

 * date 2019-12-06 15:48

 */
import MoveList from "./moveList.js";
import Pager from "./pager.js";
import allMoves from './mockDatas.js'
const  template=`
<div>
    <MoveList
       :dataList="dataList"
    ></MoveList>
    <Pager
     :current="current"
     :pageSize="pageSize"
     :total="total" 
     :panelNumber="panelNumber"
     @change="current=$event"
    ></Pager>
</div>
`

export  default  {
    template,
    data(){
         return {
             current: 1,
             pageSize: 2,
             total: allMoves.length,
             panelNumber: 5 ,//显示的页码个数,
             allMoves:allMoves
         }
    },
    computed:{
        dataList(){//[1,2,3,4,5] [4,5,6,7,8]
            return  this.allMoves.slice((this.current-1)  *this.pageSize,(this.current) * this.pageSize)
        }
    },
    components: {
        MoveList,
        Pager
    }
}