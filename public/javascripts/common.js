// returns url
function getUrl(name) {
	return 'http://localhost:3000' + name;
}

// Page information

/**
 * How to use 'changeData'?
 * Page Change Handler must use the 'changeData' to
 * complete the page with the necessary data transferred from 
 * the server.
 *
 * The 'changeData' must be loaded by an AJAX request before
 * calling the following page change function:
 * $(':mobile-pagecontainer')
 * 	.pagecontainer('change','url',{ 'options' });
 */
var Page = function() {};

Page.prototype.setChangeData = function(data) {
	this.changeData = data;
}

Page.prototype.getChangeData = function() {
	return this.changeData;
}

var pageInfo = new Page();