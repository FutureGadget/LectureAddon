var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
		name: String,
		email: String,
		password: String,
		authority: String
	});

module.exports = mongoose.model('user', userSchema);