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
  
  public function login()
  {
    $query = 'SELECT * FROM '. $this->table .' WHERE userName = ? AND userPassword = ?';

      $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->userName);
        $stmt->bindParam(2, $this->userPassword);

      $stmt->execute();

      //var_dump($stmt->rowCount());
      if($stmt->rowCount() == 1)
      {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return array(
          'userName' => $this->userName,
          'id' => $row['userId'],
          'ime'=> $row['ime'],
          'prezime'=>$row['prezime']
        );
      }else{
        throw new Exception("Krivo korisnicko ime ili lozinka!");
      }  
  }
 }
?>