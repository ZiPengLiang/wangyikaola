$(function() {
	$(window).on('scroll', function() {
		if($(window).scrollTop() >= 140) {
			$('#topsel').css('display', 'block')
		} else if($(window).scrollTop() < 140) {
			$('#topsel').css('display', 'none')
		}
		if($(window).scrollTop() >= 700) {
			$('#l-aside').css('position', 'fixed').css('top', '65px');
			$('#r-aside').css('position', 'fixed').css('top', '65px');
		} else {
			$('#l-aside').css('position', 'absolute').css('top', '700px');
			$('#r-aside').css('position', 'absolute').css('top', '700px');
		}
	});
	$('.toTop').on('click', function() {
		$(window).scrollTop(0);
	});
	//判断用户是否登录
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
		location.href = 'html/login.html'
	});
	checkSql();

	function checkSql() {
		var username = cookie.get('username');
		$.ajax({
			type: "get",
			url: "api/main.php",
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

	//大轮播图
	var timer = null;
	var pic_num = 0;
	//渲染节点
	var spanHtml = '';
	for(var i = 0; i < $('#show_pic li').length; i++) {
		if(i == 0) {
			spanHtml = `<span class="i-pagebox active"></span>`;
		} else {
			spanHtml += `<span class="i-pagebox"></span>`;
		}

	}
	$('#img_pagebox').html(spanHtml);
	timer = setInterval(function() {
		next()
	}, 2000)

	//停止轮播图
	$('#banner_p').hover(function() {
		clearInterval(timer);
		$('#control').css('display', 'block');
	}, function() {
		timer = setInterval(function() {
			next()
		}, 2000)
		$('#control').css('display', 'none');
	})
	//焦点跟随
	function spanNow() {
		$('#img_pagebox span').removeClass('active');
		$('#img_pagebox span').eq(pic_num).addClass('active');
	}

	//通过焦点选择图片
	$('#img_pagebox').on('mouseover', 'span', function() {
		$('#show_pic li').eq(pic_num).animate({
			opacity: 0
		}, 'slow');
		pic_num = $(this).index();
		$('#show_pic li').eq(pic_num).animate({
			opacity: 1
		}, 'slow');
		spanNow();
	});

	//下一张
	$('#control').on('click', '.nextpic', function() {
		next();
	});
	//上一张
	$('#control').on('click', '.provpic', function() {
		$('#show_pic li').eq(pic_num).animate({
			opacity: 0
		}, 'slow');
		pic_num--;
		if(pic_num < 0) {
			pic_num = $('#show_pic li').length - 1;
		}
		$('#show_pic li').eq(pic_num).animate({
			opacity: 1
		}, 'slow');
		spanNow()
	});

	function next() {
		var _this = $('#show_pic li');
		pic_num = lunbotu(_this, pic_num)
		spanNow()
	}

	//輪播圖樣式
	function lunbotu(_this, num) {
		_this.eq(num).animate({
			opacity: 0
		}, 'slow');
		num++;
		if(num >= _this.length) {
			num = 0;
		}
		_this.eq(num).animate({
			opacity: 1
		}, 'slow');
		return num;
	}

	//小轮播图
	var little_lb = 0;
	var timer2 = null;
	timer2 = setInterval(littlenext, 3000)
	//暂停轮播
	$('.cnt .fixedBrandWrap').hover(function() {
		clearInterval(timer2);
		$('.cnt .fixedBrandWrap .rmtuijian').css('display', 'inline-block');
	}, function() {
		timer2 = setInterval(littlenext, 3000)
		$('.cnt .fixedBrandWrap .rmtuijian').css('display', 'none');
	})

	function littlenext() {
		var _this = $('.fixedBrand li');
		little_lb = lunbotu(_this, little_lb);
	}
	//下一张
	$('.cnt .fixedBrandWrap').on('click', '.next', function() {
		littlenext();
	})
	//上一张
	$('.cnt .fixedBrandWrap').on('click', '.prov', function() {
		$('.fixedBrand li').eq(little_lb).animate({
			opacity: 0
		}, 'slow');
		pic_num--;
		if(little_lb < 0) {
			little_lb = $('.fixedBrand li').length - 1;
		}
		$('.fixedBrand li').eq(little_lb).animate({
			opacity: 1
		}, 'slow');
	})

	//最近热卖轮播图3
	var zjrm_lbt = 0;
	var timer3 = null;
	timer3 = setInterval(remainext, 5000);
	$('.party').hover(function() {
		clearInterval(timer3);
	}, function() {
		timer3 = setInterval(remainext, 5000);
	})
	//通过焦点选定页面
	//通过焦点选择图片
	$('.img_pagebox').on('mouseover', 'span', function() {
		$('.prolist .itemgroup').eq(zjrm_lbt).animate({
			opacity: 0
		}, 'slow');
		zjrm_lbt = $(this).index();
		$('.prolist .itemgroup').eq(zjrm_lbt).animate({
			opacity: 1
		}, 'slow');
		spanfollow();
	});
	//轮播
	function remainext() {
		var _this = $('.prolist .itemgroup');
		zjrm_lbt = lunbotu(_this, zjrm_lbt);
		spanfollow();
	}
	//焦点跟随
	function spanfollow() {
		$('.img_pagebox span').removeClass('active');
		$('.img_pagebox span').eq(zjrm_lbt).addClass('active')
	}
})