<?php
include "spoj.php";
$Opis=$_POST["Opis"];
$Potpis=$_POST["Potpis"];
mysql_query("INSERT INTO $tblname(Opis,Potpis)
VALUES ('$Opis','$Potpis')");
?>

<html>
<head>
<title>Unesena recenzija</title>

<script>
var counter = 3;
setInterval(function brojac() {
	document.getElementById('counter').innerHTML=counter;
  --counter;
}, 1000);
</script>

<style>
body{
	background-image:url(img/texture.jpg);
}
div{
	width:900px; 
	margin-left:auto; 
	margin-right:auto; 
	padding-top:50px;
}
</style>

<meta http-equiv="refresh" content="4;url=recenzije.php"/>
</head>
<body>
<div>
<h1>Recenzija uspješno unesena</h1>
<p>Bit ćete vraćeni na prethodnu stranicu kroz <span id="counter"><script>brojac();</script></span> sekunde.</br>
U slučaju greške pritisnite <a href="recenzije.php">ovdje.</a>
</p>
</div>

</body>
</html>