var dao = require('../dao/questionDAO');

var service = {};
service.write = function(insertData) {
	return dao.write(insertData);
};
module.exports = service;