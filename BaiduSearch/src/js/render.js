/**

 * author  张高瑞 创建

 * date 2019-09-13 16:28
 * 根据页面渲染数据
 */

function renderPage(data){
    var strHtml='';
    data.forEach(function(item,index,self){
        strHtml+='<li><img src="'+item.src+'"/><p class="name">'+item.name+'</p><p class="des">'+item.des+'</p></li>';
    })
    oUl.innerHTML=strHtml;
}