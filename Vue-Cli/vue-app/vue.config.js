/**

 * author  Administrator 创建

 * date 2019-11-29 15:46
 * 跨域配置
 */
module.exports={
    devServer:{
        proxy:{
            '/login':{
                target:'http://eschat.liuhuiyu.top/login',
                changeOrigin: true,
                pathRewrite:{
                    '^/login':''
                }
            }
        }
    }
}