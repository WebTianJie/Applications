/**

 * author  Administrator 创建

 * date 2019-12-03 11:44

 */
import Async from "../../src/components/Async";
import {mount} from "@vue/test-utils";
import {expect} from "chai";
import  moxios from 'moxios'

describe('Async.vue',()=>{
    beforEach(()=>{
        moxios.install();
    })
    afterEach(()=>{
        moxios.uninstall();
    })
    it('获取name的数据',done=>{
        const wrapper = mount(Async);
        wrapper.findAll('button').at(0).trigger('click');
        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            const name='姗姗';
            request.stubRequest('/name',{
                status:200,
                response:{
                    name
                }
            }).then((res)=>{
                wrapper.findAll('h4').at(0).text().to.be.equal(name);
                done();
            });
        })
    })
    it('获取age的数据',done=>{
        const wrapper = mount(Async);
        const age='18';
        wrapper.findAll('button').at(0).trigger('click');
        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();

            request.stubRequest('/age',{
                status:200,
                response:{
                    age
                }
            }).then((res)=>{
                expect( wrapper.findAll('h4').at(1).text()).to.be.equal(age);
                done();
            });
        })
    })
})