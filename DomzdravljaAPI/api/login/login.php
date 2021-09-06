<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Headers: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oLogin = new Login($db);


  $data = json_decode(file_get_contents("php://input"));

  $oLogin->userName = $data->userName;
  $oLogin->userPassword = $data->userPassword;
  
try{
  $loginResult = $oLogin->login();
  echo json_encode($loginResult);
}catch(Exception $e){
  echo json_encode(array(
    "message"=> "Doslo je do pogreske kod prijave",
    "error" => $e->getMessage(),
    "status" => "false"
  ));
}



