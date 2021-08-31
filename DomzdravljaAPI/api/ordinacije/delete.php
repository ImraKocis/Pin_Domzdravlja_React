<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oOrdinacija = new Ordinacija($db);

  $data = json_decode(file_get_contents("php://input"));

  $oOrdinacija->id_dom_zdravlja = $data->id_dom_zdravlja;
  
  try{
   if($oOrdinacija->delete()){
      echo json_encode(array('message' => 'Ordinacija uspjesno obrisana'));
     }else{
      echo json_encode(array('message' => 'Brisanje nije uspjelo'));
     }
  }catch(Exception $e){
   echo $e->getMessage();
  }
  
 ?>