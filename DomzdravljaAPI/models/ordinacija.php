<?php
 class Ordinacija{
  //db stuff
  private $conn;
  private $table = 'ordinacije';

  //props
  public $id_dom_zdravlja;
  public $naziv_ordinacije;
  public $opis;
  public $grad_naziv;
  public $id_grada;
  public $zupanija_naziv;
  public $id_zupanije;
  public $adresa;
  public $id_djelatnost;
  public $naziv_djelatnosti;
  public $br_telefona;
  public $email;
  public $radno_vrijeme;
  public $napomena;
  public $djelatnici_ordinacije;

  public function __construct($db){
   $this->conn = $db;
  }

  public function read(){
   //query

   $query = 'SELECT o.id_dom_zdravlja, o.naziv_ordinacije, o.opis, o.adresa, o.br_telefona, o.email, o.radno_vrijeme, o.napomena, g.grad_naziv, g.id_grada, z.zupanija_naziv, z.id_zupanije, o.id_djelatnost ,d.naziv_djelatnosti,mo.id, mo.ime, mo.prezime, t.naziv_tipa FROM ordinacije o LEFT JOIN zupanije z ON o.zupanija_id = z.id_zupanije LEFT JOIN gradovi g ON g.id_grada = o.grad_id LEFT JOIN djelatnosti d ON d.id = o.id_djelatnost LEFT JOIN medicinsko_osoblje mo ON o.id_dom_zdravlja = mo.dom_zdravlja LEFT JOIN tipovi t ON mo.tip = t.id';
   
   $stmt = $this->conn->prepare($query);
   $stmt->execute();

   return $stmt;
  }

  public function delete(){
   $query = 'DELETE FROM ' .$this->table. ' WHERE id_dom_zdravlja = :id';

   $stmt = $this->conn->prepare($query);
   $this->id_dom_zdravlja =  htmlspecialchars(strip_tags($this->id_dom_zdravlja));

   $stmt -> bindParam(':id', $this->id_dom_zdravlja);

   if($stmt->execute()){
    return true;
   }else{
    throw new Exception("Error \n".$stmt->errorCode());
    return false;
   }
  }

  public function update(){
   //$query = 'UPDATE '. $this->table . ' SET naziv_ordinacije = :naziv_ordinacije, opis = :opis, grad_id = :grad_id, zupanija_id = :zupanija_id, adresa = :adresa, id_djelatnost = :id_djelatnost, br_telefona = :br_telefona, emial = :email, radno_vrijeme = :ra'
  }

 }