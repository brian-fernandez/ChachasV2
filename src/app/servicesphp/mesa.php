<?php 

include_once 'conexion.php';
include_once 'api.php';


$api = new ApiPeliculas();



if (isset($_GET['opcion'])) {
 
    switch ($_GET['opcion']) {
        case 'ver':
                $api = $api->gettable();
            break;
        case 'editar':
            
            break;
        case 'eliminar':
            
            break;
        case 'ocupar':
            
            break;
        
        default:
            # code...
            break;
    }

}
?>