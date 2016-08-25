var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
		writer: String,
		title: String,
		content: String
	});

module.exports = mongoose.model('Question', questionSchema);