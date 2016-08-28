$(document).ready(function(event){
	var regex = /(.*)(\/.*)/;
	$(":mobile-pagecontainer").on("pagecontainerbeforehide",
		function(event, ui){
			var match = regex.exec(event.currentTarget.baseURI);
			if (match[2] == '/question.html') {
				buildQuestionPage();
			} else if (match[2] == '/lecture.html') {
				buildLecturePage();
			}
		});
});