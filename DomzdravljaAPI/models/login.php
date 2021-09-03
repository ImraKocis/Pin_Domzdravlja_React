<?php 
 class Login{
  private $conn;
  private $table = 'login_table';

  public $userId;
  public $userName;
  public $userPassword;
  public $ime;
  public $prezime;

  public function __construct($db){
   $this->conn = $db;
  }

  public function read(){
   $query = 'SELECT * FROM '. $this->table;

   $stmt = $this->conn->prepare($query);
   $stmt->execute();

   return $stmt;
  }
  
 }
?>