/**

 * author  Administrator 创建

 * date 2019-12-02 15:40

 */

import HelloWorld from '@/components/HelloWorld.vue'
import  Vue from 'vue'

import  {expect} from 'chai'
import {mount} from '@vue/test-utils'

describe('HellowWord.VUE',()=>{
    it('测试HellowWord.VUE',()=>{
        const Contructor=Vue.extend(HelloWorld);
        let msg='hello vue';
        const vm=new Contructor({
          propsData:{
              msg
          }
      }).$mount();
        const inner=vm.$el.getElementsByTagName('h1')[0].innerHTML.trim();
        expect(inner).to.be.equal(msg);

    })
    it('vue test-utils',()=>{
        const wrapper=mount(HelloWorld);
        let msg='hello world';
        wrapper.setProps({msg});
        const  domInner=wrapper.find('h1').text();
        expect(domInner).to.be.include(msg)
    })
})