var express = require('express'),
	router = express.Router(),
	service = require('../service/queryService');

router.get('/', function(req, res){
	req.query.writer = req.session.username;
	var result = service.write(req.query);
	res.jsonp(result);
});
module.exports = router;