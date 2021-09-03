<?php 
 defined('DS') ? null : define('DS', DIRECTORY_SEPARATOR); 
    defined('SITE_ROOT') ? null : define('SITE_ROOT', DS.'wamp64'.DS.'www'.DS.'Pin_Domzdravlja_1.0'.DS.'domzdravlja'.DS.'DomzdravljaAPI');
    defined('CON_PATH') ? null : define('CON_PATH', SITE_ROOT.DS.'config');
    defined('MODELS_PATH') ? null : define('MODELS_PATH', SITE_ROOT.DS.'models');

    //config file
    require_once(CON_PATH.DS.'connection.php');
    require_once(MODELS_PATH.DS.'ordinacija.php');
    require_once(MODELS_PATH.DS.'osoblje.php');
    require_once(MODELS_PATH.DS.'gradovi.php');
    require_once(MODELS_PATH.DS.'zupanije.php');
    require_once(MODELS_PATH.DS.'djelatnost.php');
    require_once(MODELS_PATH.DS.'login.php');
?>