<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oGrad = new Grad($db);

  try{
   $result = $oGrad->read();
   $num = $result->rowCount();

   if($num >0){
    $grad_arr = array();
    $index = -1;
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
     extract($row);
     $grad_item = array(
      'id_grada'=> $id_grada,
      'grad_naziv' => $grad_naziv,
      'id_zupanije' => $id_zupanije
     );
     array_push($grad_arr, $grad_item);
    }
    echo json_encode($grad_arr);
   }else{
    echo json_encode(array(
     'message' => 'Gradovi nisu pronadeni'
    ));
   }
  }catch(Exception $e){
   echo json_encode(array('try_err'=> $e.getMessage()));
  };
  