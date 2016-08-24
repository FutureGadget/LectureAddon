var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
		writer: String,
		title: String,
		content: String,
		comment: []
	});

module.exports = mongoose.model('Question', questionSchema);