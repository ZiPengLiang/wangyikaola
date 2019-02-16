<?php
	include "connect.php";
	$page = isset($_GET['page'])?$_GET['page'] :'';
	$qty = isset($_GET['qty'])?$_GET['qty'] :'';
	
	$num = ($page-1)*$qty;
	
	$sql = "SELECT * FROM goods LIMIT $num,$qty";
	$sql2 ="SELECT * FROM goods";// LIMIT $page,$qty
	
	$reslut = $con->query($sql);
	$reslut2 = $con->query($sql2);
	$row = $reslut->fetch_all(MYSQLI_ASSOC);
	
	if($reslut&&$reslut2){
		$count = $reslut2->num_rows;
		$pages = ceil($count/$qty);
		$code = 1;
		$message = '数据获取成功';
	}else{
		$count = null;
		$pages = null;
		$code = 0;
		$message = '数据获取不成功';
	}
	$reg = array(
		'code'=>$code,
		'data'=>array(
			'count'=>$count,
			'pages'=>$pages,
			'page'=>$page,
			'n'=>$qty,
			'list'=>$row
		),
		'message'=>$message
	);
	echo json_encode($reg,JSON_UNESCAPED_UNICODE);
?>