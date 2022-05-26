<?php 



include_once 'conexion.php';
include_once 'api.php';



$api = new ApiPeliculas();




if (isset($_GET['id'])) {
   
    $item = array(
        'id' =>$_GET['id'],

    );
    $res = $api->elimiarproduct($item);
}else
{
    echo 'no entro';
}

?>