
var sendComment=new Vue({
	el:'#send-comments',
	data:{
		vCode:'',
		rightCode:'',
		comments:[]
	},
	computed:{
		sendComment:function(){
			return function(){
				var code=document.getElementById('comment-code').value;
				if(code!==sendComment.rightCode){
					alert('验证码错误');
					return false;
				}
				var  id=location.search.indexOf('?')>-1 ? location.search.split('?')[1]:'';
				id=id.split('=')[1];
				var reply=document.getElementById('comment-reply').value;
				var replyName=document.getElementById('comment-reply-name').value;
				var name=document.getElementById('comment-name').value;
				var email=document.getElementById('comment-email').value;
				var content=document.getElementById('comment-content').value;
				axios({
					methods:'get',
					url:'/addComment?blog_id='+-10+'&parent='+reply+'&user_name='+name+'&commits='+content+'&email='+email+'&parent_name='+replyName
				}).then(function(res){
					alert(res.data.msg);
					document.getElementById('comment-reply').value='';
					document.getElementById('comment-reply-name').value='';
					document.getElementById('comment-name').value='';
					document.getElementById('comment-email').value='';
					document.getElementById('comment-content').value='';
					document.getElementById('comment-code').value='';
				}).catch(function(error){
					console.log(error);
				})
			}
		}
	},
	methods:{
		changeCode:function(){
			var  self=this;
			axios({
				method:'get',
				url:'/queryRandom'
			}).then(function(res){
				self.vCode=res.data.data.data;
				self.rightCode=res.data.data.text;
			})
		},
		getAllCommits:function(id){
			var self=this;
			axios({
				method:'get',
				url:'/getAllCommits?blog_id='+id
			}).then(function(res){
				this.comments=res.data.data
			})
		}
	},
	created:function (){
		var  id=location.search.indexOf('?')>-1 ? location.search.split('?')[1]:'';
		id=id.split('=')[1];
		this.changeCode();
		this.getAllCommits(id);
	}
		
})
var  blogComments=new Vue({
	el:'#blog-comments',
	data:{
		comments:[],
		count:0
	},
	computed:{
		
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
	methods:{
		getAllCommits:function(id){
			id=-10;
			var self=this;
			axios({
				method:'get',
				url:'/getAllCommits?blog_id='+id
			}).then(function(res){
				self.comments=res.data.data
			})
			axios({
				method:'get',
				url:'/getCommitsCount?blog_id='+id
			}).then(function(res){
				self.count=res.data.data[0].count;
			})
		},
		replyComment:function(commentId,user_name){
			commentId=-10;
			document.getElementById('comment-reply').value=commentId;
			document.getElementById('comment-reply-name').value=user_name;
			window.location.href='#send-comments'
		}
	},
	created:function (){
		var  id=location.search.indexOf('?')>-1 ? location.search.split('?')[1]:'';
		id=id.split('=')[1];
		this.getAllCommits(id);
	}
})