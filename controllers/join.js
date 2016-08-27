var express = require('express');
var router = express.Router();
var service = require('../service/joinService');

router.post('/', function(req, res, next){
	// service.join returns a Query object.
	// A query object is a Promise object, which means it has
	// "then" function.
	service.join(req.body).then(function(email){
		if (email == null) {
			res.send({success: true});
		} else {
			res.send({success: false});
		}
	});
});

module.exports = router;