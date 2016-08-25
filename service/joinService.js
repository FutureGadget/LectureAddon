var dao = require('../dao/joinDAO');
var service = {};
service.join = function(data){
	return dao.join(data);
};

module.exports = service;