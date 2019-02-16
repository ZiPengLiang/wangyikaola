<?php
	include "connect.php";
	$type = isset($_GET['type'])?$_GET['type']:'';
	$DOA = isset($_GET['DOA'])?$_GET['DOA']:'';
	$page = isset($_GET['page'])?$_GET['page']:'';
	$qty = isset($_GET['qty'])?$_GET['qty']:'';
	
	if($qty){
		$number = ($page-1)*$qty;
		$sql = "SELECT * FROM goodslist ORDER BY $type $DOA LIMIT $number,$qty";
	}else{
		$sql = "SELECT * FROM goodslist ORDER BY $type $DOA";
	}
	
	
	$result = $con->query($sql);
	
	$row = $result->fetch_all(MYSQLI_ASSOC);
	$count =$result->num_rows;
	if($row){
		$code = 1;
		$message = '数据获取成功';
	}else{
		$code = 0;
		$message = '数据失败';
	}
	$result->close();
	$reg = array(
		'code'=>$code,
		'message'=>$message,
		'data'=>array(
			'type'=>$type,
			'doa'=>$DOA,
			'count'=>$count,
			'list'=>$row
		)
	);
	echo json_encode($reg,JSON_UNESCAPED_UNICODE);
	$con->close();
?>