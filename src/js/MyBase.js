/* 
 * @Author: liangzipeng
 * @Date:   2018-12-17 15:52:14
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-12-21 18:00:42
 */
//获取Id
function getId(baseId) {
	return document.getElementById(baseId);
}

/*
 	补零函数:toDB(num)
 	参数：num数字
 	返回值：小于10的补零返回

 */
function toDB(num) {
	//补零操作
	if(num < 10) {
		return '0' + num;
	} else {
		return '' + num;
	}
}

/*
 	秒转成时间：xx天xx时xx分xx秒   ：  -
 	setTime(num)
 		* 参数： 秒
 		* 返回值： {}数据返回(灵活一点)
 		
 */

function setTime(num) {
	//num是秒数    98876秒  有多少天： xx天xx时xx分xx秒
	var sec = toDB(num % 60); //06 秒
	var min = toDB(Math.floor(num / 60) % 60); //Math.floor(num / 60) % 60     分
	var hour = toDB(Math.floor(num / 60 / 60) % 24); //时
	var day = toDB(Math.floor(num / 60 / 60 / 24)); //天数

	return {
		secs: sec,
		mins: min,
		hours: hour,
		days: day
	}
}
//得到毫秒秒数获取时间，由1970年1月1日到现在
function secTotime(dateline) {
	var t = new Date(dateline);
	var time = t.getFullYear() + '年' + (t.getMonth() + 1) + '月' + t.getDate() + '日' + toDB(t.getHours()) + ':' + toDB(t.getMinutes()) + ':' + toDB(t.getSeconds());
	var year = t.getFullYear();
	var month = (t.getMonth() + 1);
	var day = t.getDate();
	var hours = toDB(t.getHours());
	var minutes = toDB(t.getMinutes());
	var seconds = toDB(t.getSeconds());
	return {
		year: year,
		month: month,
		day: day,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
		time: time
	}
}
//数组除重
function noReapeat(arr) {
	var res = [];
	for(var i = 0; i < arr.length; i++) {
		if(res.indexOf(arr[i]) == -1) { //判断res数组中是否已经存在arr[i]这值，如果存在则跳过，不存在则输入到res中
			res.push(arr[i]);
		}
	}
	return res;
}

//下拉菜单
function pullMenus(box, menus, ctype, boolean) {
	if(ctype == 'click') {
		//判断操作事件是点击事件还是鼠标移入事件
		box.onclick = function() {
			if(boolean == true) { //判断是处于开还是关  true代表展开中 false代表闭合中
				menus.style.display = "none";
			} else {
				menus.style.display = "block";
			}
			boolean = !boolean
		}
	} else {
		box.onmouseover = function() {
			menus.style.display = "block";
		}
		box.onmouseout = function() {
			menus.style.display = "none";
		}
	}

}

//选项卡  box-盒子  menus-菜单  className--菜单被选中后的样式  ctype--是点击事件还是鼠标移入移出事件
function setTabs(aList, aDiv, className, ctype) {
	for(var i = 0; i < aList.length; i++) {
		aList[i].index = i;
		if(ctype == 'click') {
			aList[i].onclick = function() {
				for(var j = 0; j < aList.length; j++) {
					aList[j].className = '';
					aDiv[j].style.display = 'none';
				}
				this.className = className;
				aDiv[this.index].style.display = 'block';
			}
		} else {
			aList[i].onmouseover = function() {
				this.className = className;
				aDiv[this.index].style.display = 'block';
			}
			aList[i].onmouseout = function() {
				this.className = '';
				aDiv[this.index].style.display = 'none';
			}
		}

	}
}
//置顶  
/*
 	toTop --返回顶部
 	2种模式，直接返回mode=0，匀减速返回mode=1
 	number --控制div的显示或消失
* */
function toTop(obj, mode, number) {
	addEvent(window, 'scroll', function() {
		scroll = window.scrollY;
		if(scroll > number) {
			obj.style.display = 'block';
		} else {
			obj.style.display = 'none';
		}
	})

	obj.onclick = function() {
		//		
		if(mode) {
			//匀减速
			var timer = setInterval(function() {
				scroll = window.scrollY;
				var speed = scroll / 10;
				var target = scroll - speed;
				if(target <= 3) {
					clearInterval(timer);
					target = 0;
				}
				window.scrollTo(0, target);
			}, 30)
		} else {
			//直接到顶
			window.scrollTo(0, 0);
		}
	}
}

//吸顶操作   
/*
 box--为menu前一个元素  menu为菜单
 当滚动距离大于box的高度是，menu的position变为fixed
 小于时position为空
 */
function Mounting(box, menu) {
	var menuTop = menu.offsetTop;
	var heig = menu.offsetHeight;
	addEvent(window, 'scroll', function() {
		var scroll2 = window.scrollY;
		if(scroll2 >= menuTop) {
			css(menu, 'position', 'fixed');
			css(menu, 'top', 0);
			css(menu, 'left', 0);
			css(box, 'marginBottom', heig + 'px')
		} else {
			css(menu, 'position', '');
			css(box, 'marginBottom', 0)
		}
	})
}
//吸底菜单
/*
 	菜单自身绝对定位，且display:none
 	当滚动到一定程度是显示底部菜单
*/
function suctionBottom(obj, num) {
	addEvent(window, 'scroll', function() {
		if(window.scrollY >= num) {
			css(obj, 'display', 'block');
		} else {
			css(obj, 'display', 'none');
		}
	})
}
//元素页面居中
//想方法setCenter中传入对象obj
function setCenter(obj) {
	var html = document.documentElement; //获取html元素
	var htop = (html.clientHeight - obj.offsetHeight) / 2; //html.clientHeight为页面高度  obj.offsetHeight为元素高度 
	var hleft = (html.clientWidth - obj.offsetWidth) / 2;
	obj.style.top = htop + 'px'; //设置内联样式，将元素居中
	obj.style.left = hleft + 'px';
}

//随机数整数number1~number2
function getRandomNumber(min, max) {
	return parseInt(Math.random() * (max - min + 1)) + min;
}

//获取随机颜色 
function getRandomRgb(str) {
	var res = '';
	if(str == 16) {
		res = '#';
		for(var i = 0; i < 6; i++) {
			var color = '0123456789abcdef';
			var num = getRandomNumber(0, color.length - 1);
			res += color[num];
		}
	} else if(str == 'rgb') {
		var r = getRandomNumber(0, 255);
		var g = getRandomNumber(0, 255);
		var b = getRandomNumber(0, 255);
		res = 'rgb(' + r + ',' + g + ',' + b + ')';
	} else {
		alert('参数输入错误')
	}
	return res;
}
//冒泡排序
function BulleSort(arr) {
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr.length - i - 1; j++) {
			if(arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

//map方法
function map(array, callback) {
	var res = [];
	for(var i = 0; i < array.length; i++) {
		res.push(callback(array[i]));
	}
	return res;
}
//封装include方法
function include(array, number) {
	for(var i in array) {
		if(array[i] == number) {
			return true;
		}
	}
	return false;
}
/*
 	补零函数:toDB(num)
 	参数：num数字
 	返回值：小于10的补零返回

 */
function toDB(num) {
	//补零操作
	if(num < 10) {
		return '0' + num;
	} else {
		return '' + num;
	}
}

/*
 	查找首节点：
 	参数： 父节点
 	返回值： 第一个子节点
 
*/
function firstChild(obj) {
	if(obj.firstElementChild) {
		return obj.firstElementChild
	} else {
		return obj.firstChild;
	}
}

/*
 	查找最后子节点：
 	参数： 父节点
 	返回值： 最后一个子节点
 
 */

function lastChild(parent) {
	if(parent.lastElementChild) {
		//高级浏览器
		return parent.lastElementChild;
	} else {
		return parent.lastChild;
	}
}

//封装一个字符串转对象---用于网站解析
function strToObj(str) {
	var obj = {};
	//?key=0&key2=1&key3=2
	var str = str.slice(1);
	//key=0&key2=1&key3=2
	var arr = str.split('&'); //['key=0','key2=1','key=2'];
	//	console.log(arr);
	for(var i in arr) {
		var arr2 = arr[i].split('='); //arr2=['key','0']
		obj[arr2[0]] = decodeURI(arr2[1]);
	}
	//	console.log(obj)
	return obj;
}
//封装一个json转成字符串
function objToStr(date) {
	var html = '';
	for(var key in date) {
		html += key + '=' + encodeURI(date[key]) + '&';
	}
	html = html.slice(0, -1);
	return html;
}
//封装一个过滤语言的方法
// string 要过滤的字符串
function filtration(string) {
	var arr = ['卧槽', '草泥马', 'fuck', '你麻痹', '傻逼', 'SB'];
	var n = string;
	for(var i in arr) {
		var res = new RegExp(arr[i], 'gi'); //构造函数构造出正则
		n = n.replace(res, '***');
	}
	return n;
}

//事件监听兼容
function addEvent(eve, type, fn) {
	if(eve.addEventListener) {
		//ie9+ 主流浏览器
		eve.addEventListener(type, fn, false);
	} else {
		eve.attachEvent('on' + type, fn);
	}
}

//判断滚轮方向
function gWheel(obj, fn) {
	//ie  谷歌
	obj.onmousewheel = fwheel;
	//火狐
	if(obj.addEventListener) {
		obj.addEventListener('DOMMouseScroll', fwheel, false);
	}

	function fwheel(e) {
		var e = e || window.event;
		var isTrue = true;
		if(e.wheelDelta) {
			//iE   谷歌
			isTrue = e.wheelDelta > 0 ? true : false;
		} else {
			//火狐
			isTrue = e.detail < 0 ? true : false;
		}
		fn(isTrue);
	}
}

//个人封装弹窗
function aler(obj, height, width, className) {
	var aDiv = document.createElement('div');
	aDiv.style.width = width + 'px';
	aDiv.style.height = height + 'px';
	aDiv.className = className;
	aDiv.style.position = 'absolute';
	aDiv.style.top = (window.innerHeight - height) / 2 + 'px';
	aDiv.style.left = (window.innerWidth - width) / 2 + 'px';
	obj.appendChild(aDiv);
}

//封装正则
/*
 	条件：
 		用户名：3位或以上，由数字、字母、_组成，不能以数字开始
 		昵称：由汉字、字母、数字组成，数字不能开头
 		密码：有字母、数字、特殊字符（$_&）组成，6-20位
 			密码强度：分3级 有字母、数字、特殊字符其中一项为低，两项为中，三项为高
 		密码确认：和密码一样就通过；
 		邮箱：^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$
 */
var checkReg = {
	username: function(str) { //用户名
		var reg = /^[a-zA-Z_]\w{2,}$/;
		return reg.test(str);
	},
	name: function(str) { //验证昵称
		var reg = /^[\u2E80-\u9FFFa-zA-Z]+$/;
		return reg.test(str);
	},
	pword: function(str) {
		var num = 0; //实现密码强度判断  每符合一个要求，num++
		if(/[0-9]+/.test(str)) {
			num++;
		}
		if(/[a-zA-Z]+/.test(str)) {
			num++;
		}
		if(/[$_&]+/.test(str)) {
			num++;
		}
		if(str.length < 6 || str.length > 20 || /\s/g.test(str)) {
			num = 0;
		}
		return num;
	},
	checkpword: function(passw1, passw2) { //判断密码是否相同
		return passw1 == passw2
	},
	email: function(str) { //验证邮箱
		var reg = /^\w+([\-+\.]\w+)*@\w+([\-\.]\w+)*\.\w+([-.]\w+)*$/;
		return reg.test(str);
	},
	tel: function(str) { //验证电话
		var reg = /^1[3-9]\d{9}$/;
		return reg.test(str);
	},
	birthday: function(str) { //验证生日
		var reg = /^(18|19|20|21)[0-9]{2}\-?(0?[1-9]|1[0-2])\-?((0?[1-9])|((1|2)[0-9])|30|31)$/;
		return reg.test(str);
	},
	idCard: function(str, birthday) { //验证身份证
		var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
		//		var str2 = str.slice(6,14);
		return reg.test(str);
	}
}
/*
 * 	存 ：document.cookie = name=value[;expires=date][;path=路径][;domain=域名]
		* name=value: 为你要保存的键值对(必选)
		* expires ：失效时间，如果不设置，默认的浏览器关闭时立即失效
		* path：路径，不写默认就是该html文件存在的路径 
		* domain：域名，设置访问cookie的域名，权限
 	cookie的相关操作：var cookie = {}
	子功能：
		存 ：set
		取：get
		删：remove
		
 */
var cookie = {
	set: function(name, value, pro) {
		//name 要存储的名字  value   pro为json对象，里面有cookie一些相关属性
		var str = name + '=' + value;
		if(pro.expires) {
			str += ';expires=' + pro.expires.toUTCString(); //把时间转成字符串 toUTCString;
		}
		if(pro.path) {
			str += ';path=' + pro.path;
		}
		if(pro.domain) {
			str += ';domain=' + pro.domain;
		}
		document.cookie = str;
	},
	get: function(key) {
		//获取
		var str = document.cookie; //name=jingjing; psw=123456
		var arr = str.split('; '); //[name=jingjing , psw=123456]
		for(var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('='); //[name,jingjing] [psw,123456]
			if(key == arr2[0]) {
				return arr2[1]; //通过键名取键值
			}
		}
	},
	remove: function(key) {
		var now = new Date();
		now.setDate(now.getDate() - 1);
		cookie.set(key, '', {
			expires: now,
			path:'/'
		});
	}
}

/*
 	设置和获取行内样式：css(节点,'width','40px') 设置样式  css(节点，'color') 获取样式
 	两个个参数：获取行内样式
 	三个参数：设置样式
*/
//获取行内样式：css()
function css() {
	//运用arguments实现多个参数的传递
	//arguments为系统默认的数组，用于存储参数
	if(arguments.length == 2) {
		return arguments[0].style[arguments[1]];
	} else if(arguments.length == 3) {
		arguments[0].style[arguments[1]] = arguments[2];
	}
}

/*
 	getstyle(obj,name)
 	参数： 
 	obj:对象名
 	name ：要获取的样式属性名
 	返回：样式值
 		运用方法：getComputedStyle(obj, false) iE9+主流浏览器  obj为对象，false为默认参数
 				obj.currentStyle(name)IE8-
*/
//获取的样式属性
function getStyle(obj, name) {
	if(getComputedStyle(obj, false)) {
		return getComputedStyle(obj, false)[name];
	} else {
		return obj.currentStyle(name);
	}
}
//替补
function extendObj(obj1,obj2){
	for(var key in obj1){
		obj2[key] = obj1[key];
	}
}
/*
	深度拷贝：deepClone() 很重要
	参数：对象（数组或json对象）
	返回值：新的对象（拷贝）
 */
//重点：深度拷贝
function deepClone(obj) {
	var str = JSON.stringify(obj); //把对象转成字符串
	return JSON.parse(str); //把字符串转成对象
}

/*
 	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */
//动画效果
function startMove(obj, json, fnend) {

	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var istrue = true;

		for(var key in json) {
			var cur = 0; //初始值
			if(key == 'opacity') {
				cur = getStyle(obj, key) * 100;
			} else {
				cur = parseInt(getStyle(obj, key));
			}
			//确定速度，减速运动
			var speed = (json[key] - cur) / 6;
			//速度取整
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(cur != json[key]) { //width 200 heigth 400
				istrue = false; //如果没有达到目标值，开关false
			} else {
				istrue = true; //true true
			}

			if(key == 'opacity') {
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'
			} else {
				css(obj, key, (cur + speed) + 'px');
			}
		}

		if(istrue) {
			if(fnend) {
				clearInterval(obj.timer);
				fnend();
			}
		}
	}, 30)
}

//ajax封装
/*
 ajax(method,url,data,fn)
 	参数一：请求方式   get  和  post
 	参数二：路径
 	参数三：数据   name=malin&psw=12345
 	参数四：成功的回调    回调函数
 * */
function ajax(method, url, data, fn) {
	//创建ajax对象
	var xhr = new XMLHttpRequest();
	//如果method为get时，data放在url后面
	if(method == 'get') {
		//"day=" + new Date()防止数据缓存
		url = url + "?day=" + new Date() + "&" + data;
	}
	//设置请求参数
	xhr.open(method, url, true);

	//发送数据请求
	if(method == 'get') {
		xhr.send(null);
	} else {
		//设置请求头
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	//接收数据，做渲染
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				//个性需求
				if(fn) {
					fn(xhr.responseText); //实参
				}
			} else {
				alert('出错了，因为：' + xhr.status); //404找不到
			}

		}
	}
}


//封装函数，在某节点后插入一个新节点
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild ==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
