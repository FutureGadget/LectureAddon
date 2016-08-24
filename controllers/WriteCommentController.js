var express = require('express'),
	router = express.Router(),
	service = require('../service/queryService');

router.get('/', function(req, res){
	req.query.writer = req.session.username;
	service.comment(req.query);
	res.jsonp();
});

module.exports = router;