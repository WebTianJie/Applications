/**

 * author  Administrator 创建

 * date 2019-12-03 10:56

 */

import Son from "../../src/components/Son";
import {mount} from '@vue/test-utils'
import  {expect} from 'chai'
import  sinon from 'sinon'

describe('son.Vue',()=> {
    it('测试name,age属性有米有正确显示', () => {
        const name = '天劫';
        const age = 19;
        const wrapper = mount(Son);
        wrapper.setProps({name, age});
        expect(wrapper.findAll('h4').at(0).text()).to.be.include(name);
        expect(wrapper.findAll('h4').at(1).text()).to.be.include(age);
    })
    it('测试button,有咩有执行fn', () => {
        const wrapper = mount(Son);
        const spy = sinon.spy();
        wrapper.setProps({ fn: spy })
        wrapper.findAll('button').at(1).trigger('click');
        // expect(spy.called).to.be.true;
        expect(spy.callCount).to.be.equal(1);
    })
})