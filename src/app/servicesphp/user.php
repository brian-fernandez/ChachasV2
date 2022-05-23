<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include_once 'conexion.php';
include_once 'api.php';

class Pelicula extends DB{

    function obtenerPersonas(){
        $query = $this->connect()->query('SELECT * FROM usuario');
        return $query;
       
        
    }

// usuario



    function login($ci, $contrasena)
    {
       
        
        $query = $this->connect()->prepare('SELECT * from usuario WHERE CI =:ci and contraseña = :Contrasena');
        $query->execute(['ci' => $ci , 'Contrasena' => $contrasena]);
    
 
        if ($query->rowCount()) {
            
            return $query;
        }else{
            return false;
        }
    }

    function obtenerPersona($id){
        $query = $this->connect()->prepare('SELECT u.CI  "CI",u.Foto as "Foto", u.Fecha_nacimiento as "Fecha_nacimiento",  u.Nombre as "Nombre", u.Apellido as "Apellido",  c.Nombre  as "Cargo" FROM usuario u join cargo c on (u.Cargo_idCargo = c.idCargo)  WHERE u.CI = :ci');
        $query->execute(['ci' => $id]);
        
        
        if ($query->rowCount()) {
            return $query;
            
        }else{
            return false;
        }
      
    }
    function InsertarUsuario($datos){
        $query = $this->connect()->prepare(' INSERT INTO usuarios (nombre, apellido_paterno, apellido_materno, email, password, telefono, direccion, num_de_casa)  VALUES (:nombre, :apellido_paterno, :apellido_materno, :email, :password, :telefono, :direccion, :num_de_casa)');
        
     
        $query->execute(['nombre' => $datos['nombre'] ,'apellido_paterno' => $datos['apellido_paterno'], 'apellido_materno' => $datos['apellido_materno'], 'email' => $datos['email'], 'password' => $datos['password'], 'telefono' => $datos['telefono'], 'direccion' => $datos['direccion'], 'num_de_casa' => $datos['num_de_casa']]);
        return $query;
        
     
    } 

    function actualizar($datos)
    {
        $query = $this->connect()->prepare(' UPDATE  usuarios SET nombre =:nombre,apellido_paterno=:apellido_paterno,apellido_materno=:apellido_materno,telefono=:telefono, direccion=:direccion, num_de_casa=:num_de_casa WHERE id=:id');
        
     
        $query->execute(['nombre' => $datos['nombre'] ,'apellido_paterno' => $datos['apellido_paterno'], 'apellido_materno' => $datos['apellido_materno'], 'telefono' => $datos['telefono'], 'direccion' => $datos['direccion'], 'num_de_casa' => $datos['num_de_casa'] , 'id' => $datos['id']]);
        return $query;
    } 

   /* PRODUCTOS */

   function obtenercantidadproducto()
   {
        $query = $this->connect()->query('SELECT * FROM producto;');
      
           return $query;
      
   }

   function cambiardisponibilidad($id)
   {
    $query = $this->connect()->prepare('UPDATE producto SET Estado = "Inactivo" WHERE idProducto = :id');
    $query->execute(['id' => $id]);
    
    return $query;
    return json_encode($query);
   }
   function cambiardisponibilidad2($id)
   {
    $query = $this->connect()->prepare('UPDATE producto SET Estado = "Activo" WHERE idProducto = :id');
    $query->execute(['id' => $id]);
    
    return $query;
    return json_encode($query);
   }

   function obtidproducto($id)
   {
        $query = $this->connect()->prepare('SELECT * FROM producto WHERE idProducto = :id');
        $query->execute(['id' => $id]);
      
        if ($query->rowCount()) {
            return $query;
            
        }else{
            return false;
        }
      
   }



   function actualizarproducto($datos)
   {
    //    echo json_encode($datos);
       $query = $this->connect()->prepare('UPDATE producto SET Cantidad = :cantidad,    Precio = :precio,     Foto = :foto,     Nombre =:nombre    WHERE idProducto = :id;');
       
    
       $query->execute(['cantidad' => $datos['cantidad'] ,'precio' => $datos['precio'], 'foto' => $datos['foto'], 'nombre' => $datos['nombre'], 'id' => $datos['id']]);
   
     
        return $query;
        
  
   } 




    /* RESERVAS */

    function obtenerreservas()
    {
        $query = $this->connect()->query('SELECT r.Reservaid as "idreserva" ,r.Fecha_reserva as "Fecha", r.Reserva_info as "informacion", r.Usuario_CI as "usuario",p.Nombre as Producto, m.Nombre as "nombre_mesa", c.CI  as cliente FROM reservas r join cliente c on (r.idcliente=c.idcliente) join Producto p on (r.Producto=p.idProducto) join mesa m on(r.mesaid=m.idMesa );');
        return $query;
    }


  
 
 



}
?>