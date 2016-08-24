var express = require('express');
var router = express.Router();
var service = require('../service/loginService');


router.post('/', function(req, res, next){

	// 세션에 저장하고
	req.session.userID = req.body.login_id;
	var result = service.login(req.body);

	console.log("현재 SESSION ID :" + req.session.userID);

	if(result){
		// 로그인 성공시 main_list.html 을 보여줌

	} else {
		// 로그인 실패시 redirect
	}
})

module.exports = router;