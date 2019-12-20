var  MongoDB=require('mongodb').MongoClient;
var  url='mongodb://127.0.0.1:27017/school';

function insert(collection,obj,callback){
    MongoDB.connect(url,function (err,db) {
        if(err==null){
            var database=db.db('school');
            database.collection(collection).insertOne(obj,callback);
        }else{
            throw  Error(';连接错误');
        }
        db.close();
    })

}
function insertMany(collection,obj,callback){
    MongoDB.connect(url,function (err,db) {
        if(err==null){
            var database=db.db('school');
            database.collection(collection).insertMany(obj,callback);
        }else{
            throw  Error('连接出错');
        }
        db.close();
    })
}
function select(collection,where,callback){
    MongoDB.connect(url,function (err,db) {
        if(err==null){
            var database=db.db('school');
            database.collection(collection).find(where).toArray(callback);
        }else{
            throw Error('连接错误');
        }
        db.close();
    })
}
function deleteOne(collection,where,callback){
    MongoDB.connect(url,function (err,db) {
       if(err==null){
           var database=db.db('school');
           database.collection(collection).deleteOne(where,callback)
       }else{
           throw Error('数据库连接失败');
       }
        db.close();
    })
}
function deleteMany(collection,where,callback){
    MongoDB.connect(url,function (err,db) {
        if(err==null){
            var database=db.db('school');
            database.collection(collection).deleteMany(where,callback)
        }else{
            throw Error('数据库连接失败');
        }
        db.close();
    })
}
function update(collection,where,value,callback){
    MongoDB.connect(url,function (err,db) {
      if(err==null){
          var  database=db.db('school');
          database.collection(collection).updateOne(where,value,callback);
      }else{
          throw Error('连接数据库失败');
      }
      db.close();
    })
}
function updateMany(collection,where,value,callback){
    MongoDB.connect(url,function (err,db) {
        if(err==null){
            var  database=db.db('school');
            database.collection(collection).updateMany(where,value,callback);
        }else{
            throw Error('连接数据库失败');
        }
        db.close();
    })
}
insert('student',{name:'天劫',age:18,sex:1},function (err,res) {
    if(err==null){
        console.log(res);
    }
});
insertMany('student',[{name:'天罪',age:18,sex:0},{name:'一笑',age:18,sex:1},{name:'奈何',age:18,sex:1}],function (err,res) {
    if(err==null){
        console.log(res);
    }
})
select('student',{sex:0},function (err,res) {
    if(err==null){
        console.log(res);
    }
});
deleteOne('student',{age:12},function (err,res) {
    if(err==null){
        console.log(res);
    }
})
deleteMany('student',{sex:0},function (err,res) {
    if(err==null){
        console.log(res);
    }
})
update('student',{name:'天劫'} ,{$set:{age:188}},function (err,res) {
    if(err==null){
        console.log(res);
    }
});
updateMany('student',{age:188} ,{$set:{age:18}},function (err,res) {
    if(err==null){
        console.log(res);
    }
});
module.exports={
    insert:insert,
    insertMany:insertMany,
    select:select,
    deleteOne:deleteOne,
    deleteMany:deleteMany,
    update:update,
    updateMany:updateMany
}