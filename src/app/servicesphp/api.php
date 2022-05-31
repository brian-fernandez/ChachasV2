<?php

include_once 'user.php';

class ApiPeliculas{

    function getAll(){
        $pelicula = new Pelicula();

        $peliculas["items"] = array();

        $res = $pelicula->obtenerPersonas();
        
       
        if($res){
            

            while ( $row = $res->fetch( ) ) {
                
                $item=array(
                    "CI" => $row['CI'],
                    "Nombre" => $row['Nombre'],
                    "Contraseña" => $row['Contraseña'],
                    "Cargo_idCargo" => $row['Cargo_idCargo'],
                    "Apellido" => $row['Apellido'],  
                    
                );

                array_push($peliculas["items"], $item);
            
                
            
            }

          
           return $this->printJSON($peliculas);        
           
        
            
        }else{
            
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }
#Uusuario

    function getById($id){
       
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();
        $ci = $id['ci'];


     
        $res = $pelicula->obtenerPersona($ci);
        
        if($res){
            $row = $res->fetch();

            $item=array(
                "CI" => $row['CI'],
                "Nombre" => $row['Nombre'],
                "Fecha_nacimiento" =>$row['Fecha_nacimiento'],
                "Apellido" => $row['Apellido'],
                "Foto" => $row['Foto'],
                "Cargo" => $row['Cargo'],
                
            );
            
            array_push($peliculas["items"], $item,"Encontrado");
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

//  Productos


    function obtcanpro()
    {
        $pelicula = new Pelicula();

        $peliculas["items"] = array();

        $res = $pelicula->obtenercantidadproducto();
        

        if($res)
        {
            while ( $row = $res->fetch( ) ) {
            $item=array(
                "idProducto" => $row['idProducto'],
                "Nombre" => $row['Nombre'],
                "Foto" => $row['Foto'],
                "Estado" => $row['Estado'],
                "Cantidad" =>$row['Cantidad'],
                "Precio" => $row['Precio'],
                
            );
            
            array_push($peliculas["items"], $item);
        }
          return  $this->printJSON($peliculas);
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
        
    }

    function cambiarestpro($idprod)
    {
        
        $pelicula = new Pelicula();

        $peliculas["items"] = array();
        $idproducto = $idprod['id'];
        $res = $pelicula->cambiardisponibilidad($idproducto);
        

        if($res)
        {
            while ( $row = $res->fetch( ) ) {
                $item=array(
                    "idProducto" => $row['idProducto'],
                    "Nombre" => $row['Nombre'],
                    "Foto" => $row['Foto'],
                    "Estado" => $row['Estado'],
                    "Cantidad" =>$row['Cantidad'],
                    "Precio" => $row['Precio'],
                    
                );
                
                array_push($peliculas["items"], $item);
        }
        return  $this->printJSON($peliculas);
    }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }

    function cambiarestpro2($idprod)
    {
        
        $pelicula = new Pelicula();

        $peliculas["items"] = array();
        $idproducto = $idprod['id'];
        $res = $pelicula->cambiardisponibilidad2($idproducto);
        

        if($res)
        {
            while ( $row = $res->fetch( ) ) {
                $item=array(
                    "idProducto" => $row['idProducto'],
                    "Nombre" => $row['Nombre'],
                    "Foto" => $row['Foto'],
                    "Estado" => $row['Estado'],
                    "Cantidad" =>$row['Cantidad'],
                    "Precio" => $row['Precio'],
                    
                );
                
                array_push($peliculas["items"], $item);
        }
        return  $this->printJSON($peliculas);
    }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }


    function getidproduct($id){
       
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();
        $ci = $id['id'];


     
        $res = $pelicula->obtidproducto($ci);
        
        if($res){

            while ( $row = $res->fetch( ) ) {
                $item=array(
                    "idProducto" => $row['idProducto'],
                    "Nombre" => $row['Nombre'],
                    "Foto" => $row['Foto'],
                    "Estado" => $row['Estado'],
                    "Cantidad" =>$row['Cantidad'],
                    "Precio" => $row['Precio'],
                    
                );
                
                array_push($peliculas["items"], $item);
        }
        return  $this->printJSON($peliculas);
          
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }

    function updateprodu($id){
       
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();
       


     
        $res = $pelicula->actualizarproducto($id);
        
        if($res){
               
            while ( $row = $res->fetch( ) ) {
                $item=array(
                    "idProducto" => $row['idProducto'],
                    "Nombre" => $row['Nombre'],
                    "Foto" => $row['Foto'],
                    "Estado" => $row['Estado'],
                    "Cantidad" =>$row['Cantidad'],
                    "Precio" => $row['Precio'],
                    
                );
                
                array_push($peliculas["items"], $item);
        }
        return  $this->printJSON($peliculas);
          
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }

    function elimiarproduct($id){
       
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();
       


     
        $res = $pelicula->deletedproduct($id);
        
        if($res){
               
            while ( $row = $res->fetch( ) ) {
                $item=array(
                    "idProducto" => $row['idProducto'],
                    "Nombre" => $row['Nombre'],
                    "Foto" => $row['Foto'],
                    "Estado" => $row['Estado'],
                    "Cantidad" =>$row['Cantidad'],
                    "Precio" => $row['Precio'],
                    
                );
                
                array_push($peliculas["items"], $item);
        }
        return  $this->printJSON($peliculas);
          
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }

    function createproduct($id){
       
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["items"] = array();
       


     
        $res = $pelicula->crearproducto($id);
        
        if($res){
               
            
               
            $item=array(
                "creado" => "creado",
             
            );

                
         array_push($peliculas["items"], $item);
        
        return  $this->printJSON($peliculas);
          
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }



/*reservas*/


    function obtreservas()
    {
        $pelicula = new Pelicula();

        $peliculas["items"] = array();
       
        $res = $pelicula->obtenerreservas();
        

        if($res)
        {
            while ( $row = $res->fetch( ) ) {
            $item=array(
                "idreserva" => $row['idreserva'],
                "Fecha" => $row['Fecha'],
                 "informacion" => $row['informacion'],
                 "usuario" => $row['usuario'],
                
                 "nombre_mesa" =>$row['nombre_mesa'],
                 "cliente" => $row['cliente'],
                
            );
            
            array_push($peliculas["items"], $item);
        }
          return  $this->printJSON($peliculas);
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
        
    }

    function reservarproducto($datos)
    {

        $pelicula = new Pelicula();

        $peliculas["items"] = array();
       
        $res = $pelicula->reservar($datos);
        

        if($res)
        {

            $item=array(
                "creado" => "creado",
             
            );

                
         array_push($peliculas["items"], $item);
        
        return  $this->printJSON($peliculas);
            
          
        }
        
        else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
        
    }
/*Mesas */


function gettable(){
    $pelicula = new Pelicula();
    $peliculas["items"] = array();
    $res = $pelicula->obtmesas();
    if($res){
        while ( $row = $res->fetch( ) ) {
            
            $item=array(
                "idMesa" => $row['idMesa'],
                "Nombre" => $row['Nombre'],
                "Estado" => $row['Estado'],
                
            );
            array_push($peliculas["items"], $item);
        }
       return $this->printJSON($peliculas);        
    }else{  
        echo json_encode(array('mensaje' => 'No hay elementos'));
    }
}

function estadomesaocupado($idprod)
{
    
    $pelicula = new Pelicula();

    $peliculas["items"] = array();
    $idproducto = $idprod['id'];
    $res = $pelicula->ocuparmesa($idproducto);
    

    if($res)
    {
        $item=array(
            "estado-cambiado" => "ocupado",
         
        );

            
     array_push($peliculas["items"], $item);
    
    return  $this->printJSON($peliculas);
}else{
        echo json_encode(array('mensaje' => 'No hay elementos'));
    }
}

function estadomesadesocupado($idprod)
{
    
    $pelicula = new Pelicula();

    $peliculas["items"] = array();
    $idproducto = $idprod['id'];
    $res = $pelicula->desocuparmesa($idproducto);
    

    if($res)
    {
        $item=array(
            "estado-cambiado" => "desocupado",
         
        );

            
     array_push($peliculas["items"], $item);
    
    return  $this->printJSON($peliculas);
}else{
        echo json_encode(array('mensaje' => 'No hay elementos'));
    }
}
function createmesa($datos){
    $pelicula = new Pelicula();
    $peliculas["items"] = array();
    
    $res = $pelicula->nuevamesa($datos);
    if($res){
               
            
               
        $item=array(
            "creado" => "creado",
         
        );

            
     array_push($peliculas["items"], $item);
    
    return  $this->printJSON($peliculas);  
    }else{  
        echo json_encode(array('mensaje' => 'No hay elementos'));
    }
}
function deletedmesa($datos){
    $pelicula = new Pelicula();
    $peliculas["items"] = array();
    
    $res = $pelicula->eliminarmesa($datos);
    if($res){
               
            
               
        $item=array(
            "mesa" => "eliminado",
         
        );

            
     array_push($peliculas["items"], $item);
    
    return  $this->printJSON($peliculas);  
    }else{  
        echo json_encode(array('mensaje' => 'No hay elementos'));
    }
}

/* Cliente */
function getcliente(){
    $pelicula = new Pelicula();
    $peliculas["items"] = array();
    $res = $pelicula->obtclientes();
    if($res){
        while ( $row = $res->fetch( ) ) {
            
            $item=array(
                "idcliente" => $row['idcliente'],
                "Nombre" => $row['Nombre'],
                "Apellido" => $row['Apellido'],
                "CI" => $row['CI'],
                
            );
            array_push($peliculas["items"], $item);
        }
       return $this->printJSON($peliculas);        
    }else{  
        echo json_encode(array('mensaje' => 'No hay elementos'));
    }
}

function createclient($datos){
    $pelicula = new Pelicula();
    $peliculas["items"] = array();
    $res = $pelicula->crearcliente($datos);
    if($res){
               
            
               
        $item=array(
            "creado" => "creado",
         
        );

            
     array_push($peliculas["items"], $item);
    
    return  $this->printJSON($peliculas);  
    }else{  
        echo json_encode(array('mensaje' => 'No hay elementos'));
    }
}

function getidclient($id){
       
    $pelicula = new Pelicula();
    $peliculas = array();
    $peliculas["items"] = array();
    $ci = $id['id'];


 
    $res = $pelicula->obtidcliente($ci);
    
    if($res){

        while ( $row = $res->fetch( ) ) {
            $item=array(
                "idcliente" => $row['idcliente'],
                "Nombre" => $row['Nombre'],
                "Apellido" => $row['Apellido'],
                "CI" => $row['CI'],

                
            );
            
            array_push($peliculas["items"], $item);
    }
    return  $this->printJSON($peliculas);
      
    }else{
        echo json_encode(array('mensaje' => 'No hay elementos'));
    }
}
/*mensajes*/ 


    function error($mensaje){
        echo json_encode(array('mensaje' => $mensaje));
    }

    function printJSON($array){
        echo json_encode($array);
    }


   
}

?>