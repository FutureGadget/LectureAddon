var dao = require('../dao/questionDAO');

var service = {};

service.write = function(insertData) {
	return dao.write(insertData); // return a promise
};

service.read = function(data) {
	return dao.read(data);
}
module.exports = service;