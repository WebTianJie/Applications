/**

 * author  Administrator 创建

 * date 2019-12-06 16:35

 */

const template=`
<div class="data">
<div class="poster">
<img :src="move.poster" alt=""></div> 
<div class="words">
<h2 class="title">{{move.name}}</h2> 
<div class="attach">
<span>英文名：{{move.ename}}</span> 
<span>类型：{{move.type}}</span> <br> 
<span>上映地区：{{move.area}}</span> 
<span>上映时间：{{move.upDate}}</span> 
<span>时长：{{move.time}}</span>
</div> 
<div class="desc">
{{move.intro}}
</div></div>
</div>
`;

export  default  {
    template,
    props:{
        move:{
            type:Object,
            default:() => {}
        }
    }
}