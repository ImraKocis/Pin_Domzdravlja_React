<?php 
 class Grad{
  private $conn;
  private $table='gradovi';

  public $id_grada;
  public $grad_naziv;
  public $id_zupanije;

  public function __construct($db){
   $this->conn = $db;
  }

  public function read(){
   $query = 'SELECT * FROM '.$this->table;
   $stmt = $this->conn->prepare($query);
   $stmt->execute();
   return $stmt;
  }
  public function delete(){
   $query = 'DELETE FROM '. $this->table . ' WHERE id_grada = :id_grada';

   $stmt = $this->conn->prepare($query);

   $this->id_grada = htmlspecialchars(strip_tags($this->id_grada));

   $stmt->bindParam(':id_grada', $this->id_grada);
   if($stmt->execute()) {
    return true;
   }else{
    echo "Error code: ".$stmt->errorCode();
   }
  }
 }
?>