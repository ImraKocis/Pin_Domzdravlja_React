<?php
    class Configuration{
        public $host = 'localhost:3306';
        public $dbname = 'vuvdomzdravlja';
        public $username = 'root';
        public $password = '';
    }

    class Osoba
    {
        public $ime = 'n/a';
        public $prezime = 'n/a';
    }

    class Doktor extends Osoba 
    {
        public $id = 'n/a';
        public $id_tip = 'n/a';
        public $dom_zdravlja = 'n/a';
        public $djelatnost = 'n/a';

        public function __construct($sIme=null, $sPrezime=null, $nId=null, $nId_tip=null, $sDom_zdravlja=null,$sDjelatnost=null){
            if($sIme) $this->ime=$sIme;
            if($sPrezime) $this->prezime=$sPrezime;
            if($nId) $this->id=$nId;
            if($nId_tip) $this->id_tip=$nId_tip;
            if($sDom_zdravlja) $this->dom_zdravlja=$sDom_zdravlja;
            if($sDjelatnost) $this->djelatnost=$sDjelatnost;
        }
    }

    class MedSestra extends Osoba 
    {
        public $id = 'n/a';
        public $id_tip = 'n/a';
        public $dom_zdravlja = 'n/a';
        public $djelatnost = 'n/a';

        public function __construct($sIme=null, $sPrezime=null, $nId=null, $nId_tip=null, $sDom_zdravlja=null,$sDjelatnost=null){
            if($sIme) $this->ime=$sIme;
            if($sPrezime) $this->prezime=$sPrezime;
            if($nId) $this->id=$nId;
            if($nId_tip) $this->id_tip=$nId_tip;
            if($sDom_zdravlja) $this->dom_zdravlja=$sDom_zdravlja;
            if($sDjelatnost) $this->djelatnost=$sDjelatnost;
        }
    }

    class MedTehnicar extends Osoba 
    {
        public $id = 'n/a';
        public $id_tip = 'n/a';
        public $dom_zdravlja = 'n/a';
        public $djelatnost = 'n/a';

        public function __construct($sIme=null, $sPrezime=null, $nId=null, $nId_tip=null, $sDom_zdravlja=null,$sDjelatnost=null){
            if($sIme) $this->ime=$sIme;
            if($sPrezime) $this->prezime=$sPrezime;
            if($nId) $this->id=$nId;
            if($nId_tip) $this->id_tip=$nId_tip;
            if($sDom_zdravlja) $this->dom_zdravlja=$sDom_zdravlja;
            if($sDjelatnost) $this->djelatnost=$sDjelatnost;
        }
    }

    class Administrator extends Osoba 
    {
        public $id = 'n/a';
        public $id_tip = 'n/a';
        public $dom_zdravlja = 'n/a';
        public $djelatnost = 'n/a';

        public function __construct($sIme=null, $sPrezime=null, $nId=null, $nId_tip=null, $sDom_zdravlja=null,$sDjelatnost=null){
            if($sIme) $this->ime=$sIme;
            if($sPrezime) $this->prezime=$sPrezime;
            if($nId) $this->id=$nId;
            if($nId_tip) $this->id_tip=$nId_tip;
            if($sDom_zdravlja) $this->dom_zdravlja=$sDom_zdravlja;
            if($sDjelatnost) $this->djelatnost=$sDjelatnost;
        }
    }

    class Ordinacija  
    {
        public $id_ordinacije = 'n/a';
        public $naziv = 'n/a';
        public $opis = 'n/a';
        public $grad= 'n/a';
        public $zupanija ='n/a';
        public $adresa = 'n/a';
        public $djelatnost = 'n/a';
        public $br_tel = 'n/a';
        public $email = 'n/a';
        public $radno_vrijeme = 'n/a';
        public $napomena = 'n/a';
        public $djelatnici_ordinacije = 'n/a';

        public function __construct($nId_ordinacije = null, $sNaziv = null, $sOpis = null, $sGrad=null, $sZupanija = null, $sAdresa = null, $sDjelatnost = null, $sBrTel = null, $sEmail = null, $sRadno_vrijeme = null, $sNapomena = null, $oDjelatnici = null)
        {
            if($nId_ordinacije) $this->id_ordinacije=$nId_ordinacije;
            if($sNaziv) $this->naziv=$sNaziv;
            if($sOpis) $this->opis=$sOpis;
            if($sGrad) $this->grad=$sGrad;
            if($sZupanija) $this->zupanija=$sZupanija;
            if($sAdresa) $this->adresa=$sAdresa;
            if($sDjelatnost) $this->djelatnost=$sDjelatnost;
            if($sBrTel) $this->br_tel=$sBrTel;
            if($sEmail) $this->email=$sEmail;
            if($sRadno_vrijeme) $this->radno_vrijeme=$sRadno_vrijeme;
            if($sNapomena) $this->napomena=$sNapomena;
            if($oDjelatnici) $this->djelatnici_ordinacije = $oDjelatnici;
        }
    }
    
    class Zupanija
    {
        public $id_zupanije = 'n/a';
        public $naziv_zupanije = 'n/a';

        public function __construct($nId = null, $sNaziv = null){
            if($nId) $this->id_zupanije=$nId;
            if($sNaziv) $this->naziv_zupanije=$sNaziv;
        }
    }

    class Grad
    {
        public $id_grada = 'n/a';
        public $naziv_grada = 'n/a';
        public $id_zupanije = 'n/a';

        public function __construct($nId = null, $sNaziv = null, $nId_zupanije = null){
            if($nId) $this->id_grada=$nId;
            if($sNaziv) $this->naziv_grada=$sNaziv;
            if($nId_zupanije) $this->id_zupanije = $nId_zupanije;
        }
    }
    
?>