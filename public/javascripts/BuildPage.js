/**
 * Build Question Page's data
 * data.title : title of the question
 * data.content : content
 * data.comments : comments (array type, comments[i].writer, 
 *  comments[i].content)
 * data.currentUser : current user's id which is stored in the
 * server session.
 */
function buildQuestionPage() {
	var data = pageInfo.getChangeData();
	$("#question_header h1").text(data.title);
	var h1 = $("<h1></h1>").text(data.title);
	var p = $("<p></p>").text(data.content);
	var ul = $("<ul></ul>");
	for (var i = 0; i < data.comments.length; ++i) {
		var a = $("<a></a>").text(data.comments[i].writer+":"
			+data.comments[i].content);
		var a2 = $("<a></a>");
		if (data.currentUser == data.comments[i].writer) {
			a2.attr("data-icon","delete");
		}
		var li = $("<li></li>");
		li.append(a); li.append(a2);
		ul.append(li);
	}
	$("#content").append(h1);
	$("#content").append(p);
	$("#content").append(ul);
}

function buildLecturePage() {

}