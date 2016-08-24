var express = require('express');
var router = express.Router();
var service = require('../service/joinService');


router.post('/', function(req, res, next){

	var result = service.join(req.body);

})

module.exports = router;