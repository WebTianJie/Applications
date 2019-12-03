/**

 * author  Administrator 创建

 * date 2019-12-03 11:44

 */
import Async from "@/components/Async";
import {mount} from "@vue/test-utils";
import  Vue from 'vue'
jest.mock('axios');
describe('Async.vue',()=>{
    it('获取name的数据',done=>{
        const wrapper = mount(Async);
        wrapper.findAll('button').at(0).trigger('click');
        Vue.nextTick(()=>{
            expect(wrapper.findAll('h4').at(0).text()).toContain('天劫');
            done();
        })
    })
    // it('获取age的数据',()=>{
    //     const wrapper = mount(Async);
    //     wrapper.findAll('button').at(1).trigger('click');
    //     return Promise.resolve().then(() => {
    //         expect(wrapper.findAll('h4').at(0).text()).toBe('shanshan');
    //     })
    // })
})