<?php
  class Director
  {
    private $conexion;
    public $Id_director;
    public $nombre_director;
    public $pais_director;
    public $obras_previas;
 

    function __construct()
    {
      $this->conexion= new Conexion();
    }
    public function cargar()
    {
      $query = "SELECT * FROM director";
      return $this->conexion->ejecutarQuery($query);
    }
    public function cargarxUsuario()
    {
      $query = "SELECT * FROM director WHERE Id_director='{$this->Id_director}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM director WHERE Id_director='{$this->Id_director}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO director(nombre_directorpais_director,obras_previas) VALUES ('{$this->nombre_director}','{$this->pais_director}','{$this->obras_previas }')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
