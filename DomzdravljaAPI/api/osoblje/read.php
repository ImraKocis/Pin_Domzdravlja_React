<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oOsoblje = new Zaposlenik($db);

  try{
   $result = $oOsoblje->read();
   $num = $result->rowCount();

   if($num > 0){
    $osoblje_arr = array();
    
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
     extract($row);

     $osoblje_item = array(
      'id'=> $id,
      'sifra'=> $sifra,
      'tip' => $tip,
      'naziv_tipa' => $naziv_tipa,
      'naziv_ordinacije'=>$naziv_ordinacije,
      'ime' => $ime,
      'prezime' => $prezime,
      'naziv_djelatnosti' => $naziv_djelatnosti,
      'djelatnosti' => $djelatnosti,
      'grad_naziv' => $grad_naziv
     );

     array_push($osoblje_arr, $osoblje_item);
    }
    echo json_encode($osoblje_arr);
   }else{
    echo json_encode(array('message'=>'Osoblje nije pornadeno'));
   }
  }catch(Exception $e){
   echo json_encode(array('try_err'=> $e.getMessage()));
  };