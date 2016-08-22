/*
 Change "질문하기" button to "취소하기" button and add the submit button when the "질문하기" button is clicked
 and slide down the input form.

 Remove the "취소하기" button when clicked and close the input form.
 */
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
            // To do
            // Process user submission
        })
    } else {
        changeButtonIcon($("#cbutton"), 'myIcon', 'delete', '질문하기')
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

/*
 Apply jqueryte
 */
$(".textEditor").jqte();