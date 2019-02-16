<?php
	header("content-type:text/html;charset=utf-8");
	include "connect.php";
	
	$username = isset($_POST['username'])?$_POST['username']:'';
	$password = isset($_POST['password'])?$_POST['password']:'';

	$sql ="SELECT * FROM jiekou WHERE username = '$username' AND password ='$password'";
	
	$result =$con->query($sql);
	
	$row =$result->fetch_all(MYSQLI_ASSOC);
	
	$code = 0;
	$message ='';
	if($row){
		$code= 1;
		$message ='登陆成功';
		
	}else{
		$code= 0;
		$message ='登陆失败';
	}
	$result->close();
	$reg=array(
		"code"=>$code,
		"message"=>$message,
		"list"=>$row
	);
	echo json_encode($reg,JSON_UNESCAPED_UNICODE);
	
	$con->close();

?>