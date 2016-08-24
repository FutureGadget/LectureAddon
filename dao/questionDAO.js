var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lectureaddon');
var db = mongoose.connection;
db.once('open', function(){console.log('connected')});

var questionSchema = mongoose.Schema({
		writer: String,
		title: String,
		content: String
	});

var Question = mongoose.model('Question', questionSchema);

var dao = {};

dao.write = function(data) {
	var item = new Question({
		writer: data.writer,
		title: data.title,
		content: data.content
	});
	item.save();
};

module.exports = dao;