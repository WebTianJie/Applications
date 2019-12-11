/**

 * author  Administrator 创建

 * date 2019-12-06 15:51

 */
import Move from './move.js'
const template=`
 <div class="data-container">
   <Move 
   v-for="item in dataList" 
   :move="item"
   :key="item._id"
   />
</div>
`;

export default  {
    template,
    components:{
        Move
    },
    props:{
        dataList:{
            type:Array,
            default:()=> []
        }
    }
}