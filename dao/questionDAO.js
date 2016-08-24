var Question = require('../model/QuestionModel');

var dao = {};

dao.write = function(data) {
	var res;
	var item = new Question({
		writer: data.writer,
		title: data.title,
		content: data.content
	});
	item.save(function(err, result){
		if (err) return console.error(err);
		else {
			res = result;
		}
	});
	return res;
};
module.exports = dao;