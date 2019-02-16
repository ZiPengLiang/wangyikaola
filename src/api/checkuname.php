<?php
	include "connect.php";
	//获取用户名字
	$username = isset($_GET['username']) ? $_GET['username'] :'';
	//在数据库中搜索用户名---记得修改名字
	$sql ="SELECT * FROM user WHERE username = '$username'";
	
	//获取查询结果集
	$result = $con->query($sql);
	//得到数据
	$row = $result->fetch_all(MYSQLI_ASSOC);
	$code = 0;
	$message ='';
	if($row){
		$code= 1;
		$message ='用户名已存在';
	}else{
		$code= 0;
		$message ='用户名可用';
	}
	$result->close();
	$reg=array(
		"code"=>$code,
		"message"=>$message
	);
	echo json_encode($reg,JSON_UNESCAPED_UNICODE);
	
	$con->close();
?>