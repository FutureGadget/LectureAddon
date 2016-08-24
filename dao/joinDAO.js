var user = require('../model/userModel');

var dao = {};

dao.join = function(data){
	var userJoin = new user({
		name : data.name,
		email : data.email,
		password : data.passwd,
		authority : data.choice,
	});
	console.log("삽입한 data:"+ JSON.stringify(data));
	userJoin.save();
}
module.exports = dao;