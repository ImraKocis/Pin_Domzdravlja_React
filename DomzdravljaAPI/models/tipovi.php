<?php 
 class Tip{
  private $conn;
  private $table='tipovi';

  public $id;
  public $naziv_tipa;

  public function __construct($db){
   $this->conn = $db;
  }

  public function read(){
   $query = 'SELECT * FROM '.$this->table;
   $stmt = $this->conn->prepare($query);
   $stmt->execute();
   return $stmt;
  }
 }

?>