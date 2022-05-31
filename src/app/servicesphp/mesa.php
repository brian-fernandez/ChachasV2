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
            
            if (isset($_GET['id'])) {
               
                $res = $api->deletedmesa($_GET['id']);
            }
            break;
        case 'ocupar':
                        if (isset($_POST['id'])) {
                            $item = array(
                                'id' =>$_POST['id'],
                        
                                
                            );
                            $res = $api->estadomesaocupado($item);
                        }
            
            break;
        case 'desocupar':
            if (isset($_POST['id'])) {
                $item = array(
                    'id' =>$_POST['id'],
            
                    
                );
                $res = $api->estadomesadesocupado($item);
            }
            break;
            case 'crear':
                if (isset($_POST['nombre'])) {
                    
                   
                    $res = $api->createmesa($_POST['nombre']);
                }
                break;
        
        default:
            # code...
            break;
    }

}
?>