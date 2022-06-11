var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root', //Your Database User Name
	password:'test', // Your Database Password
	database:'node_js_crud'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully.');
	}
});

module.exports = connection;