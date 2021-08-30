<?php 
include 'connection.php';
include_once 'core.php';
$oJson = array();
$sQuery = "SELECT * FROM zupanije";
 $oData = $oConnection->query($sQuery);
 while($oRow = $oData->fetch(PDO::FETCH_BOTH)){
  $oZupanija = new Zupanija(
   $oRow['id_zupanije'],
   $oRow['zupanija_naziv']
  );
  array_push($oJson,$oZupanija);
 }
  echo json_encode($oJson,JSON_UNESCAPED_UNICODE);
?>
