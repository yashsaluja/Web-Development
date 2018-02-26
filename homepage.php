<?php 
session_start(); 
$name=$_POST["username"]; 
echo"<pre><strong>Welcome</strong></pre"; 
$_SESSION["username"]=$name;
session_destroy();
?>
<html> 
<head>
	<title>E-commerce</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous"/>
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="yash.css">

</head>
<body>
<center><h3>SHOPHOLIC</h3></center>
<a href="ecommerce1.html"> ECOMMERCE</a><br /> 
<a href="contact.html"> CONTACT</a><br /> 
<a href="login.html"> LOGIN</a><br/>
</body> 
</html>
