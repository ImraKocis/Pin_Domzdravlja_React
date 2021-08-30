<?php
    include "classes.php";

    $ConnectionString = new Configuration();
	try
	{
		$oConnection = new PDO("mysql:host=$ConnectionString->host;dbname=$ConnectionString->dbname;charset=utf8", $ConnectionString->username, $ConnectionString->password);
		
	}
	catch (PDOException $pe)
	{
	 	die("Could not connect to the database $ConnectionString->dbname :" . $pe->getMessage());
	}
?>