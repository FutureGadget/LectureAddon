var Question = require('../model/QuestionModel');
var dao = {};
dao.write = function(data) {
	var item = new Question({
		writer: data.writer,
		title: data.title,
		content: data.content
	});
	return item.save(); // return a promise
};

module.exports = dao;