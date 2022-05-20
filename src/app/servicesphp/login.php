<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include_once 'conexion.php';
include_once 'api.php';



$api = new ApiPeliculas();




if(isset($_POST['ci']) && isset($_POST['contraseña']))
{
    
        $item = array(
            'ci' =>$_POST['ci'],
            'Contrasena' =>$_POST['contraseña'],
            
        );
    
     $res = $api->login($item);

   



              
}        






?>