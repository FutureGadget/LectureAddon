var express = require('express');
var router = express.Router();
var path = require('path');
var session = require('express-session');

router.post('/', function(req, res, next){
	res.set('Content-Type', 'text/plain');
	res.send('test');
})

module.exports = router;