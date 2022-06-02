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
           
            if (isset($_POST['nombre'])&& isset($_POST['apellido'])&& isset($_POST['carnet'])) {
              
                $item = array(
                    'nombre' =>$_POST['nombre'],
                    'apellido' =>$_POST['apellido'],
                    'carnet' =>$_POST['carnet'],
            
                    
                );
                $res = $api->createclient($item);
            }
            break;

        case 'getidcliente':
            if (isset($_POST['id'])) {
              
                $item = array(
                    'id' =>$_POST['id'],
     
                );
                $res = $api->getidclient($item);
            }
            break;
        case 'detalle':
            if (isset($_POST['id'])) {
              
                $item = array(
                    'id' =>$_POST['id'],
     
                );
                $res = $api->detalleclienteid($item);
            }
            break;
        default:
            # code...
            break;
    }

}
?>