var  everyDay=new Vue({
	el:'#every-day',
	data:{
		content:'这就是每天都要说的一句话'
	},
	computed:{
		getContent:function(){
			return this.content;
		}
	},
	created:function(){
		//请求数据给你content赋值
		var self=this;
		axios({
			method:'get',
			url:'/queryEveryDay'
		}).then(function(res){
			var data=JSON.parse(res.data.data)[0].content;
			self.content=data;
		}).catch(function(){
			console.log('请求失败');
		})
	}
})
var searchArticleList=new Vue({
	el:'#tag-article-list',
	data:{
		pageNumList:[],
		count:100,
		tag:'',
		page:1,
		pageSize:5,
		articleDataList:[
			{
				title:'乱码表，看懂常见编码乱码',
				content:'乱码，是最常遇到的问题，这个表貌似可以轻松的通过“乱码”的样子明白乱码原因。好吧，我承认这是又水了一篇。。。。',
				date:'2019-08-14',
				views:'101',
				tags:'乱码表',
				id:'1',
				link:''
			}		]
	},
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
		getPage:function(){
			var self=this;
			return function (page,pageSize){
				axios({
					method:'get',
					url:'/queryAllBlog?page='+(page-1)*5+'&pageSize='+pageSize+'&tag='+self.tag
				}).then(function(resp){
					console.log(resp.data.data);
					self.articleDataList=resp.data.data;
					self.page=page;
				}).catch(function(resp){
					console.log(resp);
				})
				axios({
					method:'get',
					url:'/queryAllBlogCount?tag='+self.tag,
				}).then(function(resp){
					self.count=resp.data.data[0].count;
					self.pageTool;
				}).catch(function(resp){
					console.log(resp);
				})
				
			}
		},
		pageChange:function(){
			return function(page){
				this.getPage(page,this.pageSize);
			}
		},
		pageTool:function(){
			var nowPage=this.page;
			var pageSize=this.pageSize;
			var counts=this.count;
			var result=[];
			result.push({text:'<<',page:1});
			if(nowPage>2){
				result.push({text:nowPage-2,page:nowPage-2});
			}
			if(nowPage>1){
				result.push({text:nowPage-1,page:nowPage-1});
			}
			result.push({text:nowPage,page:nowPage});
			if(nowPage+1<=(counts+pageSize-1)/pageSize){
				result.push({text:nowPage+1,page:nowPage+1});
			}
			if(nowPage+2<=(counts+pageSize-1)/pageSize){
				result.push({text:nowPage+2,page:nowPage+2});
			}
			result.push({text:'>>',page:parseInt((counts+pageSize-1)/pageSize)});
			this.pageNumList=result;
			return result;
		}
	},
	created:function(){
		var  tag=location.search.indexOf('?')>-1 ? location.search.split('?')[1]:'';
		tag=tag.split('=')[1];
		this.tag=tag;
		this.getPage(this.page,this.pageSize);
	}
})