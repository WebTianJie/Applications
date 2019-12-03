/**

 * author  Administrator 创建

 * date 2019-12-03 16:49

 */

import {createLocalVue} from "@vue/test-utils";
import  Vuex from 'vuex'
import config from '@/store/index'
import {cloneDeep} from 'lodash'
describe('vuex',(()=>{
    it('mustation',()=> {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep(config));
        expect(store.state.count).toBe(1);
        store.commit('changeCount', 10);
        expect(store.state.count).toBe(11);
    })
    it('actions',()=> {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep(config));
        expect(store.state.count).toBe(1);
        jest.useFakeTimers()//模拟定时器
        store.commit('changeCount', 10);
        jest.runAllImmediates()//快进事件,定时器回调执行
        expect(store.state.count).toBe(11);
    })
}))