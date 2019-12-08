/**

 * author  Administrator 创建

 * date 2019-12-06 15:48

 */
import MoveList from "./moveList.js";
import Pager from "./pager.js";
const  template=`
<div>
    <MoveList></MoveList>
    <Pager></Pager>
</div>
`

export  default  {
    template,
    components: {
        MoveList,
        Pager
    }
}