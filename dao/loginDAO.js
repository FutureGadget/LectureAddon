var user = require('../model/userModel');
var dao = {};
dao.login = function(data) {
	var userlogin = {
		email: data.login_id,
		password: data.login_passwd
	};

	return user.findOne(userlogin).exec();
}
module.exports = dao;