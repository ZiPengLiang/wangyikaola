$(function() {
	$('#topCats').hover(function() {
		$('.catitmlst').css('display', 'block');
	}, function() {
		$('.catitmlst').css('display', 'none');
	})
	//判断用户是否登录
	var username = cookie.get('username');

	//地址展开
	$('.iptw').on('click', function() {
		$('.addrbox').toggle()
	})
	//地址选项卡
	$('.addrbox').on('click', '.addrclose', function() {
		$('.addrbox').css('display', 'none')
	});
	$('.addrbox .tt').on('click', '#shengfeng', function() {
		var _this = $(this);
		addrtoggle(_this);
		$('#sfbox').css('display', 'block');
	});
	$('.addrbox .tt').on('click', '#city', function() {
		var _this = $(this);
		addrtoggle(_this);
		$('#citybox').css('display', 'block');
	});
	$('.addrbox .tt').on('click', '#xianqu', function() {
		var _this = $(this);
		addrtoggle(_this);
		$('#xianqubox').css('display', 'block');
	});

	function addrtoggle(_this) {
		$('.addrbox .tt li').removeClass('addractive');
		$(_this).addClass('addractive');
		$('.addrbox .abox').css('display', 'none');
	}
	//关税提示
	$('.my-goods').on('mousemove', '.ask', function() {
		$(this).parent().next().css('display', 'block');
	});
	$('.my-goods').on('mouseout', '.ask', function() {
		$('.my-goods').on('mousemove', '.ans', function() {
			$(this).css('display', 'block');
		});
		$('.my-goods').on('mouseout', '.ans', function() {
			$(this).css('display', 'none');
		});

	})
	//u-ck checkbox
	$('.cartmain').on('click', '.u-ck', function() {
		if($(this).prop('checked') == true) {
			$(this).addClass('u-ck2');
		} else {
			$(this).removeClass('u-ck2');
		}
	})
	//获取数据库信息
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
			var arr2 = arr.data.list;
			console.log(arr2)
			var uHtml = arr2.map(function(item) {
				return `<li class="goodsitem" data-id="${item.gid}">
									<div class="g-col g-col1">
										<input type="checkbox" class="u-ck goodschoose"/>
									</div>
									<div class="g-col g-col2">
										<a href="goods.html?gid=${item.gid}" class="imgwrap">
											<img src="../${item.littleimg}" alt="" />
										</a>
										<div class="txtwrap">
											<h3 class="goodtil">
												<a href="goods.html?gid=${item.gid}" title="${item.goodname}">
													${item.goodname}
												</a>
											</h3>
											<p class="returninfo" title="支持7天无忧退货">
												<img src="../img/txtwrap-7tian.png" alt="" />
												<span>支持7天无忧退货</span>
											</p>
										</div>
									</div>
									<div class="g-col g-col3">
										<del class="oldprice">${item.oldprice}</del>
										<span class="newprice">${item.newprice}</span>
									</div>
									<div class="g-col g-col4">
										<span class="minus algorithm">-</span>
										<input type="text" class="ipt" value="${item.number}" min="1" />
										<span class="plus algorithm">+</span>
									</div>
									<div class="g-col g-col5">
										<span class="sum">${item.sum}</span>
										<p class="taxrow">
											<i class="ask">?</i>
											<span class="u-taxval">预计税费￥<span class="shuifei">${item.shuifei}</span> </span>
										</p>
										<div class="ans">
											<span class="b-shanjiao"></span>
											<span class="s-shanjiao"></span>
											<a href="">税费 = 购买单价 * 件数 * 税负率</a>
											<p>实际结算税费请以提交订单时的税费明细为准</p>
										</div>
									</div>
									<div class="g-col g-col6">
										<span class="u-opt del">删除</span>
										<span class="u-opt tomyCollection">移入我的收藏</span>
									</div>
								</li>`
			}).join('');
			$('.my-goods').html(uHtml);
		},
		async: true
	});
	//加减
	$('.my-goods').on('click', '.plus', function() {
		var val = $(this).prev().val();
		val++;
		$(this).prev().val(val);
		goodprice($(this))
	});
	$('.my-goods').on('click', '.minus', function() {
		var val = $(this).next().val();
		val--;
		if(val <= 0) {
			val = 1;
		}
		$(this).next().val(val);
		goodprice($(this))
	})
	//input直接输入
	$('.my-goods').on('input','li .ipt',function(){
		console.log($(this).val())
		var inputNum = $(this).val()>0 ?$(this).val() :1;
		$(this).val(inputNum);
		goodprice($(this))
	})
	//点击选取商品
	$('.my-goods').on('click', '.goodschoose', function() {
		sumPrice();
	});
	//全选
	$('#selectAll').on('click', function() {
		if($(this).prop('checked')) {
			$('.goodschoose').prop('checked', 'checked').addClass('u-ck2');
		} else {
			$('.goodschoose').prop('checked', '').removeClass('u-ck2');
			$('#selectall').prop('checked', '').removeClass('u-ck2');
		}
		sumPrice()
	})
	$('#selectall').on('click', function() {
		if($(this).prop('checked')) {
			$('.goodschoose').prop('checked', 'checked').addClass('u-ck2');
		} else {
			$('.goodschoose').prop('checked', '').removeClass('u-ck2');
			$('#selectAll').prop('checked', '').removeClass('u-ck2');
		}
		sumPrice()
	})
	//删除单行
	$('.my-goods').on('click','.del',function(){
		$(this).parents('.goodsitem').remove();
		var gid = $(this).parents('.goodsitem').attr('data-id');
		delCart(username,gid);
		sumPrice();
	});
	//删除选中全部
	$('.opt').on('click',function(){
		for(var i = arr.length-1;i>=0;i--){
			var gid = $('.goodschoose').eq(arr[i]).parents('.goodsitem').attr('data-id');
			$('.goodschoose').eq(arr[i]).parents('.goodsitem').remove();
			delCart(username,gid);
		}
		sumPrice();
	})
	//数据库删除
	function delCart(username,gid){
		$.ajax({
			type:"get",
			url:"../api/main.php",
			data:{
				a:'delete',
				sqlname : 'cart',
				username : username,
				gid :gid
			},
			success:function(str){
				checkSql();
			},
			async:true
		});
	}
	//单件商品总价  单价*数量
	function goodprice(now) {
		
		var price = now.parent().prev().children('.newprice').text() * 1;
		var num = now.parent().find('input').val() * 1;
		var sum = price * num;
		now.parent().next().children('.goodsitem .sum').html('' + sum.toFixed(2));
		var gid = now.parents('.goodsitem').attr('data-id');
		sumPrice();
		//数据库数据更新
		updataSql(gid,'number',num);
		updataSql(gid,'sum',sum);
	}
	//数据库数据更新
	function updataSql(gid,name,number) {
		$.ajax({
			type: "get",
			url: "../api/main.php",
			data: {
				a: 'reSetCart',
				sqlname: 'cart',
				username: username,
				gid: gid,
				changeName: name,
				changeNumber: number
			},
			async: true
		});
	}
	//总价
	var arr = [];
	function sumPrice() {
		arr = [];
		var iLength = $('.g-col1 input').length;
		for(var i = 0; i < iLength; i++) {
			if($('.g-col1 input').eq(i).prop('checked')) {
				arr.push(i);
			}
		}
		if(arr.length){
			$('.gobuy').removeClass('z-disable')
		}else{
			$('.gobuy').addClass('z-disable')
		}
		if(arr.length == iLength) {
			$('#selectAll').prop('checked', 'checked').addClass('u-ck2');
			$('#selectall').prop('checked', 'checked').addClass('u-ck2');
		}
		var sum = 0;
		var num = 0;
		var shuifei = 0;
		for(let i = 0; i < arr.length; i++) {
			num += $('.goodsitem .ipt').eq(arr[i]).val() * 1;
			sum += $('.goodsitem .sum').eq(arr[i]).text() * 1;
			console.log($('.goodsitem .sum').eq(arr[i]).text())
			shuifei += $('.shuifei').eq(arr[i]).text()*1;
		}
		//商品数量
		$('.allgoods .goodsnum').html(num);
		//税费
		$('.cartinfo .sf').html('￥' + shuifei.toFixed(2));
		$('.totalbox .allmoney .sf').html('商品税费（不含运费税）:￥ ' + shuifei.toFixed(2));
		//总价
		$('.allgoods .goodssum').html('￥' + sum.toFixed(2));
		$('.cartinfo .totalnum').html('￥' + sum.toFixed(2));
		$('.totalbox .allmoney .sum').html('商品应付总计：￥  ' + sum.toFixed(2));
	}
})