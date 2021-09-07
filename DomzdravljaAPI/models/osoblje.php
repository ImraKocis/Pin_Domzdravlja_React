<?php 
 include_once('osoba.php');
 class Zaposlenik extends Osoba{
  private $conn;
  private $table = 'medicinsko_osoblje';

  public $id;
  public $sifra;
  public $tip;
  public $naziv_tipa;
  public $naziv_ordinacije;
  public $dom_zdravlja;
  public $naziv_djelatnosti;
  public $djelatnost;
  public $ime;
  public $prezime;

  public function __construct($db){
   $this->conn = $db;
  }

  public function read(){
   $query = 'SELECT mo.id ,mo.sifra, mo.tip,mo.ime, mo.prezime, t.naziv_tipa,o.naziv_ordinacije,d.naziv_djelatnosti, mo.djelatnosti, g.grad_naziv FROM medicinsko_osoblje mo LEFT JOIN tipovi t ON mo.tip = t.id_tipa LEFT JOIN ordinacije o ON mo.dom_zdravlja = o.id_dom_zdravlja LEFT JOIN djelatnosti d ON mo.djelatnosti = d.id LEFT JOIN gradovi g ON g.id_grada = o.grad_id';

   $stmt = $this->conn->prepare($query);
   $stmt->execute();

   return $stmt;
  }
  public function readSingle(){
    $query = 'SELECT mo.id ,mo.dom_zdravlja ,mo.sifra ,mo.tip,mo.ime, mo.prezime, t.naziv_tipa,o.naziv_ordinacije,d.naziv_djelatnosti, mo.djelatnosti, g.grad_naziv FROM '. $this->table . ' mo LEFT JOIN tipovi t ON mo.tip = t.id_tipa LEFT JOIN ordinacije o ON mo.dom_zdravlja = o.id_dom_zdravlja LEFT JOIN djelatnosti d ON mo.djelatnosti = d.id LEFT JOIN gradovi g ON g.id_grada = o.grad_id WHERE mo.id = ?
    LIMIT 0,1;';

    $stmt = $this->conn->prepare($query);

    $stmt->bindValue(1, $this->id, PDO::PARAM_INT);

    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $this->sifra = $row['sifra'];
    $this->ime = $row['ime']; 
    $this->prezime = $row['prezime']; 
    $this->naziv_tipa = $row['naziv_tipa'];
    $this->tip = $row['tip']; //id tipa
    $this->naziv_ordinacije = $row['naziv_ordinacije'];
    $this->dom_zdravlja = $row['dom_zdravlja'];
    $this->naziv_djelatnosti = $row['naziv_djelatnosti'];
    $this->djelatnosti = $row['djelatnosti'];  //id djelatnosti
    
  }
  public function create(){
   $query = 'INSERT INTO ' .$this->table.' SET ime = :ime, prezime = :prezime, sifra = :sifra, tip = :tip, dom_zdravlja = :dom_zdravlja, djelatnosti = :djelatnosti';
   
   $stmt = $this->conn->prepare($query);

   $this->ime = htmlspecialchars(strip_tags($this->ime));
   $this->prezime = htmlspecialchars(strip_tags($this->prezime));
   $this->sifra = htmlspecialchars(strip_tags($this->sifra));
   $this->tip = htmlspecialchars(strip_tags($this->tip));
   $this->dom_zdravlja = htmlspecialchars(strip_tags($this->dom_zdravlja));
   $this->djelatnosti = htmlspecialchars(strip_tags($this->djelatnosti));

   $stmt->bindParam(':ime', $this->ime);
   $stmt->bindParam(':prezime', $this->prezime);
   $stmt->bindParam(':sifra', $this->sifra);
   $stmt->bindParam(':tip', $this->tip);
   $stmt->bindParam(':dom_zdravlja', $this->dom_zdravlja);
   $stmt->bindParam(':djelatnosti', $this->djelatnosti);

   if($stmt->execute()) {
     return true;
   }else{
    print_r($stmt->errorInfo()); 
    return false;
   }
  }

  public function update(){
   $query = 'UPDATE ' .$this->table.' SET ime = :ime, prezime = :prezime, tip = :tip, dom_zdravlja = :dom_zdravlja, djelatnosti = :djelatnosti 
   WHERE id = :id';
   
   $stmt = $this->conn->prepare($query);

   $this->ime = htmlspecialchars(strip_tags($this->ime));
   $this->prezime = htmlspecialchars(strip_tags($this->prezime));
   $this->tip = htmlspecialchars(strip_tags($this->tip));
   $this->dom_zdravlja = htmlspecialchars(strip_tags($this->dom_zdravlja));
   $this->djelatnosti = htmlspecialchars(strip_tags($this->djelatnosti));
   $this->id = htmlspecialchars(strip_tags($this->id));

   $stmt->bindParam(':ime', $this->ime);
   $stmt->bindParam(':prezime', $this->prezime);
   $stmt->bindParam(':tip', $this->tip);
   $stmt->bindParam(':dom_zdravlja', $this->dom_zdravlja);
   $stmt->bindParam(':djelatnosti', $this->djelatnosti);
   $stmt->bindParam(':id', $this->id);
   if($stmt->execute()) {
     return true;
   }else{
    echo "Error code: " .$stmt->errorCode();
    return false;
   }
  }

  public function delete(){
   $query = 'DELETE FROM '. $this->table. ' WHERE id = :id';

   $stmt = $this->conn->prepare($query);

   $this->id = htmlspecialchars(strip_tags($this->id));

   $stmt->bindParam(':id', $this->id);
   
   if($stmt->execute()) {
    return true;
   }else{
    echo "Error code: ".$stmt->errorCode();
   }
  }
 }
?>