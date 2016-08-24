var dao = require('../dao/questionDAO');
var database = require('../common/DBConnection');
var service = {};
service.write = function(insertData) {
	// open connection
	dao.conn = database.getConn();

	var result = dao.write(insertData);
	// close connection should dettered until the work is done.
	
	console.log(result);
	return result;
};
module.exports = service;