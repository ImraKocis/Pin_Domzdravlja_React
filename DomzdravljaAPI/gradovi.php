<?php 
include 'connection.php';
include_once 'core.php';
$oJson = array();

$sQuery = "SELECT * FROM gradovi";
 $oData = $oConnection->query($sQuery);
 while($oRow = $oData->fetch(PDO::FETCH_BOTH)){
  $oGrad = new Grad(
   $oRow['id_grada'],
   $oRow['grad_naziv'],
   $oRow['id_zupanije']
  );
  array_push($oJson,$oGrad);
 }
 echo json_encode($oJson,JSON_UNESCAPED_UNICODE);
?>