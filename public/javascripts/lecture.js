var socket = io.connect('http://localhost:3000');

/**
 * Broadcast listview chnages to other clients
 * for syncronization.
 */
socket.on('add question', function(data) {
    addQuestion(data, false);
});

/**
 * Add newly submitted quesitons to the list
 */
function addQuestion(data, removable) {
    var parent = $('#qlist');
    var li = $('<li></li>');
    var a = $('<a></a>');
    var item = a.clone().attr('id',data._id).attr('href','question.html?id='+data._id)
        .append($('<h3></h3>').text(data.title))
        .append($('<span></span>').attr('class','ui-li-count').text('0'));
    var splitbutton = a.clone();
    if (removable) {
        splitbutton.attr('data-icon', 'delete');
    } else {
        splitbutton.attr('data-icon', 'star');
    }
    li.append(item);
    li.append(splitbutton);
    parent.prepend(li);
    parent.listview('refresh');
}
/*
 Change "질문하기" button to "취소하기" button and add the submit button when the "질문하기" button is clicked
 and slide down the input form.

 Remove the "취소하기" button when clicked and close the input form.
 */

// $.ajax({
//     url: 'http://localhost:3000/qsubmit',
//     dataType: 'jsonp',
//     jsonp: 'callback',
//     type: 'GET',
//     data: qdata,
//     success: function(data) { // data returned from the server (dao). The data must contain id field.
//         addQuestion(data, true);
//         socket.emit('add question', data);
//     }
// });

/*
 Change the button's text and icon.
 Returns the changed button.
 */
function changeButtonIcon(button, newIcon, oldIcon, text) {
    button.text(text);
    button.attr("data-icon", newIcon);
    button.addClass('ui-icon-'+newIcon).removeClass('ui-icon-'+oldIcon);
    return button;
}

/*
 Apply jqueryte
 */
$(".textEditor").jqte();