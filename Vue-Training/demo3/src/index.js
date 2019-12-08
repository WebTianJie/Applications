/**

 * author  Administrator 创建

 * date 2019-12-06 15:47

 */

import App from './app.js'

const template=`<App/>`;

const config={
    el:'#app',
    template,
    components:{
        App
    }
}
new Vue(config)