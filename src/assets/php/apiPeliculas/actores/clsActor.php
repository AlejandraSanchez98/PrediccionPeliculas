<?php
  class Actor
  {
    private $conexion;
    public $idActor;
    public $nombreActor;
    public $paisActor;
    public $obrasPrevias;
  

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
      $query = "INSERT INTO autor(nombreActor,paisActor,obrasPrevias) VALUES ('{$this->nombreActor}','{$this->paisActor}','{$this->obrasPrevias}')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
