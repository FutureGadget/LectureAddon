var mongoose = require('mongoose');

var database = {};

database.getConn = function() {
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/lectureaddon');
	var db = mongoose.connection;
	db.on('error', function(err){
		console.log(err);
	});
	db.once('open', function(){
		console.log('connected!');
	});
	return db;
}

module.exports = database;