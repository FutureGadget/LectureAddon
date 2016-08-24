var express = require('express'),
	router = express.Router(),
	service = require('../service/queryService');

router.get('/', function(req, res){
	req.query.writer = req.session.username;
	service.write(req.query).then(function(item){
		res.jsonp(item);
	});
	// res.jsonp({_id: '000', title: 'hello', content: 'good'});
});

module.exports = router;