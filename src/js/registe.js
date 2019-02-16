$(function() {
	$('input').on('focus', function() {
		$(this).parent().css('border-color', 'rgb(74,175,233)');
	}).on('blur', function() {
		$(this).parent().css('border-color', '#ccc');
	});

	//验证用户名
	var userok = false;
	var pswok =false;
	$('.reg').on('blur', '#email', function() {
		var usercheck = checkReg.email($('#email').val());
		if(usercheck) {
			$.ajax({
				type: "get",
				url: "../api/main.php",
				data: {
					sqlname: 'user',
					a: 'verifyUserName',
					username: $('#email').val()
				},
				success: function(str) {
					var arr = JSON.parse(str);
					if(!arr.code) {
						userok = true;
						$('.form-main .ps').css('color', 'green');
					} else {
						userok = false;
						$('.form-main .ps').css('color', 'red');
					}
					$('.form-main .ps').html(arr.message);
				},
				async: true
			})
		}
	})
	
	//密码验证
	$('.u-psw').on('blur', '#password', function() {
		var pswlevel = checkReg.pword($('#password').val());
		if(pswlevel>0){
			pswok = true;
		}else{
			pswok = false;
		}
	});
	
	//注册
	$('#btn').on('click',function(){
		var user = $('#email').val();
		var psw = $('#password').val();
		var checkok=$('#echeckbox').prop('checked');
		if(userok&&pswok&&checkok){
			$.ajax({
				type:"get",
				url:"../api/main.php",
				data:{
					sqlname: 'user',
					a: 'reg',
					username: user,
					password:psw
				},
				success:function(str){
					var arr = JSON.parse(str);
					console.log(arr)
					if(arr.code) {
						alert('注册成功');
						location.href ='login.html'
					} else {
						userok = false;
						$('.form-main .ps').css('color', 'red');
					}
				},
				async:true
			});
		}
	})

})