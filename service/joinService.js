var dao = require('../dao/joinDAO');

var service = {};

service.join = function(data){
	var result = dao.join(data);
	console.log("join Service 가 넘겨받은 data :"+ JSON.stringify(data));
};

module.exports = service;