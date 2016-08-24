var dao = require('../dao/questionDAO');

var service = {};

service.write = function(insertData) {

	var result = dao.write(insertData);
};
module.exports = service;