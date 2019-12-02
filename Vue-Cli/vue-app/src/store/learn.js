/**

 * author  Administrator 创建

 * date 2019-12-02 10:23

 */

export default {
    state:{
        courseName:'j静养课堂',
        price:10
    },
    getters:{
        cousePrice(state){
            return '¥'+state.price
        }
    },
    mutations:{
        changePrice(state){
            state.price=200;
        }
    },
    actions:{

    }

}