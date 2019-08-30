var searchList=new Vue({
	el:'#search-list',
	data:{
		keyWord:''
	},
	computed:{
		
	},
	methods:{
		search:function(){
			window.location.href='/searchList.html?keyWord='+this.keyWord
		}
	},
	created:function(){
		
	}
})
var randomTags=new  Vue({
	el:'#random-tags',
	data:{
		tags:[
			
		]
	},
	computed:{
		randomColor:function(){
			return function(){
				var  red=Math.random()*255;
				var  green=Math.random()*255;
				var  blue=Math.random()*255;
				return 'rgb('+red+','+green+','+blue+')';
			}
		},
		randomSize:function(){
			return function(){
				var  size=(Math.random()*20+12)+'px';
				return size;
			}
		}
	},
	created:function(){
		var  self=this;
		axios({
			method:'get',
			url:'/getRandomTags'
		}).then(function(res){
			res.data.data.forEach(function(ele,index,sel){
				var temp={};
				temp.title=ele.tag;
				temp.id=ele.id;
				self.tags.push(temp);
			});
		}).catch(function(error){
			console.log(error);
		})
	}
})

var  hot=new  Vue({
	el:'#hot',
	data:{
		hotList:[]
	},
	computed:{
		
	},
	created:function(){
		var self=this;
		axios({
			method:'get',
			url:'/queryHotBlog'
		}).then(function(res){
			res.data.data.forEach(function(ele,index,sel){
				self.hotList.push(ele);
			});
		}).catch(function(error){
			console.log(error);
		})
	}
})

var commit=new Vue({
    el:'#commits',
	data:{
		commitsList:[
			{
				name:'刘明',
				date:'2019-09-18',
				content:'谢谢博主的无私慷慨'
			},
			{
				name:'金晓东',
				date:'2019-09-18',
				content:'在这学到了很多'
			},
			{
				name:'董**',
				date:'2019-09-18',
				content:'希望多更新一些关于css的问题'
			},
			{
				name:'曹丽丽',
				date:'2019-09-18',
				content:'vue的知识点还是不是很明白'
			},
			{
				name:'张天劫',
				date:'2019-09-18',
				content:'这家伙很懒,没有留下评论'
			}
		]
	}
	,
	filters: {
	      formatDate: function (value) {
	        let date =new Date(value*1000);
	        let y = date.getFullYear();
	        let MM = date.getMonth() + 1;
	        MM = MM < 10 ? ('0' + MM) : MM;
	        let d = date.getDate();
	        d = d < 10 ? ('0' + d) : d;
	        let h = date.getHours();
	        h = h < 10 ? ('0' + h) : h;
	        let m = date.getMinutes();
	        m = m < 10 ? ('0' + m) : m;
	        // let s = date.getSeconds();
	        // s = s < 10 ? ('0' + s) : s;
	        return y + '-' + MM + '-' + d + ' ' + h + ':' + m;
	      }
	},
	computed:{
		
	},
	created:function(){
		var self=this;
		axios({
			method:'get',
			url:'/queryHotCommit'
		}).then(function(res){
			self.commitsList=res.data.data;
			res.data.data.forEach(function(ele,index,sel){
				self.commitsList[index].name=ele.user_name;
				self.commitsList[index].date=ele.ctime;
				self.commitsList[index].content=ele.commits;
			});
		}).catch(function(error){
			console.log(error);
		})
	}
})

var links=new Vue({
	el:'#links',
	data:{
		linkList:[
			{
				name:'科讯cms',
				href:''
			},
			{
				name:'帝国cms',
				href:''
			},
			{
				name:'叨叨cms',
				href:''
			},
			{
				name:'刀客Cms',
				href:''
			},
			{
				name:'PhpCms',
				href:''
			},
			{
				name:'finecms',
				href:''
			},
			{
				name:'骑士cms',
				href:''
			},
			{
				name:'ShopNc',
				href:''
			}
		]
	},
	computed:{
		
	},
	created:function(){
		
	}
})