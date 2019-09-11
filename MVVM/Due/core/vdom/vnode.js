let number=1;
export default class VNode {
	//tag:标签类型.DIV,SPAN,INPUT,#TEXT
	//ele:对应的真实节点
	//children:节点下的子节点
	//text:当前虚拟节点中的文本
	//data:VNodeData,暂时保留,毫无意义
	//parent:父级节点
	//nodeType:节点类型
	//env:当前节点环境变量
	//instructions:存放指令
	//template:当前节点涉及到的模板
	constructor(tag, elm, children, text, data, parent, nodeType) {
		this.tag = tag;
		this.elm = elm;
		this.children = children;
		this.text = text;
		this.data = data;
		this.number=number++;
		this.parent = parent;
		this.nodeType = nodeType;
		this.env = {};
		this.instructions = null;
		this.template = [];
	}
}
