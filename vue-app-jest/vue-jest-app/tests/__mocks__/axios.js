/**

 * author  Administrator 创建

 * date 2019-12-03 14:49

 */

export  default {
    get:url=>{
        switch (url) {
            case '/name':
                return Promise.resolve({
                    status:200,
                    data:{
                        name:'天劫'
                    }
                })
                 break;
            case '/age' :
                return Promise.resolve({
                    status:200,
                    data:{
                        age:19
                    }
                })
                break;

        }
    }
}