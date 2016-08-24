var socket = io.connect('http://localhost:3000');

/**
 * Broadcast listview chnages to other clients
 * for syncronization.
 */
socket.on('add question', function(data) {
    addQuestion(data, false);
});

socket.on('add comment', function(data) {
    addComment(data, false);
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

function ask() {
    $("#lecture_footer .textEditor").jqte();
    $("#lecture_footer form").slideToggle();
    $("#lecture_footer #bAsk").css("display", "none");
    $("#lecture_footer #bSubmit").css("display", "block");
    $("#lecture_footer #bCancel").css("display", "block");
}

function closeQuestion() {
    $("#lecture_footer form").slideToggle();
    $("#lecture_footer #bAsk").css("display", "block");
    $("#lecture_footer #bSubmit").css("display", "none");
    $("#lecture_footer #bCancel").css("display", "none");
    $("#lecture_footer .textEditor").jqte();
}

function closeComment() {
    $("#question_footer form").slideToggle();
    $("#question_footer #bComment").css("display", "block");
    $("#question_footer #bSubmit").css("display", "none");
    $("#question_footer #bCancel").css("display", "none");
    $("#question_footer .textEditor").jqte();
}

function comment() {
    $("#question_footer .textEditor").jqte();
    $("#question_footer form").slideToggle();
    $("#question_footer #bComment").css("display", "none"); 
    $("#question_footer #bSubmit").css("display", "block");
    $("#question_footer #bCancel").css("display", "block");
}

function submitQuestion() {
    $.ajax({
        url: 'http://localhost:3000/qsubmit',
        dataType: 'jsonp',
        jsonp: 'callback',
        type: 'GET',
        data: {
            title: $('#lecture_footer input').val(),
            content: $('#lecture_footer textarea').val()
        },
        success: function(data) {
            addQuestion(data, true);
            socket.emit('add question', data);
            $('#lecture_footer #bCancel').click(); 
            $('#lecture_footer input').val('');
            $('#lecture_footer .textEditor').val('');
        }
    });
}

function submitComment() {
    $.ajax({
        url: 'http://localhost:3000/comment',
        dataType: 'jsonp',
        jsonp: 'callback',
        type: 'GET',
        data: {
            question_id: $('#qid').text(),
            content: $('#lecture_footer textarea').val()
        },
        success: function(data) {
            socket.emit('add comment', data);
            $('#question_footer #bCancel').click();
            $('#question_footer .textEditor').val('');
        }
    });
}

function addComment(data, removable) {
    var li = $('<li></li>').attr('id', data.num);
    var a = $('<a></a>').text(data.userID + ':' + data.content);
    var sp = $('<a></a>');
    if (removable) {
        sp.attr('data-icon','delete');
    }
    li.append(a);
    li.append(sp);
    $('#commentList').append(li);
    $('#commentList').listview('refresh');
}



/*
 Apply jqueryte
 */
// $(".textEditor").jqte();