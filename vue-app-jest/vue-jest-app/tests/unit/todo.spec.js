/**

 * author  Administrator 创建

 * date 2019-12-02 16:13

 */

import todolist from '@/components/todolist.vue';
import { mount } from '@vue/test-utils';
describe('Todolist',()=>{
    it('测试数据mask',()=>{
        const wrapper=mount(todolist);
        const maskVal=wrapper.find('input').text();
        const maskData=wrapper.vm.mask;
        expect(maskVal).toBe('');
        expect(maskData).toBe('');
    })
    it('测试数据mask跟随输入框改变',()=>{
        const wrapper=mount(todolist);
        const oInput=wrapper.find('input')
        // oInput.element.value='精品课程';
        // oInput.trigger('input')
        oInput.setValue('精品课程');
        const maskData=wrapper.vm.mask;
        expect(maskData).toBe('精品课程');
    })
    it('测试click方法',()=>{
        const wrapper=mount(todolist);
        const oBtn=wrapper.find('button');
        const length=wrapper.vm.maskList.length;
        oBtn.trigger('click');
        expect(wrapper.vm.maskList).toHaveLength(length+1);
        expect(wrapper.findAll('li')).toHaveLength(length+1);
    })
})