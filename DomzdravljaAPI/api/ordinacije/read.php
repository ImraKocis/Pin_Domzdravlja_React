<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../models/include.php';

  $database = new Database();
  $db = $database->connect();

  $oOrdinacije = new Ordinacija($db);

  try{
   $result = $oOrdinacije->read();
   $num = $result->rowCount();

   if($num > 0) {
    // ordinacija array
    $ordinacija_arr = array();
    $index = -1;
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
     if(!in_array($id_dom_zdravlja, array_column($ordinacija_arr, 'id_dom_zdravlja'))){
      $ordinacija_item = array(
        'id_dom_zdravlja' => $id_dom_zdravlja,
        'naziv_ordinacije' => $naziv_ordinacije,
        'opis' => html_entity_decode($opis),
        'grad_naziv' => $grad_naziv,
        'id_grada' => $id_grada,
        'zupanija_naziv' => html_entity_decode($zupanija_naziv),
        'id_zupanije' => $id_zupanije,
        'adresa' => $adresa,
        'id_djelatnost' => $id_djelatnost,
        'naziv_djelatnosti' => $naziv_djelatnosti,
        'br_telefona' => $br_telefona,
        'email' => $email,
        'radno_vrijeme' => $radno_vrijeme,
        'napomena' => $napomena,
        'zaposlenici'=> array()
      );

      // Push to "data"
      array_push($ordinacija_arr, $ordinacija_item);
     }
     if(!array_search($id_dom_zdravlja,array_column($ordinacija_arr, 'id_dom_zdravlja'))){
       $index = array_search($id_dom_zdravlja,array_column($ordinacija_arr, 'id_dom_zdravlja'));
       $zaposlenici_item = array(
        'id'=> $id,
        'ime'=> $ime,
        'prezime'=> $prezime,
        'naziv_ordinacije'=> $naziv_ordinacije,
        'naziv_tipa'=> $naziv_tipa,
      );
      array_push($ordinacija_arr[$index]['zaposlenici'],$zaposlenici_item);
     }
    }

    // Turn to JSON & output
    echo json_encode($ordinacija_arr); 
    

  } else {
    // No ordinacija
    echo json_encode(
      array('message' => 'Ordinacija Not Found')
    );
  }
  }catch(Exception $e){
   echo json_encode(array(
    "message" => "Doslo je do pogreske kod ucitavanja ordinacija.",
    "error" => $e->getMessage()
   ));
  };
  