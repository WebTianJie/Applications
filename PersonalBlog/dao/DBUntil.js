var mysql=require('mysql');

function createConnection(){
	var connection=mysql.createConnection({
		host:'127.0.0.1',
		post:'3306',
		user:'root',
		password:'admin@123456',
		database:'blog'
	})
	return connection;
}

module.exports.createConnection=createConnection;