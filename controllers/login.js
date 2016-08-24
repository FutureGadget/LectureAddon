var express = require('express');
var router = express.Router();
var service = require('../service/loginService');


router.post('/', function(req, res, next){

	req.session.userID = req.body.login_id;
	var result = service.login(req.body);

	console.log("Service에 넘깁니다. :" + req.body.login_id +"/"+req.body.login_passwd);

	console.log("컨트롤러가 받은 최종 결과값은 "+result);
	if(result){
		// 로그인 성공시 세션에 저장하고
		// main_list.html 을 보여줌
		req.session.userID = req.body.login_id;
		console.log("현재 SESSION ID :" + req.session.userID);
		

	} else {
		// 로그인 실패시 redirect
		res.redirect('/');
	}
})

module.exports = router;