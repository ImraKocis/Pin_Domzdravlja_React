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

if(!empty($data->userName) && !empty($data->userPassword))
{
  $oLogin->userName = $data->userName;
  $oLogin->userPassword = $data->userPassword;

    if($oLogin->Login())
    {
        echo json_encode(array('message' => 'Uspješno logiran!'));
    }
}



