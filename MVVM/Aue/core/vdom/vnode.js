/**

 * author  张高瑞 创建
 * date 2019-09-13 09:57
 * 虚拟节点,模拟真实Dom的对应关系
 * tag,//标签,SPAN,DIV,INPUT,#TEXT(文本节点)
 * elm,//对应的真实节点
 * children,//当前节点下面的子节点
 * text,//当前虚拟节点中的文本
 * nodeType,//当前节点的节点类型
 * data,//保留属性,当前节点
 * parent//当当节点的父节点
 * env 当前节点的环境变量
 * templates 当前节点涉及到的模板
 * instruction 存放指令
 */

let number=1;
export default  class VNode{
        constructor(tag,elm,children,text,nodeType,data,parent)
        {
            this.tag=tag;
            this.elm=elm;
            this.children=children;
            this.text=text;
            this.nodeType=nodeType;
            this.parent=parent;
            this.data=data;
            this.env={};
            this.instructions=null;
            this.template=[];
            this.number=number++;
        }
}