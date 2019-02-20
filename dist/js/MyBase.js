'use strict';

var checkReg = {
	username: function username(str) {
		//用户名
		var reg = /^[a-zA-Z_]\w{2,}$/;
		return reg.test(str);
	},
	name: function name(str) {
		//验证昵称
		var reg = /^[\u2E80-\u9FFFa-zA-Z]+$/;
		return reg.test(str);
	},
	pword: function pword(str) {
		var num = 0; //实现密码强度判断  每符合一个要求，num++
		if (/[0-9]+/.test(str)) {
			num++;
		}
		if (/[a-zA-Z]+/.test(str)) {
			num++;
		}
		if (/[$_&]+/.test(str)) {
			num++;
		}
		if (str.length < 6 || str.length > 20 || /\s/g.test(str)) {
			num = 0;
		}
		return num;
	},
	checkpword: function checkpword(passw1, passw2) {
		//判断密码是否相同
		return passw1 == passw2;
	},
	email: function email(str) {
		//验证邮箱
		var reg = /^\w+([\-+\.]\w+)*@\w+([\-\.]\w+)*\.\w+([-.]\w+)*$/;
		return reg.test(str);
	},
	tel: function tel(str) {
		//验证电话
		var reg = /^1[3-9]\d{9}$/;
		return reg.test(str);
	},
	birthday: function birthday(str) {
		//验证生日
		var reg = /^(18|19|20|21)[0-9]{2}\-?(0?[1-9]|1[0-2])\-?((0?[1-9])|((1|2)[0-9])|30|31)$/;
		return reg.test(str);
	},
	idCard: function idCard(str, birthday) {
		//验证身份证
		var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
		//		var str2 = str.slice(6,14);
		return reg.test(str);
	}
};
var cookie = {
	set: function set(name, value, pro) {
		//name 要存储的名字  value   pro为json对象，里面有cookie一些相关属性
		var str = name + '=' + value;
		if (pro.expires) {
			str += ';expires=' + pro.expires.toUTCString(); //把时间转成字符串 toUTCString;
		}
		if (pro.path) {
			str += ';path=' + pro.path;
		}
		if (pro.domain) {
			str += ';domain=' + pro.domain;
		}
		document.cookie = str;
	},
	get: function get(key) {
		//获取
		var str = document.cookie; //name=jingjing; psw=123456
		var arr = str.split('; '); //[name=jingjing , psw=123456]
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('='); //[name,jingjing] [psw,123456]
			if (key == arr2[0]) {
				return arr2[1]; //通过键名取键值
			}
		}
	},
	remove: function remove(key) {
		var now = new Date();
		now.setDate(now.getDate() - 1);
		cookie.set(key, '', {
			expires: now,
			path: '/'
		});
	}

};
