var sitemap=new Vue({
	el:'#blog-list',
	data:{
		blogList:[]
	},
	computed:{
		
	},
	created:function(){
		var self=this;
		axios({
			method:'get',
			url:'/queryAllBlogs'
		}).then(function(res){
			self.blogList=res.data.data;
		}).catch(function(error){
			console.log(error);
		})
	}
})