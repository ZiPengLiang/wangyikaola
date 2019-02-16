<?php
	header("content-type:text/html;charset=utf-8");
	$servername = "localhost";
	$username ="root";
	$psw = "";
	$dbname = 'wangyikaola';
	//创建链接
	$con =new mysqli($servername,$username,$psw,$dbname);
	if($con->connect_error){
		die("连接失败:".$con->connect_error);
	}
	
	$con->set_charset('utf8');
?>