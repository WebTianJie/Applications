import {Request} from '../unitl/request'
class IndexModel extends Request{
     // 1:推荐
     getRecommendInfo(mazagineId=0){
         return this.getData({
             url:`/getRecommendInfo/${mazagineId}`
         })
     }
      //2:标记列表
      getMarkTypeList(mazagineId=0){
          return this.getData({
              url:`/getMarkTypeList/${mazagineId}`
          })
      }
    //3:文章列表
    getArticleList(mazagineId=0,start=0){
        return this.getData({
             url:`/getIndexArticleList/${mazagineId}/${start}`
         })
     }
}

export {IndexModel}