var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/user');

var db = mongoose.connection;
db.on('error', function (err) {
	console.log('connection error', err);
});

db.once('open', function () {
	console.log('connected.');
});

var dao = {};
dao.login = function(data){

	console.log(data.login_id);
	console.log(data.login_passwd);

	db.disconnect();
}

module.exports = dao;