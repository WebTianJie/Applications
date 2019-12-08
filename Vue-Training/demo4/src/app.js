/**

 * author  Administrator 创建

 * date 2019-12-06 15:48

 */

const  template=`
<div>
 <nav class="nav">
   <router-link to="/">首页</router-link>
   <router-link to="/moveIndex">电影首页</router-link>
</nav>
 <router-view></router-view>
</div>
`
export  default  {
    template,
}