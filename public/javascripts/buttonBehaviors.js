var socket = io.connect(getUrl(''));

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
    var item = a.clone()
    .append($('<h3></h3>').text(data.title))
    .append($('<span></span>').attr('class', 'ui-li-count').text('0'));
    var splitbutton = a.clone();
    if (removable) {
        splitbutton.attr('data-icon', 'delete');
    } else {
        splitbutton.attr('data-icon', 'star');
    }

    item.on("click", function() {
        $.ajax({
            url: getUrl('/readQuestion'),
            dataType: 'json',
            data: {
                id: data._id
            },
            type: 'GET',
            success: function(data) {
                pageInfo.setChangeData(data);
                $(":mobile-pagecontainer")
                .pagecontainer('change', getUrl('/question.html'), {
                    role: 'page'
                });
            }
        });
    });

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
        url: getUrl('/qsubmit'),
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
        url: getUrl('/comment'),
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
        sp.attr('data-icon', 'delete');
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