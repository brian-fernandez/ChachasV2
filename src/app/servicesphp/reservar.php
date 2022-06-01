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
           
            if (isset($_POST['info'])&& isset($_POST['tiempo']) && isset($_POST['idUsuario'])&& isset($_POST['idcliente'])&& isset($_POST['mesaid'])&& isset($_POST['total'])) {
               
                $item = array(
                    'info' =>$_POST['info'],
                    'idUsuario' =>$_POST['idUsuario'],
                    'idcliente' =>$_POST['idcliente'],
                    'mesaid' =>$_POST['mesaid'],
                    'total' =>$_POST['total'],
                    'fecha' =>$_POST['tiempo'],

            
                    
                );
                $res = $api->reservarproducto($item);
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
        
        default:
            # code...
            break;
    }

}
?>