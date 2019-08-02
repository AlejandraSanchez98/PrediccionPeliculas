<?php
  class Actor
  {
    private $conexion;
    public $idActor;
    public $nombre_actor;
    public $pais_actor;
    public $obras_previas;
  

    function __construct()
    {
      $this->conexion= new Conexion();
    }
    public function cargar()
    {
      $query = "SELECT * FROM autor";
      return $this->conexion->ejecutarQuery($query);
    }
    public function cargarxUsuario()
    {
      $query = "SELECT * FROM autor WHERE idActor='{$this->idActor}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM autor WHERE idActor='{$this->idActor}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO autor(nombre_actor,pais_actor,obras_previas) VALUES ('{$this->nombre_actor}','{$this->pais_actor}','{$this->obras_previas}')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
