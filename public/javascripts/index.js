/**
 * Created by Gunhwi on 2016-08-17.
 */

$('.tab a').on('click', function(e) {

	e.preventDefault();

	$(this).parent().addClass('active');
	$(this).parent().siblings().removeClass('active');

	target = $(this).attr('href');

	$('.tab-content > div').not(target).hide();

	$(target).fadeIn(600);

});

/**
 * Sign up AJAX request.
 * ACCEPTED : '가입되었습니다!'
 * DENIED : '이미 가입된 회원입니다.'
 */
function signup() {
	$.ajax({
		url: 'http://localhost:3000/join',
		dataType: 'json',
		type: 'POST',
		data: {
			name: $('#name').val(),
			email: $('#email').val(),
			passwd: $('#join_passwd').val(),
			authority: $('input[name=choice]:checked').val()
		},
		success: function(data) {
			if (data.success) {
				window.alert('가입되었습니다!');
				$('#name').val('');
				$('#email').val('');
				$('#join_passwd').val('');
				$('a[href=#signin]').click();
			} else {
				window.alert('이미 가입된 회원입니다.');
				$('#email').focus().select();
			}
		},
		error: function (err) {
			console.log(err);
		}
	});
}