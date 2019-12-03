/**

 * author  Administrator 创建

 * date 2019-12-03 16:02

 */

import Count from "../../src/components/count";
import  {mount,createLocalVue} from "@vue/test-utils";
import  Vue from 'vue'
import  Vuex from 'vuex'
let localVue=createLocalVue();
localVue.use(Vuex);
describe('count.cue',()=>{
    let state;
    let store;
    let getters;
    let mutations;
    let actions;
    beforeEach(()=>{
        state={count:1};
        getters={
            dbCount() {
                return state.count*2;
            }
        }
        mutations={
            changeCount:jest.fn()
        }
        actions={
            changeCount:jest.fn()
        }
        store=new Vuex.Store({
            state,
            getters,
            mutations,
            actions
        })
    })
    it('测试vuex ', function () {
        const wrapper =mount(Count,{
            localVue,
            store
        })
        expect(wrapper.findAll('h4').at(0).text()).toContain(1);
    });
    it('getters ', function () {
        const wrapper =mount(Count,{
            localVue,
            store
        })
        expect(wrapper.findAll('h4').at(1).text()).toContain(getters.dbCount());
    });
    it('mutations ', function () {
        const wrapper =mount(Count,{
            localVue,
            store
        })
        wrapper.findAll('button').at(0).trigger('click');
        expect(mutations.changeCount).toHaveBeenCalled();
    });
    it('actions ', function () {
        const wrapper =mount(Count,{
            localVue,
            store
        })
        wrapper.findAll('button').at(1).trigger('click');
        expect(actions.changeCount).toHaveBeenCalled();
    });
})