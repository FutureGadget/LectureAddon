var dao = require('../dao/joinDAO');
var database = require('../common/DBConnection');

var service = {};

service.join = function(data){
	var result = dao.join(data);
};

module.exports = service;