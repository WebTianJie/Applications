/**

 * author  Administrator 创建

 * date 2019-12-06 15:48

 */
import Header from './components/header.js'
const  template=`
<div>
<Header></Header>
 <router-view></router-view>
</div>
`
export  default  {
    template,
    components:{
        Header
    }
}