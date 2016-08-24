/*
 Apply jqueryte
 */
$(".textEditor").jqte();

$("#qbutton").on("click", function() {
    $("#qform").slideToggle();
    if ($("#qform").attr("class")=='hidden') {
        changeButtonIcon($("#qbutton"), 'delete', 'myIcon', '취소')
            .attr("id", "cbutton")
            .css("width", "44%");
        $("#qform").attr("class","visible");

        var button = $("#cbutton").clone();
        changeButtonIcon(button, 'check', 'delete', '제출')
            .attr("id", "sbutton")
        $("#cbutton").before(button);
        button.on("click",function(){
            var qdata = {
                title: $('#qtitle').val(),
                content: $('.textEditor').val()
            };
            $.ajax({
                url: 'http://localhost:3000/comment',
                dataType: 'jsonp',
                jsonp: 'callback',
                type: 'GET',
                data: qdata,
                success: function(data) { // data returned from the server (dao). The data must contain id field.
                    
                }
            });
            $('#qtitle').val('');
            $('.textEditor').jqteVal('');
            $('#cbutton').click();
        });
    } else {
        changeButtonIcon($("#cbutton"), 'myIcon', 'delete', '댓글달기')
            .attr("id", "qbutton")
            .css("width", "100%");
        $("#qform").attr("class","hidden");
        $("#sbutton").remove();
    }
});

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