<?php

include_once 'user.php';

class ApiPeliculas{

    function getAll(){
        $pelicula = new Pelicula();

        $peliculas["items"] = array();

        $res = $pelicula->obtenerPersonas();
        
       
        if($res){


while ( $row = $res->fetch(PDO::FETCH_ASSOC) ) {
    $item=array(
        "CI" => $row['CI'],
        "Nombre" => $row['Nombre'],
        "Contraseña" => $row['Contraseña'],
        "Cargo_idCargo" => $row['Cargo_idCargo'],
        "Apellido" => $row['Apellido']  
         
    );
    
    array_push($peliculas["items"], $item);
    $this->printJSON($peliculas);
}

          
            

            
            
        }else{
            echo 'hola';
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }

    function getById($id){
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();

        $res = $pelicula->obtenerPersona($id);

        if($res->rowCount() == 1){
            $row = $res->fetch();

            $item=array(
                "cod_id" => $row['cod_id'],
                "nombre" => $row['nombre'],
                "password" => $row['password'],
                "cargo" => $row['cargo'],
                "foto" =>$row['foto']
            );
            array_push($peliculas["items"], $item);
            $this->printJSON($peliculas);
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }



function login($datos)
{
    $pelicula = new Pelicula();
    $peliculas = array();
    $peliculas["items"] = array();

    $ci = $datos['ci'];
    $contrasena = $datos['Contrasena'];
    


    $res = $pelicula->login($ci,$contrasena);

    if($res)
    {
        $row = $res->fetch();

        $item=array(
            "CI" => $row['CI'],
            "Nombre" => $row['Nombre'],
            "Contraseña" => $row['Contraseña'],
            "Cargo_idCargo" => $row['Cargo_idCargo'],
            "Fecha_nacimiento" =>$row['Fecha_nacimiento'],
            "Apellido" => $row['Apellido'],
            
        );
        
        array_push($peliculas["items"], $item,"Encontrado");
        $this->printJSON($peliculas);
    }else{
        echo json_encode(array('mensaje' => 'No hay elementos'));
    }

}




    function obtcanpro()
    {
        $pelicula = new Pelicula();

        $peliculas["items"] = array();

        $res = $pelicula->obtenercantidadproducto();
        echo json_encode($res);

        if($res)
        {
            $row = $res->fetch();
    
            $item=array(
                "idProducto" => $row['idProducto'],
                "Nombre" => $row['Nombre'],
                "Foto" => $row['Foto'],
                "Estado" => $row['Estado'],
                "Cantidad" =>$row['Cantidad'],
                "Precio" => $row['Precio'],
                
            );
            
            array_push($peliculas["items"], $item,"Encontrado");
            $this->printJSON($peliculas);
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
        
    }






    function error($mensaje){
        echo json_encode(array('mensaje' => $mensaje));
    }

    function printJSON($array){
        echo json_encode($array);
    }


   
}

?>
