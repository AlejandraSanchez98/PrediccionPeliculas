<?php
  class Guionista
  {
    private $conexion;
    public $Id_guionista;
    public $nombre;
    public $obras_previas;
    public $pais_guionista;
 

    function __construct()
    {
      $this->conexion= new Conexion();
    }
    public function cargar()
    {
      $query = "SELECT * FROM guionista";
      return $this->conexion->ejecutarQuery($query);
    }
    public function cargarxUsuario()
    {
      $query = "SELECT * FROM guionista WHERE Id_guionista='{$this->Id_guionista}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM guionista WHERE Id_guionista='{$this->Id_guionista}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO guionista(nombre,obras_previas,pais_guionista) VALUES ('{$this->nombre}','{$this->obras_previas}','{$this->pais_guionista}')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
