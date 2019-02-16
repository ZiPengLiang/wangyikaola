<?php
	include "connect.php";
	$sql = "SELECT * FROM goods WHERE gid = '30';";

	$result = $con->query($sql);
	$num = $result->num_rows;
//	$row = $result->fetch_all(MYSQLI_ASSOC);

//	if($row){
//		$code = 1;
//		$message = '数据获取成功';
//	}else{
//		$code = 0;
//		$message = '数据获取失败';
//	}
	
	
//	$reg= array(
//		'code'=>$code,
//		'data'=>array(
//			'id'=>$id,
//			'list'=>$row,
//		),
//		'message'=>$message
//		
//	);
	//输出数据
	echo json_encode($num,JSON_UNESCAPED_UNICODE);
	$result->close();
	//关闭数据库
	$con->close();
	
?>