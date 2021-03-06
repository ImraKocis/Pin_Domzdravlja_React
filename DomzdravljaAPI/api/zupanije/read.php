<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oZupanija = new Zupanija($db);

  try{
   $result = $oZupanija->read();
   $num = $result->rowCount();

   if($num >0){
    $zupanija_arr = array();
    $index = -1;
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
     extract($row);
     $zupanija_item = array(
      'id_zupanije'=> $id_zupanije,
      'zupanija_naziv' => $zupanija_naziv
     );
     array_push($zupanija_arr, $zupanija_item);
    }
    echo json_encode($zupanija_arr);
   }else{
    echo json_encode(array(
     'message' => 'Zupanije nisu pronadene'
    ));
   }
  }catch(Exception $e){
   echo json_encode(array('try_err'=> $e.getMessage()));
  };