<?php 
 class Djelatnost{
  private $conn;
  private $table = 'djelatnosti';

  public $id;
  public $naziv_djelatnosti;

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