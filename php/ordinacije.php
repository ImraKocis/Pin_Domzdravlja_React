<?php 
include 'connection.php';
include_once 'core.php';
$oJson = array();

 $sQuery = "SELECT ordinacije.id_dom_zdravlja, ordinacije.naziv_ordinacije, ordinacije.opis, ordinacije.adresa, ordinacije.br_telefona, ordinacije.email, ordinacije.radno_vrijeme, ordinacije.napomena, gradovi.grad_naziv, zupanije.zupanija_naziv, djelatnosti.naziv_djelatnosti FROM ordinacije JOIN zupanije ON ordinacije.zupanija_id = zupanije.id_zupanije JOIN gradovi ON gradovi.id_grada = ordinacije.grad_id JOIN djelatnosti ON djelatnosti.id = ordinacije.id_djelatnost";

 $sQueryStaff="SELECT medicinsko_osoblje.dom_zdravlja,medicinsko_osoblje.id, medicinsko_osoblje.ime, medicinsko_osoblje.prezime, medicinsko_osoblje.tip, ordinacije.naziv_ordinacije, djelatnosti.naziv_djelatnosti FROM medicinsko_osoblje  JOIN ordinacije ON ordinacije.id_dom_zdravlja = medicinsko_osoblje.dom_zdravlja JOIN djelatnosti ON djelatnosti.id = medicinsko_osoblje.djelatnosti";

$Zaposlenici;
$oData = $oConnection->query($sQuery);
$oDataStaff = $oConnection->query($sQueryStaff);
while($oRow = $oData->fetch(PDO::FETCH_BOTH)){
 $oJsonStaff = array();
 while($oRowStaff = $oDataStaff->fetch(PDO::FETCH_BOTH)){
  if($oRowStaff['tip'] == 1){
   $oOsoblje = new Doktor(
    $oRowStaff['ime'],
    $oRowStaff['prezime'],
    $oRowStaff['id'],
    $oRowStaff['tip'],
    $oRowStaff['naziv_ordinacije'],
    $oRowStaff['naziv_djelatnosti']
   );
  }
  if($oRowStaff['tip'] == 2){
   $oOsoblje = new MedSestra(
    $oRowStaff['ime'],
    $oRowStaff['prezime'],
    $oRowStaff['id'],
    $oRowStaff['tip'],
    $oRowStaff['naziv_ordinacije'],
    $oRowStaff['naziv_djelatnosti']
   );
  }
  if($oRowStaff['tip'] == 3){
   $oOsoblje = new MedTehnicar(
    $oRowStaff['ime'],
    $oRowStaff['prezime'],
    $oRowStaff['id'],
    $oRowStaff['tip'],
    $oRowStaff['naziv_ordinacije'],
    $oRowStaff['naziv_djelatnosti']
   );
  }
  if($oRowStaff['tip'] == 4){
   $oOsoblje = new Administrator(
    $oRowStaff['ime'],
    $oRowStaff['prezime'],
    $oRowStaff['id'],
    $oRowStaff['tip'],
    $oRowStaff['naziv_ordinacije'],
    $oRowStaff['naziv_djelatnosti']
   );
  }
  
  if($oRow['id_dom_zdravlja'] == $oRowStaff['dom_zdravlja']){
   array_push($oJsonStaff,$oOsoblje);
  }
 }
 $Zaposlenici = $oJsonStaff;
 $oOrdinacija = new Ordinacija(
  $oRow['id_dom_zdravlja'],
  $oRow['naziv_ordinacije'],
  $oRow['opis'],
  $oRow['grad_naziv'],
  $oRow['zupanija_naziv'],
  $oRow['adresa'],
  $oRow['naziv_djelatnosti'],
  $oRow['br_telefona'],
  $oRow['email'],
  $oRow['radno_vrijeme'],
  $oRow['napomena'],
  $Zaposlenici
  );
 array_push($oJson, $oOrdinacija);
}
echo json_encode($oJson,JSON_UNESCAPED_UNICODE);
?>