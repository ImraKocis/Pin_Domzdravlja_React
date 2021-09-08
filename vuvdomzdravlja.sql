-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 08, 2021 at 09:43 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vuvdomzdravlja`
--

-- --------------------------------------------------------

--
-- Table structure for table `djelatnosti`
--

DROP TABLE IF EXISTS `djelatnosti`;
CREATE TABLE IF NOT EXISTS `djelatnosti` (
  `id` int(11) NOT NULL,
  `naziv_djelatnosti` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2 COLLATE=latin2_croatian_ci;

--
-- Dumping data for table `djelatnosti`
--

INSERT INTO `djelatnosti` (`id`, `naziv_djelatnosti`) VALUES
(1, 'Opća obiteljska medicina'),
(2, 'Zdravstvena zaštita žena'),
(3, 'Stomatologija'),
(4, 'Pedijatrija');

-- --------------------------------------------------------

--
-- Table structure for table `gradovi`
--

DROP TABLE IF EXISTS `gradovi`;
CREATE TABLE IF NOT EXISTS `gradovi` (
  `id_grada` int(11) NOT NULL AUTO_INCREMENT,
  `grad_naziv` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `id_zupanije` int(11) NOT NULL,
  PRIMARY KEY (`id_grada`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin2 COLLATE=latin2_croatian_ci;

--
-- Dumping data for table `gradovi`
--

INSERT INTO `gradovi` (`id_grada`, `grad_naziv`, `id_zupanije`) VALUES
(1, 'Virovitica', 1),
(2, 'Slatina', 1),
(3, 'Osijek', 2),
(4, 'Orahovica', 1),
(6, 'Našice', 2),
(7, 'Bjelovar', 3),
(8, 'Daruvar', 3);

-- --------------------------------------------------------

--
-- Table structure for table `login_table`
--

DROP TABLE IF EXISTS `login_table`;
CREATE TABLE IF NOT EXISTS `login_table` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(20) COLLATE latin2_croatian_ci NOT NULL,
  `userPassword` varchar(20) COLLATE latin2_croatian_ci NOT NULL,
  `ime` varchar(20) COLLATE latin2_croatian_ci NOT NULL,
  `prezime` varchar(20) COLLATE latin2_croatian_ci NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin2 COLLATE=latin2_croatian_ci;

--
-- Dumping data for table `login_table`
--

INSERT INTO `login_table` (`userId`, `userName`, `userPassword`, `ime`, `prezime`) VALUES
(1, 'admin24', 'admin', 'Imra', 'Kocis');

-- --------------------------------------------------------

--
-- Table structure for table `medicinsko_osoblje`
--

DROP TABLE IF EXISTS `medicinsko_osoblje`;
CREATE TABLE IF NOT EXISTS `medicinsko_osoblje` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sifra` varchar(6) COLLATE latin2_croatian_ci NOT NULL,
  `ime` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `prezime` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `tip` int(11) NOT NULL,
  `dom_zdravlja` int(11) NOT NULL,
  `djelatnosti` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=latin2 COLLATE=latin2_croatian_ci;

--
-- Dumping data for table `medicinsko_osoblje`
--

INSERT INTO `medicinsko_osoblje` (`id`, `sifra`, `ime`, `prezime`, `tip`, `dom_zdravlja`, `djelatnosti`) VALUES
(1, '123456', 'Bojan', 'Plantak', 1, 1, 3),
(2, '012345', 'Valentina', 'Perković', 2, 1, 3),
(4, '666666', 'Vladimir', 'Bukarica', 1, 3, 1),
(12, '123401', 'Davor', 'Špehar', 1, 4, 3),
(9, '987654', 'Vesna', 'Prpić', 2, 3, 1),
(13, '123402', 'Valerija', 'Sabo', 2, 4, 3),
(14, '123403', 'Branimir', 'Car', 1, 5, 3),
(15, '123404', 'Nataša', 'Gržetić', 1, 5, 3),
(16, '123405', 'Darko', 'Radić', 3, 5, 3),
(17, '123406', 'Marta', 'Horvat', 2, 5, 3),
(18, '123407', 'Jasmina', 'Necić', 1, 6, 1),
(19, '123408', 'Nataša', 'Jurić', 2, 6, 1),
(20, '123409', 'Josip', 'Tonković', 1, 7, 2),
(21, '123450', 'Maja ', 'Ložnjak', 2, 7, 2),
(22, '123451', 'Željkica', 'Gerenčir', 1, 8, 4),
(23, '123452', 'Valerija', 'Šimič', 1, 9, 3),
(24, '123453', 'Marko', 'Horvat', 3, 9, 3),
(25, '123454', 'Vesna', 'Šostar', 1, 10, 3),
(26, '123455', 'Lucija', 'Nemet', 2, 10, 3),
(27, '123457', 'Željka', 'Stjepanović-Kepčija', 1, 11, 1),
(28, '123458', 'Maja', 'Jurić', 2, 11, 1),
(29, '123459', 'Davor', 'Bilandžija', 1, 12, 3),
(30, '123460', 'Mateo', 'Horvatić', 3, 12, 3),
(31, '123461', 'Branko', 'Lederer', 1, 13, 2),
(32, '123462', 'Ana', 'Nemet', 2, 13, 2),
(33, '123463', 'Lidija', 'Prpić', 1, 14, 3),
(34, '123464', 'Veronika', 'Ivandić', 2, 14, 3),
(38, '123466', 'Ena', 'Main', 2, 15, 4),
(37, '123465', 'Ivan', 'Ivanović', 1, 15, 4),
(39, '123467', 'Branka', 'Petrov-Križanović', 1, 16, 4),
(40, '123468', 'Miroslav', 'Kapetan', 3, 16, 4),
(41, '123469', 'Marijana', 'Peček-Vidaković', 1, 17, 1),
(42, '123470', 'Mirjana', 'Manceta', 2, 17, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ordinacije`
--

DROP TABLE IF EXISTS `ordinacije`;
CREATE TABLE IF NOT EXISTS `ordinacije` (
  `id_dom_zdravlja` int(11) NOT NULL AUTO_INCREMENT,
  `naziv_ordinacije` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `opis` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `grad_id` int(11) NOT NULL,
  `zupanija_id` int(11) NOT NULL,
  `adresa` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `id_djelatnost` int(11) NOT NULL,
  `br_telefona` varchar(15) COLLATE latin2_croatian_ci NOT NULL,
  `email` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `radno_vrijeme` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  `napomena` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  PRIMARY KEY (`id_dom_zdravlja`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin2 COLLATE=latin2_croatian_ci;

--
-- Dumping data for table `ordinacije`
--

INSERT INTO `ordinacije` (`id_dom_zdravlja`, `naziv_ordinacije`, `opis`, `grad_id`, `zupanija_id`, `adresa`, `id_djelatnost`, `br_telefona`, `email`, `radno_vrijeme`, `napomena`) VALUES
(1, 'Stomatološka ordinacija Dr. Bojan Plantak', 'Opći stomatolog', 2, 1, 'Bana Jelačića 6, 33520 Slatina', 3, '033401378', 'ordinacija.plantak@gmail.com', 'pon, srij, pet od 8:00-16:00\r\nuto i čet od 13:00-19:00', 'Naručivanje osobno ili putem emaila i telefona'),
(3, 'Ordinacija opće med. Vladimir Bukarica', 'Opća obiteljska medicina', 3, 2, 'Park kralja Petra Krešimira IV 6\r\n31000 Osijek', 1, '031 225 364', 'vladimir.bukarica@gmail.com', 'pon,sri,pet 07:00 do 13:00\r\nuto,cet 13:00 do 19:00', ''),
(4, 'Ordinacija dentalne medicine Špehar', 'Opći stomatolog', 7, 3, 'Trg kralja Tomislava 3, Bjelovar', 3, '043 246 222', 'info@ordinacijaspehar.hr', 'ponedjeljak, četvrtak, petak\r\n7:00 - 14:30\r\n\r\nutorak, srijeda\r\n13:00 - 20:30', 'Narudžbe primamo putem telefona ili mailom'),
(5, 'Ordinacija dentalne medicine Branimir Car', 'Opći stomatolog', 1, 1, 'Pejačevićeva 2, Virovitica', 3, '033/410-404', 'info@dentalcar.hr', 'Ponedjeljak i srijeda:\r\n13:00 - 20:30\r\nUtorak, četvrtak i petak:\r\n07:00 - 14:30', 'Narudžbe primamo telefonom ili na email '),
(6, 'Ordinacija dr. Nedić', 'Ordinacija opće obiteljske medicine', 2, 1, 'Bana Jelačića 39, Slatina', 1, '033/552333', 'poliklinika.nedic@gmail.com', 'Ponedjeljak, srijeda, petak\r\n07:00-13:00\r\nutorak, četvrtak\r\n13:00-19:00', 'Narudžbe primamo na emial ili telefon minimalo dva dana prije'),
(7, 'Ordinacija za ženske bolesti porodništvo i ultrazvuk Josip Tonković', 'Ginekologija', 1, 1, 'Trg kralja Tomislava 8, Virovitica', 2, '033 721 137', '', 'Svakim danom osim subotom i nedjeljom\r\n06:00-17:00', 'Narudžbe isključivo telefonom'),
(8, 'Dom zdravlja slatina odjel za pedijatriju', 'Pedijatrija', 2, 1, 'Ul. bana Josipa Jelačića 33, Slatina', 4, '033553994', '', 'Ponedjeljak i srijeda:\r\n13:00 - 19:00\r\nUtorak, četvrtak i petak:\r\n07:00 - 14:00', 'Narudžbe primamo isključivo telefonom'),
(9, 'Ordinacija dentalne medicine - Valerija Šimič', 'Opći stomatolog', 6, 2, 'Ul. bana Teodora Pejačevića 1a, Našice', 3, '031359708', 'simic.valerija@gmial.com', 'Ponedjeljak i srijeda:\r\n13:00 - 20:30\r\nUtorak, četvrtak i petak:\r\n07:00 - 14:30', 'Narudžbe primamo telefonom ili na email'),
(10, 'Stomatolog - Vesna Šostar', 'Opći stomatolog', 6, 2, ' Ivane Brlić Mažuranić 3, Našice', 3, '031611250', '', 'Ponedjeljak i srijeda:\r\n13:00 - 20:30\r\nUtorak, četvrtak i petak:\r\n07:00 - 14:30', 'Narudžbe pacjenata primamo isključivo telefonom'),
(11, 'Ordinacija opće medicine dr. Željka Stjepanović-Kepčija', 'Opća obiteljska medicina', 8, 3, 'Ul. Petra Preradovića, Daruvar', 1, '043 331 018', '', 'Ponedjeljak i srijeda:\r\n13:00 - 19:00\r\nUtorak, četvrtak i petak:\r\n07:00 - 13:00', 'Narudžbe primamo telefonom'),
(12, 'Stomatološka ordinacija Bilandžija', 'Opći stomatolog', 8, 3, 'Ul. Dragutina Domjanića 1, Daruvar', 3, '043 335 400', 'info@bilandzija.hr', 'Ponedjeljak i srijeda:\r\n13:00 - 20:30\r\nUtorak, četvrtak i petak:\r\n07:00 - 14:30', 'Naručivanje pacjenata vršimo putem maila ili telefona'),
(13, 'PRIVATNA GINEKOLOŠKA ORDINACIJA prim. dr. BRANKO LEDERER', 'Ginekologija', 3, 2, 'Ul. Svete Ane 77, Osijek', 2, '031 212 000', 'ordinacija@lederer.hr', 'Ponedjeljak do petak:\r\n08:00-12:00, 17:00-19:00\r\n', 'Narudžbe primamo telefonom ili na emial'),
(14, 'Privatna stomatološka ordinacija Lidija Prpić', 'Opći stomatolog', 3, 2, 'Ul. Adama Reisnera 45, Osijek', 3, '031202097', 'info@ordinacija-prpić@hr', 'Ponedjeljak i srijeda:\r\n13:00 - 20:30\r\nUtorak, četvrtak i petak:\r\n07:00 - 14:30', 'Naručivanje\r\n  - telefonom ili osobno\r\nPlaćanje\r\n- prihvaćamo sve vrste plaćanja'),
(15, 'Opća bolnica bjelovar odjel za pedijatriju', 'Pedijatrija', 7, 3, 'Ul. Antuna Mihanovića 8, Bjelovar', 4, '043279222', '', 'Ponedjeljak i srijeda i petak:\r\n07:00 - 14:00\r\nUtorak, četvrtak:\r\n13:00-20:00', ''),
(16, 'PEDIJATRIJSKA ORDINACIJA dr. PETROV-KRIŽANOVIĆ', 'Pedijatrija', 3, 2, 'Ul. Ljudevita Posavskog 2, Osijek', 4, '031300778', '', 'Ponedjeljak i srijeda:\r\n13:00 - 20:30\r\nUtorak, četvrtak i petak:\r\n07:00 - 14:30', 'Naručivanje osobno ili telefonom'),
(17, 'PEČEK-VIDAKOVIĆ MARIJANA dr.med.', 'Opća obiteljska medicina', 4, 1, 'Stošićevo šetalište bb, 33515, Orahovica', 1, '098342514', '', 'Ponedjeljak i srijeda:\r\n13:00 - 20:30\r\nUtorak, četvrtak i petak:\r\n07:00 - 14:30', 'Naručivanje osobno ili telefonom');

-- --------------------------------------------------------

--
-- Table structure for table `tipovi`
--

DROP TABLE IF EXISTS `tipovi`;
CREATE TABLE IF NOT EXISTS `tipovi` (
  `id_tipa` int(11) NOT NULL,
  `naziv_tipa` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  PRIMARY KEY (`id_tipa`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2 COLLATE=latin2_croatian_ci;

--
-- Dumping data for table `tipovi`
--

INSERT INTO `tipovi` (`id_tipa`, `naziv_tipa`) VALUES
(1, 'Doktor'),
(2, 'Medicinska sestra'),
(3, 'Medicinski tehničar'),
(4, 'Administrator');

-- --------------------------------------------------------

--
-- Table structure for table `zupanije`
--

DROP TABLE IF EXISTS `zupanije`;
CREATE TABLE IF NOT EXISTS `zupanije` (
  `id_zupanije` int(11) NOT NULL AUTO_INCREMENT,
  `zupanija_naziv` varchar(255) COLLATE latin2_croatian_ci NOT NULL,
  PRIMARY KEY (`id_zupanije`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin2 COLLATE=latin2_croatian_ci;

--
-- Dumping data for table `zupanije`
--

INSERT INTO `zupanije` (`id_zupanije`, `zupanija_naziv`) VALUES
(1, 'Virovitičko-podravska županija'),
(2, 'Osiječko-baranjska županija'),
(3, 'Bjelovarsko-bilogorska županija');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
