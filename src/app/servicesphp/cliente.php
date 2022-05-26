<?php 

include_once 'conexion.php';
include_once 'api.php';


$api = new ApiPeliculas();



if (isset($_GET['opcion'])) {
  
    switch ($_GET['opcion']) {
        case 'ver':
                $api = $api->getcliente();
            break;
        case 'editar':
            

                
            break;
        case 'eliminar':
            
            break;
        case 'ocupar':
            
            break;
        case 'nuevo':
           
            if (isset($_GET['nombre'])&& isset($_GET['apellido'])&& isset($_GET['carnet'])) {
                echo 'entro a nuevo';
                $item = array(
                    'nombre' =>$_GET['nombre'],
                    'apellido' =>$_GET['apellido'],
                    'carnet' =>$_GET['carnet'],
            
                    
                );
                $res = $api->createclient($item);
            }
            break;
        
        default:
            # code...
            break;
    }

}
?>