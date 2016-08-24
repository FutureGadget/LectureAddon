var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// controllers
var login = require('./controllers/login');
var qsubmit = require('./controllers/WriteController');
var comment = require('./controllers/WriteCommentController');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Users can directly access to views (html files)
app.use(express.static(path.join(__dirname, 'views')));

// Use express-session sub-app to manage sessions
app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: 'There is no cow level.'
}));

// use controller app
app.use('/login', login);
app.use('/qsubmit', qsubmit);
app.use('/comment', comment);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;