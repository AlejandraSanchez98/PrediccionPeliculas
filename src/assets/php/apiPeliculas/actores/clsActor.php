<?php
  class Actor
  {
    private $conexion;
    public $Id_actor;
    public $nombre_actor;
    public $pais_actor;
    public $obras_previas;
  

    function __construct()
    {
      $this->conexion= new Conexion();
    }
    public function cargar()
    {
      $query = "SELECT * FROM actor";
      return $this->conexion->ejecutarQuery($query);
    }
    public function cargarxUsuario()
    {
      $query = "SELECT * FROM actor WHERE Id_actor='{$this->Id_actor}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM actor WHERE Id_actor='{$this->Id_actor}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO actor(nombre_actor,pais_actor,obras_previas) VALUES ('{$this->nombre_actor}','{$this->pais_actor}','{$this->obras_previas}')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
