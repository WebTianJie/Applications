/**
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