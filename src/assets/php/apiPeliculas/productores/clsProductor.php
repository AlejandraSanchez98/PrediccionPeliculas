<?php
  class Productor
  {
    private $conexion;
    public $id_produc ;
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
      $query = "SELECT * FROM productor WHERE id_produc ='{$this->id_produc }'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM productor WHERE id_produc ='{$this->id_produc }'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO productor(nombre_productor,obras_previas ,pais_productor) VALUES ('{$this->nombre_productor }','{$this->obras_previas}','{$this->pais_productor }')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
