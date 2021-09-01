<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oDjelatnost = new Djelatnost($db);

  try{
   $result = $oDjelatnost->read();
   $num = $result->rowCount();

   if($num >0){
    $djelatnost_arr = array();
    $index = -1;
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
     extract($row);
     $djelatnost_item = array(
      'id'=> $id,
      'naziv_djelatnosti' => $naziv_djelatnosti
     );
     array_push($djelatnost_arr, $djelatnost_item);
    }
    echo json_encode($djelatnost_arr);
   }else{
    echo json_encode(array(
     'message' => 'Djelatnosti nisu pronadene'
    ));
   }
  }catch(Exception $e){
   echo json_encode(array('try_err'=> $e.getMessage()));
  };