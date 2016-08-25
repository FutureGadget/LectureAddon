var express = require('express');
var router = express.Router();
var service = require('../service/loginService');

router.post('/', function(req, res, next){
	var result = service.login(req.body);
	result.then(function(doc){
		console.log(doc);
		if(!doc){
			// 존재x 회원가입을 해주세요
			res.redirect('/');

		} else {
			// 로그인 성공시 세션에 id를 박고
			// 강의 리스트 출력
			req.session.userID = req.body.login_id;
			console.log("현재 SESSION ID :" + req.session.userID);
		}
	});
});
module.exports = router;