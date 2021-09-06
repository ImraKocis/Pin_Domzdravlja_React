<?php
 //Headers.
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/JSON');
 header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization');

 //Include init file.
 include_once('../../models/include.php');

 $database = new Database();
 $db = $database->connect();

 $oOsoba = new Zaposlenik($db);

 $oOsoba->id = isset($_GET['id']) ? $_GET['id'] : die();
 try{
  $oOsoba->readSingle();
  if($oOsoba->ime != null){
   $osoba_arr = array(
    'id'=>$oOsoba->id,
    'sifra'=>$oOsoba->sifra,
    'tip'=>$oOsoba->tip,
    'naziv_tipa'=>$oOsoba->naziv_tipa,
    'naziv_ordinacije'=>$oOsoba->naziv_ordinacije,
    'naziv_djelatnosti'=>$oOsoba->naziv_djelatnosti,
    'djelatnosti'=>$oOsoba->djelatnosti,
    'ime'=>$oOsoba->ime,
    'prezime'=>$oOsoba->prezime,
   );
   echo json_encode($osoba_arr);
  }else{
   echo json_encode(array('message' => 'Djelatnik sa zatrazenim identifikatorom ne postoji.'));
  }
 }catch(Exception $e){
  echo json_encode(array(
   "message" => "Doslo je do pogreske kod ucitavanja podataka o zaposleniku.",
   "error" => $e->getMessage()
  ));
 };