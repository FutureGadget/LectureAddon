var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
		name: String,
		email: String,
		password: String,
		authority: String
	});

var user = mongoose.model('user', userSchema);

module.exports = user;
