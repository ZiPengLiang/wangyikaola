$(function() {
	$('.top').on('click', '#p-login', function() {
		$('.name').removeClass('active');
		$('.phone').addClass('active');
		$('.l-div').css('display', 'none');
		$('.p-login').css('display', 'block')
	});
	$('.top').on('click', '#e-login', function() {
		$('.name').removeClass('active');
		$('.user').addClass('active');
		$('.l-div').css('display', 'none');
		$('.e-login').css('display', 'block')
	});
	$('input').on('focus', function() {
		$(this).parent().css('border-color', 'rgb(74,175,233)');
	}).on('blur', function() {
		$(this).parent().css('border-color', '#ccc');
	});

	//登录
	$('#emailbtn').on('click', function() {
		var user = $('#email').val();
		var psw = $('#password').val();
		var freelogin = $('#echeckbox').prop('checked');
		if(user.trim() && psw.trim()) {
			$.ajax({
				type: "get",
				url: "../api/main.php",
				data: {
					sqlname: 'user',
					a: 'login',
					username: user,
					password: psw
				},
				success: function(str) {
					var arr = JSON.parse(str);
					console.log(arr)
					if(arr.code){
						var pro = {};
						if(freelogin){
							var d = new Date();
							d.setDate(d.getDate()+10);
							pro={
								expires:d,
								path:'/'
							};
						}
						var arr2 =arr.list[0];
						console.log(arr2)
						cookie.set('username',arr2.username,pro);
						cookie.set('id',arr2.id,pro);
						location.href = '../index.html'
					}else{
						$('.form-main .ps').css('color','red').text(arr.message);
					}
				},
				async: true
			});
		}else{
			$('.form-main .ps').css('color','red').text('邮箱名或密码为空');
		}

	})

})