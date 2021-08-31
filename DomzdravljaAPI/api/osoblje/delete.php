<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oOsoblje = new Zaposlenik($db);

  $data = json_decode(file_get_contents("php://input"));

  $oOsoblje->id = $data->id;

  if($oOsoblje->delete()) {
    echo json_encode(
      array('message' => 'Osoba uspjesno obrisana')
    );
  } else {
    echo json_encode(
      array('message' => 'Osoba neuspjesno obrisana ')
    );
   }