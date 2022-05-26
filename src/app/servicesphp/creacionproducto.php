<?php 


header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include_once 'conexion.php';
include_once 'api.php';



$api = new ApiPeliculas();


if (isset($_POST['nombre'])&& isset($_POST['precio']) && isset($_POST['cantidad']) && isset($_POST['foto'])) {
  
    $item = array(
        'nombre' =>$_POST['nombre'],
        'precio' =>$_POST['precio'],
        'cantidad' =>$_POST['cantidad'],
        'foto' =>$_POST['foto'],


        
    );
    $res = $api->createproduct($item);
  
}else
{
    echo ' no entro';
}

?>