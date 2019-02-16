<?php
	header("content-type:text/html;charset=utf-8");
	include "connect.php";
	$username = isset($_POST['username'])?$_POST['username']:'';
	$password = isset($_POST['password'])?$_POST['password']:'';
	
	$sql = "INSERT INTO jiekou(username,password) VALUES('$username','$password')";
	
	$result = $con->query($sql);
	
	$code= 0;
	$message ='';
	if($result){
		$code= 1;
		$message ='用户注册成功';
	}else{
		$code= 0;
		$message ='用户注册失败';
	}
	
	
	$reg=array(
		"code"=>$code,
		"message"=>$message
	);
	echo json_encode($reg,JSON_UNESCAPED_UNICODE);
	$con->close();
?>