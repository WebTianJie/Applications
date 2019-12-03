/**

 * author  Administrator 创建

 * date 2019-12-03 10:35

 */

import Father from "../../src/components/Father";
import Son from "../../src/components/Son";
import  {shallowMount} from '@vue/test-utils'
// import  {mount} from '@vue/test-utils' //只测试父组件,不测试子组件
import  {expect} from 'chai'

    describe('father.vue',()=>{
        it('测试子组件触发show事件,显示信息',()=>{
            // const wrapper=mount(Father);不测试子组件,只测试父组件
             const wrapper=shallowMount(Father);
            expect(wrapper.find('.show').exists()).to.be.false;
            wrapper.find(Son).vm.$emit('showInfo');
            expect(wrapper.find('.show').exists()).to.be.true;
        })
        it(',显示信息',()=>{
            // const wrapper=mount(Father);不测试子组件,只测试父组件
            const wrapper=shallowMount(Father);
            expect(wrapper.find('.show').exists()).to.be.false;
            wrapper.find(Son).vm.$emit('showInfo');
            expect(wrapper.find('.show').exists()).to.be.true;
        })
    })