var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
		writer: String,
		title: String,
		content: String
	});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;