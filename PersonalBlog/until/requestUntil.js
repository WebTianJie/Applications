var axios=require('axios');
function requestApi(api){
	var data;
	Axios.get(api).then(function(res){
		data=res;
	}).catch(function(error){
		console.log(error);
	})
	
	return data;
}

module.exports.requestApi=requestApi;
