var Question = require('../model/userModel');

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