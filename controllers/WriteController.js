var express = require('express'),
	router = express.Router(),
	path = require('path'),
	service = require('../service/queryService');

router.get('/', function(req, res){
	req.query.writer = req.session.username;
	service.write(req.query);
	res.jsonp(req.query);
});
module.exports = router;