<?php
 // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oTip = new Tip($db);

  try{
   $result = $oTip->read();
   $num = $result->rowCount();

   if($num >0){
    $tip_arr = array();
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
     extract($row);
     $tip_item = array(
      'id_tipa'=> $id_tipa,
      'naziv_tipa' => $naziv_tipa
     );
     array_push($tip_arr, $tip_item);
    }
    echo json_encode($tip_arr);
   }else{
    echo json_encode(array(
     'message' => 'Tipovi nisu pronadeni'
    ));
   }
  }catch(Exception $e){
   echo json_encode(array('try_err'=> $e.getMessage()));
  };
?>