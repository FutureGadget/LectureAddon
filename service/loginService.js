var dao = require('../dao/loginDAO');

var service = {};

service.login = function(data){
	
	console.log("DAO에 넘깁니다. :" + data.login_id +"/"+data.login_passwd);
	var result = dao.login(data);
};

module.exports = service;