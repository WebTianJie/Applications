/**

 * author  Administrator 创建

 * date 2019-12-02 14:35

 */
import {abs,add} from '@/index'
import {expect} from 'chai'
//测试用例
describe('abs函数',()=>{
    it('测试给abs传参期待返回值',()=>{
        expect(1+1).to.be.equal(2);
        expect(abs(1));
    })
    it('测试给abs传参期待返回值NaN',()=>{
        expect(1+1).to.be.equal(2);
        expect(abs('kajfa&'));
    })
})

describe ('add函数',()=>{
    it('测试给abs传参期待返回值NaN',()=>{
        expect(add(1,3)).to.be.equal(4);
    })
})

