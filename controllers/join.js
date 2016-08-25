var express = require('express');
var router = express.Router();
var service = require('../service/joinService');

router.post('/', function(req, res, next){
	var result = service.join(req.body);
	result.then(function(doc){

		if(!doc){
			// 회원가입 실패

		} else {
			// 가입 성공
		}
	});
});

module.exports = router;