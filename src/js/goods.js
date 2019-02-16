$(function() {
	//判断用户是否登录
	var username = cookie.get('username');
	var P_nav = $('.mainBtmWrap .goodsDetailWrap .P_nav');
	var p_nav = P_nav.offset().top;
	$(window).on('scroll', function() {
		//侧栏
		if($(window).scrollTop() >= 210) {
			$('#r-aside').css('position', 'fixed').css('top', '65px');
		} else {
			$('#r-aside').css('position', 'absolute').css('top', '210px');
		}
		//	手机购物app吸顶
		if($(window).scrollTop() >= p_nav) {
			P_nav.addClass('P_navFix');
		} else {
			P_nav.removeClass('P_navFix');
		}
	});

	

	//comboRecbox  优惠/相关
	$('#comboRecbox .n-combotab').on('click', '#youhui', function() {
		$('#comboRecbox .n-combotab li').removeClass('active');
		$('#comboRecbox .n-combotab #youhui').addClass('active');
		$('#comboRecbox .c-box .c-l-box').css('display', 'none');
		$('#comboRecbox .c-box .youhui').css('display', 'block');
	});
	$('#comboRecbox .n-combotab').on('click', '#xiangguan', function() {
		$('#comboRecbox .n-combotab li').removeClass('active');
		$('#comboRecbox .n-combotab #xiangguan').addClass('active');
		$('#comboRecbox .c-box .c-l-box').css('display', 'none');
		$('#comboRecbox .c-box .xiangguan').css('display', 'block');
	});

	//商品详情展开
	var goodstogglebtn = true;
	$('#goodstoggle').on('click', function() {
		if(goodstogglebtn) {
			goodstogglebtn = !goodstogglebtn;
			$('#goodsDetail .goods_parameter').css('height', '130px');
			$('#goodstoggle .txt').text('收起');
			$('#goodstoggle  .g-icon img').attr('src', '../img/g-up.png');
		} else {
			goodstogglebtn = !goodstogglebtn;
			$('#goodsDetail .goods_parameter').css('height', '61px');
			$('#goodstoggle .txt').text('展开');
			$('#goodstoggle  .g-icon img').attr('src', '../img/g-down.png');
		}
	});

	//评论图片查看
	var pickcheck = true;
	$('#userRating .commcnt').on('click', 'li .pic_list .pic_item', function() {
		if(pickcheck) {
			pickcheck = !pickcheck;
			$(this).addClass('z-open').parent().next().css('display', 'block');
		} else {
			pickcheck = !pickcheck;
			$(this).removeClass('z-open').parent().next().css('display', 'none');
		}
	})
	//评论和商品的转换
	$('.goodsDetailWrap .P_nav').on('click', '.xiangqing', function() {
		$('.goodsDetailWrap .P_nav span').removeClass('active');
		$(this).addClass('active');
		$('.goodsDetailWrap .spdisplay').css('display', 'block');
		$(window).scrollTop($('.goodsDetailWrap').offset().top);
	})
	$('.goodsDetailWrap .P_nav').on('click', '.pingjia', function() {
		$('.goodsDetailWrap .P_nav span').removeClass('active');
		$(this).addClass('active');
		$('.goodsDetailWrap .spdisplay').css('display', 'none');
		$(window).scrollTop($('.goodsDetailWrap').offset().top);
	})

	//数量控制  加减
	//加
	$('.ctrnum-wrap').on('click', '.plus', function() {
		var val = $(this).prev().val();
		val++;
		$(this).prev().val(val)
	})
	//减
	$('.ctrnum-wrap').on('click', '.minus', function() {
		var val = $(this).next().val();
		val = --val > 0 ? val : 1;
		$(this).next().val(val)
	})
	//添加购物车
	//查询是否有该商品
	$('#toshoppcart').on('click', function() {
		addCart();
	})
	$('.aAddCart').on('click',function(){
		addCart();
		
	})
	//加入购物车
	function addCart() {
		var number = $('.ctrnum-qty').val() * 1;
		var gid = $('.product-title').children().attr('data-id');
		$.ajax({
			type: "get",
			url: "../api/main.php",
			data: {
				a: 'selCart',
				username: username,
				gid: gid,
				sqlname: 'cart'
			},
			success: function(str) {
				var arr = JSON.parse(str);
				console.log(arr);
				if(!arr.code) {
					$.ajax({
						type: "get",
						url: "../api/main.php",
						data: {
							a: 'insertCart',
							username: username,
							gid: gid,
							sqlname: 'cart',
							number: number
						},
						success: function(str) {
							var arr = JSON.parse(str);
							console.log(arr);
							checkSql();
						},
						async: true
					});
				} else {
					var arr2 = arr.data.list[0];
					number = number + arr2.number * 1;
					var sum = number * arr2.newprice;
					udSql('number', number);
					udSql('sum', sum);
				}
			},
			async: true
		});
	}

	function udSql(name, number) {
		$.ajax({
			type: "get",
			url: "../api/main.php",
			data: {
				sqlname: 'cart',
				a: 'reSetCart',
				username: username,
				gid: gid,
				changeName: name,
				changeNumber: number
			},
			async: true
		});
	}
	//数据渲染
	var html = location.search.slice(1);
	var arr = html.split('=');
	var gid = arr[1];
	$.ajax({
		type: "get",
		url: "../api/main.php",
		data: {
			a: 'select',
			sqlname: 'goods',
			gid: gid
		},
		success: function(str) {
			var arr = JSON.parse(str);
			var arr2 = arr.data.list[0];
			console.log(arr2);
			$('.imgdet img').attr('src','../'+arr2.bigimg);
			//产地渲染
			var chandi = `<img src="../${arr2.areaimg}" alt="" />
							<span>${arr2.area}</span>
							<span class="split">|</span>
							<a href="javascript:;">
								${arr2.brand}
							</a>`;
			$('.orig-country').html(chandi);
			//名字渲染
			var goodsname = `<span data-id="${arr2.gid}">${arr2.goodname}</span>`;
			$('.product-title').html(goodsname);
			//具体价格 渲染
			var priceHtml = `<span class="m-line-title m-price-title">售价</span>
								<div class="m-price-cnt">
									<span class="PInfo_r currentPrice">
										￥<span>${arr2.newprice}</span>
									</span>
									<span class="PInfo_r addprice">
										参考价格 ￥<span>${arr2.oldprice}</span>
									</span>
								</div>`;
			$('.m-price').html(priceHtml);
		},
		async: true
	});
})