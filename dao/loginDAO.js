var user = require('../model/userModel');

var dao = {};

dao.login = function(data){

	var email = data.login_id;
	var password = data.login_passwd;

	console.log("DAO 에서 처리중입니다.");
	console.log(email +"//"+password);
	var userlogin = new user({
		email : data.login_id,
		password : data.login_passwd
	});

	user.findOne(userlogin)
		.exec(function(err, user){
			if(err){
				res.json({
					type : false,
					data : "Error!!!"
				});
			} else if(!user){
				res.json({
					type : false,
					data : "Error!!!"
				});
			} else if (user){
				res.json({
					type : true,
					data : user
				});
			}
		})

}

module.exports = dao;