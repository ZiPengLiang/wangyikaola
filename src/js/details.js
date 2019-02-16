$(function() {
	//侧栏
	$(window).on('scroll', function() {
		if($(window).scrollTop() >= 210) {
			$('#r-aside').css('position', 'fixed').css('top', '65px');
		} else {
			$('#r-aside').css('position', 'absolute').css('top', '210px');
		}
	})
	//u-ck checkbox
	$('.u-ck').on('click', function() {
		if($(this).prop('checked') == true) {
			$(this).css('background-position', '0 0');
		} else {
			$(this).css('background-position', '0 -48px');
		}
	})
	//跳转
	
	$('#result').on('click','li a',function(){
		var d_id = $(this).parents('.goods').attr('data-id');
		location.href='goods.html?gid='+d_id;
	})
	//数据渲染
	function shujuxuanran(jsonarr, fn) {
		$.ajax({
			type: "get",
			url: "../api/main.php",
			data: jsonarr,
			success: function(str) {
				var arr = JSON.parse(str);
				fn(arr);
			},
			async: true
		});
	}
	var jsona = {
		a: 'getList',
		sqlname: 'goods',
		page: 1,
		qty: 40
	}
	shujuxuanran(jsona, function(arr) {
		xuanran(arr);
		page(arr.data.pages, arr.data.page)
	})
	//排序
	var newpricedoa = true;
	var salesdoa = true;
	var sortType = 'gid';
	var jiagebtn = false;
	$('#order .order').on('click', 'dd', function() {
		$('#order .order .arrow').css('display', 'none');
		$('#order .order .jtag').removeClass('active');
		$(this).addClass('active');
		sortType = $(this).attr('id');
		sort();
	})
	//价格范围
	//清除价格
	$('.m-priceBox .priceInputs').on('click', '.clearbtn', function() {
		$('.m-priceBox .priceInputs input').val('');
	})
	//确认价格范围
	$('.m-priceBox .priceInputs').on('click', '.btnconfirm', function() {
		jiagebtn = true;
		sort();
	})
	//
	$('.otherC').on('click',function(){
		sort();
	})
	function sort() {
		var DOA = 'desc';
		var type = '';
		var str = [];
		//判断条件是否被选择
		if($('#kaola').prop('checked') == true) {
			str.push("kaola ='y'");
		}
		if($('#youhuo').prop('checked') == true) {
			str.push("number >0");
		}
		if($('#cuxiao').prop('checked') == true) {
			str.push("chuxiao ='y'");
		}
		if($('#gongchangdian').prop('checked') == true) {
			str.push("gongchangdian ='y'");
		}
		if($('.m-priceBox .priceInputs .max_money').val() * 1) {
			var maxm = $('.m-priceBox .priceInputs .max_money').val() * 1;
			var minm = $('.m-priceBox .priceInputs .min_money').val() * 1 ? $('.m-priceBox .priceInputs .min_money').val() * 1 : 0;
			if(jiagebtn) {
				if(maxm > minm) {
					var fanwei = 'newprice BETWEEN '+minm+' and '+maxm;
					str.push(fanwei);
				}
			}
		}

		console.log(str)
		if(sortType == 'newgoods') {
			type = 'gid';
			str.push("newgoods ='y'");
		} else {
			type = sortType;
		}
		if(sortType == 'sales') {
			$('#sales .arrow').css('display', 'block');
			if(salesdoa) {
				DOA = 'desc';
				$('#sales .arrow').removeClass('arrow_up');
			} else {
				DOA = 'asc';
				$('#sales .arrow').addClass('arrow_up')
			}
			salesdoa = !salesdoa;
		}
		if(sortType == 'newprice') {
			$('#newprice .arrow').css('display', 'block');
			if(newpricedoa == true) {
				DOA = 'desc';
				$('#newprice .arrow').removeClass('arrow_up');
			} else {
				DOA = 'asc';
				$('#newprice .arrow').addClass('arrow_up')
			}
			newpricedoa = !newpricedoa;
		}
		var where = str.join(' and ');
		jsona = {
			a: 'sort',
			sqlname: 'goods',
			page: 1,
			qty: 40,
			type: type,
			where: where,
			DOA: DOA
		}
		shujuxuanran(jsona, function(arr) {
			console.log(arr)
			xuanran(arr);
			page(arr.data.pages, arr.data.page)
		})
	}
	//页码跳转
	var pageactive = 1;
	$('#pageNum').on('click', 'span', function() {
		if($(this).text() == '上一页') {
			if(pageactive > 1) {
				pageactive--;
			}
		} else if($(this).text() == '下一页') {
			if(pageactive < $('#pageNum span').length - 2) {
				pageactive++;
			}
		} else {
			pageactive = $(this).text() * 1;
		}
		jsona.page = pageactive;
		shujuxuanran(jsona, function(arr) {
			xuanran(arr);
			page(arr.data.pages, arr.data.page);
			$(window).scrollTop(0);
		})

	})

	//页码渲染
	function page(num, nowpage) {
		var splitPagesHtml = '';
		if(nowpage == 1) {
			splitPagesHtml = `<span class="upage unsacitve">上一页</span>`;
		} else {
			splitPagesHtml = `<span class="upage sacive">上一页</span>`
		}
		for(var i = 1; i <= num; i++) {
			if(i == nowpage) {
				splitPagesHtml += `<span class="page active">${i}</span>`;
			} else {
				splitPagesHtml += `<span class="page ">${i}</span>`;
			}
		}
		if(nowpage == num) {
			splitPagesHtml += `<span class="npage unsacitve">下一页</span>`;
		} else {
			splitPagesHtml += `<span class="npage sacive">下一页</span>`;
		}
		$('#pageNum').html(splitPagesHtml)
	}
	//列表渲染
	function xuanran(arr) {
		var resultHtml = '';
		for(let i = 0; i < arr.data.list.length; i++) {
			var arr2 = arr.data.list[i];
			var saelsinfohtml = '';
			if(arr2.kaola == 'y') {
				saelsinfohtml += `<span class="activity ziying">自营</span>`;
			}
			saelsinfohtml += `<span class="activity">99选3</span>
							<span class="activity">包税</span>
							<span class="activity">白条优惠</span>`;
			resultHtml += `<li class="goods" data-id="${arr2.gid}">
									<div class="goodswrap">
										<a href="javascript:;">
											<div class="img">
												<img src="../${arr2.bigimg}" alt="" />
												<img class="ranksTap" src="../img/baitiao.png" alt="" />
											</div>
										</a>
										<div class="desc clearfix">
											<p class="goodsprice">
												<span class="cur">
													<i>￥</i>${arr2.newprice}
												</span>
												<span class="oldprice">
													￥<del>${arr2.oldprice}</del>
												</span>
											</p>
											<a class="title" title="${arr2.goodname}" href="javascript:;">
												<h2>${arr2.goodname}</h2>
											</a>
											<p class="saelsinfo">
												${saelsinfohtml}
											</p>
											<p class="goodsinfo clearfix">
												<a href="javascript:;">
													<span class="icon"></span> ${arr2.comment}
												</a>
												<span class="proPlace">日本</span>
											</p>
											<p class="selfflag">
												<span>${arr2.brand}</span>
											</p>
										</div>
									</div>
								</li>`;

		}
		$('#result').html(resultHtml);
	}
})