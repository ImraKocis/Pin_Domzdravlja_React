<?php 
 class Zupanija{
   private $conn;
   private $table = 'zupanije';

   public $id_zupanije;
   public $naziv_zupanije;

   public function __construct($db){
   $this->conn = $db;
  }

  public function read(){
   $query = 'SELECT * FROM ' . $this->table;
   $stmt = $this->conn->prepare($query);
   $stmt->execute();
   return $stmt;
  }
  public function delete(){
   $query = 'DELETE FROM '. $this->table . ' WHERE id_zupanije = :id_zupanije;
   DELETE FROM gradovi WHERE id_zupanije = :id_zupanije;';

   $stmt = $this->conn->prepare($query);

   $this->id_zupanije = htmlspecialchars(strip_tags($this->id_zupanije));

   $stmt->bindParam(':id_zupanije', $this->id_zupanije);
   if($stmt->execute()) {
    return true;
   }else{
    echo "Error code: ".$stmt->errorCode();
   }
  }
 } 

?>