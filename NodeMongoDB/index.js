var  mongo=require('mongodb').MongoClient;
var  url='mongodb://127.0.0.1:27017/school';

// insert('student',{name:'dog',age:12,sex:0},function(error,res){
// 	if(error==null){
// 		console.log(res);
// 	}else{
// 		console.log(error);
// 	}
// });
function insert(collection,obj,callback){
	mongo.connect(url,function (error,db){
		if(error==null){
			var database=db.db('school');
			// database.createCollection('teacher',function(error,res){
			// 	if(error==null){
			// 		console.log(res);
			// 	}else{
			// 		console.log(error);
			// 	}
			// })
			database.collection(collection).insertOne(obj,callback);
			db.close();
		}else{
			console.log(error);
		}
		// db.close();
	})
}

// insertMany('student',[{name:'cat',age:11,sex:0},{name:'cat1',age:12,sex:0},{name:'cat3',age:13,sex:0},{name:'cat4',age:14,sex:0}],function(error,res){
// 	if(error==null){
// 		console.log(res);
// 	}else{
// 		console.log(error);
// 	}
// });
function insertMany(collection,objs,callback){
	mongo.connect(url,function (error,db){
		if(error==null){
			var database=db.db('school');
			// database.createCollection('teacher',function(error,res){
			// 	if(error==null){
			// 		console.log(res);
			// 	}else{
			// 		console.log(error);
			// 	}
			// })
			database.collection(collection).insertMany(objs,callback);
			db.close();
		}else{
			console.log(error);
		}
		// db.close();
	})
}
function find(collection,where,callback){
	mongo.connect(url,function (error,db){
		if(error==null){
			var database=db.db('school');
			// database.createCollection('teacher',function(error,res){
			// 	if(error==null){
			// 		console.log(res);
			// 	}else{
			// 		console.log(error);
			// 	}
			// })
			database.collection(collection).find(where).toArray(callback);
			db.close();
		}else{
			console.log(error);
		}
		// db.close();
	})
}

// find('student',{age:18},function(error,res){
// 		if(error==null){
// 			console.log(res);
// 		}else{
// 			console.log(error);
// 		}
// })

function update(collection,where,value,callback){
	mongo.connect(url,function (error,db){
		if(error==null){
			var database=db.db('school');
			// database.createCollection('teacher',function(error,res){
			// 	if(error==null){
			// 		console.log(res);
			// 	}else{
			// 		console.log(error);
			// 	}
			// })
			database.collection(collection).updateOne(where,value,callback);
			db.close();
		}else{
			console.log(error);
		}
		// db.close();
	})
}
// update('student',{name:'cat3'},{$set:{age:131}},function(error,res){
// 		if(error==null){
// 			console.log(res);
// 		}else{
// 			console.log(error);
// 		}
// })

function deleteData(collection,where,callback){
	mongo.connect(url,function (error,db){
		if(error==null){
			var database=db.db('school');
			// database.createCollection('teacher',function(error,res){
			// 	if(error==null){
			// 		console.log(res);
			// 	}else{
			// 		console.log(error);
			// 	}
			// })
			database.collection(collection).deleteOne(where,callback);
			db.close();
		}else{
			console.log(error);
		}
		// db.close();
	})
}

// deleteData('student',{name:'cat3'},function(error,res){
// 		if(error==null){
// 			console.log(res);
// 		}else{
// 			console.log(error);
// 		}
// })
module.exports={
	insert:insert,
	insertMany:insertMany,
	find:find,
	update:update,
	deleteData:deleteData
}