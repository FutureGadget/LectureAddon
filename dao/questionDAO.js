var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/lectureaddon');

var db = mongoose.connection;
db.on('error', function (err) {
	console.log('connection error', err);
});

db.once('open', function () {
	console.log('connected.');
});


var dao = {};

dao.write = function(data) {
	var questionSchema = mongoose.Schema({
		writer: String,
		title: String,
		content: String
	});
	var Question = mongoose.model('Question', questionSchema);
	var item = new Question({
		writer: data.writer,
		title: data.title,
		content: data.content
	});
	console.log(item);
	item.save(function(err, imo){
		if (err) return console.error(err);
		console.log(item+' has been saved in the DB.');
	});
};
module.exports = dao;