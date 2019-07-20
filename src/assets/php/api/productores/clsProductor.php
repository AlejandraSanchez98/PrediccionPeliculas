<?php
  class Productor
  {
    private $conexion;
    public $Id_productor ;
    public $nombre_productor ;
    public $obras_previas;
    public $pais_productor;
 
    function __construct()
    {
      $this->conexion= new Conexion();
    }
    public function cargar()
    {
      $query = "SELECT * FROM productor";
      return $this->conexion->ejecutarQuery($query);
    }
    public function cargarxUsuario()
    {
      $query = "SELECT * FROM productor WHERE Id_productor ='{$this->Id_productor }'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM productor WHERE Id_productor ='{$this->Id_productor }'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO productor(nombre_productor,obras_previas ,pais_productor) VALUES ('{$this->nombre_productor }','{$this->obras_previas}','{$this->pais_productor }')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
