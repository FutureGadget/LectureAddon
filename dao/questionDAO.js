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

dao.read = function(data) {
	var query = Question.where({
		_id: data.id
	});

	return query.findOne();
}

module.exports = dao;