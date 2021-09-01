<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oGrad = new Grad($db);

  $data = json_decode(file_get_contents("php://input"));

  $oGrad->id_grada = $data->id_grada;
  try{
   if($oGrad->delete()){
      echo json_encode(array('message' => 'Grad je uspjesno obrisan'));
     }else{
      echo json_encode(array('message' => 'Brisanje nije uspjelo'));
     }
  }catch(Exception $e){
   echo $e->getMessage();
  }
  
 ?>