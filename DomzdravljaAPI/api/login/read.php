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

  try{
   $result = $oLogin->read();
   $num = $result->rowCount();

   if($num >0){
    $login_arr = array();
    $index = -1;
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
     extract($row);
     $login_item = array(
      'userId'=> $userId,
      'userName' => $userName,
      'userPassword' => $userPassword,
      'ime' => $ime,
      'prezime' => $prezime
     );
     array_push($login_arr, $login_item);
    }
    echo json_encode($login_arr);
   }else{
    echo json_encode(array(
     'message' => 'Podaci nisu pronadeni'
    ));
   }
  }catch(Exception $e){
   echo json_encode(array('try_err'=> $e.getMessage()));
  };