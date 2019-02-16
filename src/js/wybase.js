$(function() {
	if(cookie.get('username')) {
		$('.log').css('display', 'none');
		$('.yc').css('display', 'block');
		$('.username').html(cookie.get('username'));
	}
	//退出
	$('#logout').on('click', function() {
		$('.log').css('display', 'block');
		$('.yc').css('display', 'none');
		cookie.remove('username');
		cookie.remove('id');
		location.href = 'login.html'
	});
	//二級菜單
	$('#topCats').hover(function() {
		$('.catitmlst').css('display', 'block');
	}, function() {
		$('.catitmlst').css('display', 'none');
	});
	//置顶
	$('.toTop').on('click', function() {
		$(window).scrollTop(0);
	});
	checkSql();
	
})
//查询数据库中有多少种商品
function checkSql() {
	var username = cookie.get('username');
	$.ajax({
		type: "get",
		url: "../api/main.php",
		data: {
			a: 'getCart',
			sqlname: 'cart',
			username: username
		},
		success: function(str) {
			var arr = JSON.parse(str);
			if(arr.data.shuliang > 0) {
				$('#docHeadWrap .goodsnumber').css('display', 'inline-block').text(arr.data.shuliang);
				$('.shangpingshuliang').css('display', 'inline-block').text(arr.data.shuliang);
			} else {
				$('#docHeadWrap .goodsnumber').css('display', 'none')
				$('.shangpingshuliang').css('display', 'none')
			}
		},
		async: true
	});
}