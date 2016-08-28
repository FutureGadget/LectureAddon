var express = require('express'),
	router = express.Router(),
	service = require('../service/questionService');

router.get('/', function(req, res){
	service.read(req.query).then(function(changeData){
		console.log(changeData);
		// chageData.currentUser = req.session.userID;
		res.send(changeData);
	});

});
module.exports = router;