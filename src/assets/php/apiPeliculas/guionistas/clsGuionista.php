<?php
class Guionista
{
  private $conexion;
  public $idGuionista;
  public $nombreGuionista;
  public $obrasPrevias;
  public $paisGuionista;


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
    $query = "SELECT * FROM guionista WHERE idGuionista='{$this->idGuionista}'";
    return $this->conexion->ejecutarQuery($query);
  }
  public function eliminar()
  {
    $query = "DELETE FROM guionista WHERE idGuionista='{$this->idGuionista}'";
    return $this->conexion->ejecutarQuery($query);
  }
  public function guardar()
  {
    $query = "INSERT INTO guionista(nombreGuionista,obrasPrevias,paisGuionista) VALUES ('{$this->nombreGuionista}','{$this->obrasPrevias}','{$this->paisGuionista}')";
    return $this->conexion->ejecutar($query);
  }
  public function cargarID(){
    $query = "SELECT idGuionista FROM guionista WHERE nombreGuionista = '{$this->nombreGuionista}'";
    return $this->conexion->ejecutarQuery($query);
  }
}
?>
