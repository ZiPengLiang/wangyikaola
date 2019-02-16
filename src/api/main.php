<?php
	include 'connect.php';
	
	$sqlname = isset($_POST['sqlname']) ? $_POST['sqlname']:(isset($_GET['sqlname'])?$_GET['sqlname']:'');
	$a = isset($_POST['a']) ? $_POST['a']:(isset($_GET['a'])?$_GET['a']:'');
	
	
	$code = 0;
	$message ='';
	$reg=array();
	//用户名检测  用get获取参数
	if($a == 'verifyUserName'){
		$username = isset($_GET['username'])?$_GET['username']:'';
		$sql ="SELECT * FROM $sqlname WHERE username = '$username'";
		$result = $con->query($sql);
		//得到数据
		$row = $result->fetch_all(MYSQLI_ASSOC);
		if($row){
			$code= 1;
			$message ='用户名已存在';
		}else{
			$code= 0;
			$message ='用户名可用';
		}
		$reg=array(
			"code"=>$code,
			"message"=>$message
		);
		$result->close();
	}
	
	//用户注册
	if($a == 'reg'){
		//用户名
		$username = isset($_GET['username'])?$_GET['username']:(isset($_POST['username'])?$_POST['username']:'');
		//密码
		$password = isset($_GET['password'])?$_GET['password']:(isset($_POST['password'])?$_POST['password']:'');
		
		$sql = "INSERT INTO $sqlname(username,password) VALUES('$username','$password')";
		$result = $con->query($sql);
		//得到数据
		if($result){
			$code= 1;
			$message ='用户名注册成功';
		}else{
			$code= 0;
			$message ='用户名注册失败';
		}
		$reg=array(
			"code"=>$code,
			"message"=>$message
		);
	}
	
	//用户登陆
	if($a == 'login'){
		//用户名
		$username = isset($_GET['username'])?$_GET['username']:(isset($_POST['username'])?$_POST['username']:'');
		//密码
		$password = isset($_GET['password'])?$_GET['password']:(isset($_POST['password'])?$_POST['password']:'');
		
		$sql ="SELECT * FROM $sqlname WHERE username = '$username' AND password ='$password'";
		$result = $con->query($sql);
		$row =$result->fetch_all(MYSQLI_ASSOC);
		//得到数据
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
	}
	
	//商品渲染  get $page $qty $a $sqlname
	if($a == 'getList'){
		//$page--当前页码  $qty--每页多少条数据
		$page = isset($_GET['page'])?$_GET['page'] :'';
		$qty = isset($_GET['qty'])?$_GET['qty'] :'';
		$num = ($page-1)*$qty;
	
		$sql = "SELECT * FROM $sqlname LIMIT $num,$qty";
		$sql2 ="SELECT * FROM $sqlname";
	
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
			$message = '数据获取成功';
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
	}
	//查询数据 商品名或商品id
	if($a == 'select'){
		$gid = isset($_GET['gid'])?$_GET['gid'] :'';
		$sql = "SELECT * FROM $sqlname WHERE gid = '$gid'";
		$result = $con->query($sql);
		
		$row = $result->fetch_all(MYSQLI_ASSOC);
		
		if($row){
			$code = 1;
			$message = '数据获取成功';
		}else{
			$code = 0;
			$message = '数据获取失败';
		}
		$result->close();
		
		$reg= array(
			'code'=>$code,
			'data'=>array(
				'gid'=>$gid,
				'list'=>$row,
			),
			'message'=>$message
		);
	}
	
	//排序
	if($a =='sort'){
		//排序类型
		$type = isset($_GET['type'])?$_GET['type']:'';
		//升序或降序
		$DOA = isset($_GET['DOA'])?$_GET['DOA']:'';
		//当前页数
		$page = isset($_GET['page'])?$_GET['page']:'';
		//每页数量
		$qty = isset($_GET['qty'])?$_GET['qty']:'';
		//排序条件
		$where = isset($_GET['where'])?$_GET['where']:'';
		$number = ($page-1)*$qty;
		if($where){
			$sql = "SELECT * FROM $sqlname where $where ORDER BY $type $DOA LIMIT $number,$qty";
			$sql2 = "SELECT * FROM $sqlname where $where ORDER BY $type $DOA";
		}else{
			$sql = "SELECT * FROM $sqlname ORDER BY $type $DOA LIMIT $number,$qty";
			$sql2 = "SELECT * FROM $sqlname ORDER BY $type $DOA";
		}
		$result = $con->query($sql);
		$reslut2 = $con->query($sql2);
		$row = $result->fetch_all(MYSQLI_ASSOC);
		$count = $reslut2->num_rows;
		$pages = ceil($count/$qty);
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
				'DOA'=>$DOA,
				'count'=>$count,
				'pages'=>$pages,
				'page'=>$page,
				'n'=>$qty,
				'list'=>$row,
				'where'=>$where
			)
		);
	}
	
	//从购物车表中获取数据 
	/*
	 *  方式get
	 *参数 	
	 * 用户名 $username
	 * 表名 	$sqlname	 
	 * */
	if($a =='getCart'){
		//用户名
		$username = isset($_GET['username'])?$_GET['username']:(isset($_POST['username'])?$_POST['username']:'');
		
		$sql = "SELECT * FROM $sqlname WHERE username = '$username'";
		$result = $con->query($sql);
		
		$goodsnum = $result->num_rows;
		
		$row = $result->fetch_all(MYSQLI_ASSOC);
		
		if($row){
			$code = 1;
			$message = '数据获取成功';
		}else{
			$code = 0;
			$message = '数据获取失败';
		}
		$result->close();
		
		$reg= array(
			'code'=>$code,
			'data'=>array(
				'username'=>$username,
				'list'=>$row,
				'shuliang'=>$goodsnum
			),
			'message'=>$message
		);
	}
	//修改购物车数量
	/*
	 
	 方式get
	 参数
	 	用户名 $username
	 	商品gid
	 	修改目标名$changeName
	 	修改数值$changeNumber
	 	
	 */	
	if($a == 'reSetCart'){
		$username = isset($_GET['username'])?$_GET['username']:(isset($_POST['username'])?$_POST['username']:'');
		$gid = isset($_GET['gid'])?$_GET['gid'] :'';
		$changeName = isset($_GET['changeName'])?$_GET['changeName'] :'';
		$changeNumber = isset($_GET['changeNumber'])?$_GET['changeNumber'] :'';
		
		$sql = "UPDATE $sqlname SET $changeName = '$changeNumber' WHERE username = '$username' and gid = '$gid'";
	
		$result = $con->query($sql);
		//得到数据
		if($result){
			$code= 1;
			$message ='数据更新成功';
		}else{
			$code= 0;
			$message ='数据更新失败';
		}
		$result->close();
		$reg=array(
			"code"=>$code,
			"message"=>$message
		);
	}
	//删除购物车中的一条数据
	/*
	 方式get
	 参数
	 	用户名 $username
	 	商品gid
	 */
	if($a == 'delete'){
		$username = isset($_GET['username'])?$_GET['username']:(isset($_POST['username'])?$_POST['username']:'');
		$gid = isset($_GET['gid'])?$_GET['gid'] :'';
		
		$sql ="DELETE FROM cart WHERE username ='$username' AND gid ='$gid'";
		
		$result = $con->query($sql);
		//得到数据
		if($result){
			$code= 1;
			$message ='数据更新成功';
		}else{
			$code= 0;
			$message ='数据更新失败';
		}
		$result->close();
		$reg=array(
			"code"=>$code,
			"message"=>$message
		);
	}
	
	//查找购物车中商品
	if($a == 'selCart'){
		$username = isset($_GET['username'])?$_GET['username']:(isset($_POST['username'])?$_POST['username']:'');
		$gid = isset($_GET['gid'])?$_GET['gid'] :'';
		
		
		$sql = "SELECT * FROM $sqlname WHERE gid = '$gid' and username ='$username'";
		$result = $con->query($sql);
		$row = $result->fetch_all(MYSQLI_ASSOC);
		
		if($row){
			$code = 1;
			$message = '数据获取成功';
		}else{
			$code = 0;
			$message = '数据获取失败';
		}
		$result->close();
		
		$reg= array(
			'code'=>$code,
			'data'=>array(
				'gid'=>$gid,
				'username'=>$username,
				'list'=>$row,
			),
			'message'=>$message
		);
	}
	
	//添加进购物车
	
	if($a == 'insertCart'){
		$username = isset($_GET['username'])?$_GET['username']:(isset($_POST['username'])?$_POST['username']:'');
		$gid = isset($_GET['gid'])?$_GET['gid'] :'';
		$number = isset($_GET['number'])?$_GET['number']:'';
		
		$sql2 = "select * from goods where gid='$gid'";
		$result2 = $con->query($sql2);
		$row2 = $result2->fetch_all(MYSQLI_ASSOC);
		$sum = $number *$row2[0]['newprice'];
		$goodname = $row2[0]['goodname'];
		$newprice = $row2[0]['newprice'];
		$oldprice = $row2[0]['oldprice'];
		$shuifei = $row2[0]['shuifei'];
		$littleimg = $row2[0]['littleimg'];
		
		$sql = "INSERT INTO cart(username,gid,goodname,newprice,oldprice,shuifei,number,littleimg,sum) values('$username','$gid','$goodname','$newprice','$oldprice','$shuifei','$number','$littleimg','$sum')";
		$result = $con->query($sql);
		//得到数据
		if($result){
			$code= 1;
			$message ='数据更新成功';
		}else{
			$code= 0;
			$message ='数据更新失败';
		}
		$reg=array(
			"code"=>$code,
			"message"=>$message
//			"username"=>$username,
//			"gid"=>$gid,
//			"sum"=>$sum,
//			"goodname"=>$goodname,
//			"newprice"=>$newprice,
//			"oldprice"=>$oldprice,
//			"shuifei"=>$shuifei,
//			"littleimg"=>$littleimg
		);
	}
	
	echo json_encode($reg,JSON_UNESCAPED_UNICODE);
	
	$con->close();
	
	
?>