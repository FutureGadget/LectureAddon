var user = require('../model/userModel');
var dao = {};
dao.join = function(data) {
	var userJoin = new user({
		name: data.name,
		email: data.email,
		password: data.passwd,
		authority: data.choice
	});

	// Check if already exists.
	// Prevents duplicate signups.
	var query = user.where({
		email: data.email
	});

	
	return query.findOne(function(err, email) {
		if (email == null) {
			userJoin.save();
		}
	});
}

module.exports = dao;