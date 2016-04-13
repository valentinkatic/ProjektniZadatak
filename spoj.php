<?php
	$con = mysql_connect("localhost","root");
	if(!$con)
	{
		die("<b>Došlo je do pogreške i nije se moguće spojiti na MySQL server</b>");
	}
	mysql_query("CREATE DATABASE ProjektniZadatak");	
	mysql_select_db("ProjektniZadatak");
	$tblname="Recenzije";
	$sql="SELECT * FROM $tblname";
	$result=@mysql_query($sql);
	if (!$result)
{
	mysql_close($con);
	$con = mysql_connect("localhost","root");
	mysql_select_db("ProjektniZadatak");
	mysql_query("CREATE TABLE Recenzije(
		Opis varchar(1000),
		Potpis varchar(15))");
}
?>