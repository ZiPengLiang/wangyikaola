"use strict";$(function(){$(".top").on("click","#p-login",function(){$(".name").removeClass("active"),$(".phone").addClass("active"),$(".l-div").css("display","none"),$(".p-login").css("display","block")}),$(".top").on("click","#e-login",function(){$(".name").removeClass("active"),$(".user").addClass("active"),$(".l-div").css("display","none"),$(".e-login").css("display","block")}),$("input").on("focus",function(){$(this).parent().css("border-color","rgb(74,175,233)")}).on("blur",function(){$(this).parent().css("border-color","#ccc")}),$("#emailbtn").on("click",function(){var e=$("#email").val(),s=$("#password").val(),n=$("#echeckbox").prop("checked");e.trim()&&s.trim()?$.ajax({type:"get",url:"../api/main.php",data:{sqlname:"user",a:"login",username:e,password:s},success:function(e){var s=JSON.parse(e);if(console.log(s),s.code){var o={};if(n){var a=new Date;a.setDate(a.getDate()+10),o={expires:a,path:"/"}}var c=s.list[0];console.log(c),cookie.set("username",c.username,o),cookie.set("id",c.id,o),location.href="../index.html"}else $(".form-main .ps").css("color","red").text(s.message)},async:!0}):$(".form-main .ps").css("color","red").text("邮箱名或密码为空")})});