/**

 * author  Administrator 创建

 * date 2019-12-05 15:07

 */
//模板
const template=`
<div>
<h1>添加商品</h1>
<div>
名称: <input type="text" v-model="newProduct.name" >
库存: <input type="text" v-model="newProduct.stock">
<button @click="addProduct">添加商品</button>
</div>
    <h1>{{title}}</h1>
    <div>
       <li v-for="(item,index) in products">
          <span>{{item.name}}</span>
          <button @click="changeStock(item,item.stock+1)">+</button>
          <span v-if="item.stock>0" class="stock">{{item.stock}}</span> 
          <i v-else class="soldout">售罄</i>
          <input type="number" min="0" v-model="item.stock">
          <button @click="changeStock(item,item.stock-1)">-</button>
          <button @click="remove(index)">删除</button>
       </li>
    </div>
 </div>
`;
//配置对象
const config={
   template,
   el:'#app',
   data:{
        title:'商品管理',
       products:[
           {name:'华为',stock:5},
           {name:'小米',stock:21},
           {name:'iphone',stock:119}
       ],
       newProduct:{
            name:'',
           stock:''
       }
   },
    methods:{
        changeStock(prod,newStock){
            if(newStock<0){
                newStock=0;
            }
            prod.stock=newStock;
        },
        remove(index){
            this.products.splice(index,1);
        },
        addProduct(){
            this.products.push(this.newProduct);
            this.newProduct={
                name:'',
                stock:''
            }
        }
    }
}
//vue的实例
const app=new Vue(config)
