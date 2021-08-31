<?php 
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');
 header('Access-Control-Allow-Methods: PUT');
 header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

 include_once '../../models/include.php';

 $database = new Database();
 $db = $database->connect();

 $oOsoblje = new Zaposlenik($db);

 $data = json_decode(file_get_contents("php://input"));
 
 $oOsoblje->id = $data->id;

 $oOsoblje->ime = $data->ime;
 $oOsoblje->prezime = $data->prezime;
 $oOsoblje->tip = $data->tip;
 $oOsoblje->dom_zdravlja = $data->dom_zdravlja;
 $oOsoblje->djelatnosti = $data->djelatnosti;

 if($oOsoblje->update()){
  echo json_encode(array('message' => 'Osoba uspjesno azurirana'));
 }else{
  echo json_encode(array('message' => 'Osoba neuspjesno azurirana'));
 }
?>