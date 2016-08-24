var dao = require('../dao/questionDAO');
// var database = require('../common/DBConnection');
var service = {};
service.write = function(insertData) {
	console.log('service');
	var result = dao.write(insertData);
	// console.log(result);
	// return result;
};
module.exports = service;