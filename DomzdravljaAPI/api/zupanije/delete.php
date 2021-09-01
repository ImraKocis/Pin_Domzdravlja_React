<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oZupanija = new Zupanija($db);

  $data = json_decode(file_get_contents("php://input"));

  $oZupanija->id_zupanije = $data->id_zupanije;

  try{
   if($oZupanija->delete()){
      echo json_encode(array('message' => 'Zupanija uspjesno obrisana'));
     }else{
      echo json_encode(array('message' => 'Brisanje nije uspjelo'));
     }
  }catch(Exception $e){
   echo $e->getMessage();
  }
  
 ?>