var dao = require('../dao/loginDAO');
var database = require('../common/DBConnection');

var service = {};

service.login = function(data){
	// open connection
	dao.conn = database.getConn();
	
	var result = dao.login(data);
	
};

module.exports = service;