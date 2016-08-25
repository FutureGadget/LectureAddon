var dao = require('../dao/loginDAO');
var service = {};
service.login = function(data){
	return dao.login(data);
};
module.exports = service;