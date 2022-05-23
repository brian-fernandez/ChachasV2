<?php 


header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include_once 'conexion.php';
include_once 'api.php';


$api = new ApiPeliculas();

if (isset($_POST['opcion'])) {
   
    if ($_POST['opcion']==1) {

        if (isset($_POST['id'])) {
   
            $item = array(
                'id' =>$_POST['id'],
        
                
            );
            $res = $api->cambiarestpro($item);
        }
    }else {
        if (isset($_POST['id'])) {
   
            $item = array(
                'id' =>$_POST['id'],
        
                
            );
            $res = $api->cambiarestpro2($item);
        }
    }
}



?>