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

    function obtenerPersona($id){
        $query = $this->connect()->prepare('SELECT * FROM usuarios WHERE email = :id');
        $query->execute(['id' => $id]);
        return $query;
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
    }

  





?>