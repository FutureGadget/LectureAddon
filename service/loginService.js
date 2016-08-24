var dao = require('../dao/loginDAO');

var service = {};

service.login = function(data){
	
	var result = dao.login(data);
};

module.exports = service;