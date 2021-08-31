<?php 
include 'connection.php';
include_once 'core.php';
$oJson = array();

$sQuery = 'SELECT medicinsko_osoblje.id, medicinsko_osoblje.tip,medicinsko_osoblje.ime, medicinsko_osoblje.prezime, tipovi.naziv_tipa,ordinacije.naziv_ordinacije,djelatnosti.naziv_djelatnosti FROM medicinsko_osoblje LEFT JOIN tipovi ON medicinsko_osoblje.tip = tipovi.id LEFT JOIN ordinacije ON medicinsko_osoblje.dom_zdravlja = ordinacije.id_dom_zdravlja LEFT JOIN djelatnosti ON medicinsko_osoblje.djelatnosti = djelatnosti.id';
 $oData = $oConnection->query($sQuery);
 while($oRow = $oData->fetch(PDO::FETCH_BOTH)){
  if($oRow['tip'] == 1 ){
   $oOsoblje = new Doktor(
    $oRow['ime'],
    $oRow['prezime'],
    $oRow['id'],
    $oRow['tip'],
    $oRow['naziv_ordinacije'],
    $oRow['naziv_djelatnosti']
   );
  }
  if($oRow['tip'] == 2){
   $oOsoblje = new MedSestra(
    $oRow['ime'],
    $oRow['prezime'],
    $oRow['id'],
    $oRow['tip'],
    $oRow['naziv_ordinacije'],
    $oRow['naziv_djelatnosti']
   );
  }
  if($oRow['tip'] == 3){
   $oOsoblje = new MedTehnicar(
    $oRow['ime'],
    $oRow['prezime'],
    $oRow['id'],
    $oRow['tip'],
    $oRow['naziv_ordinacije'],
    $oRow['naziv_djelatnosti']
   );
  }
  if($oRow['tip'] == 4){
   $oOsoblje = new Administrator(
    $oRow['ime'],
    $oRow['prezime'],
    $oRow['id'],
    $oRow['tip'],
    $oRow['naziv_ordinacije'],
    $oRow['naziv_djelatnosti']
   );
  }
  array_push($oJson,$oOsoblje);
 }
 echo json_encode($oJson,JSON_UNESCAPED_UNICODE);
?>