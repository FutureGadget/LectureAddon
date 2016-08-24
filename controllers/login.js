var express = require('express');
var router = express.Router();
var service = require('../service/loginService');
router.post('/', function(req, res, next){

	// 세션에 저장하고
	req.session.userID = req.body.login_id;

	var result = service();

})

module.exports = router;