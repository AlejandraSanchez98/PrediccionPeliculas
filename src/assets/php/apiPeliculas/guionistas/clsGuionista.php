<?php
  class Guionista
  {
    private $conexion;
    public $id_guio;
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
      $query = "SELECT * FROM guionista WHERE id_guio='{$this->id_guio}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM guionista WHERE id_guio='{$this->id_guio}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO guionista(nombre,obras_previas,pais_guionista) VALUES ('{$this->nombre}','{$this->obras_previas}','{$this->pais_guionista}')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
