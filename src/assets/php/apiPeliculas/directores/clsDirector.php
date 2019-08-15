<?php
class Director
{
  private $conexion;
  public $idDirector;
  public $nombreDirector;
  public $paisDirector;
  public $obrasPrevias;


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
    $query = "SELECT * FROM director WHERE idDirector='{$this->idDirector}'";
    return $this->conexion->ejecutarQuery($query);
  }
  public function eliminar()
  {
    $query = "DELETE FROM director WHERE idDirector='{$this->idDirector}'";
    return $this->conexion->ejecutarQuery($query);
  }
  public function guardar()
  {
    $query = "INSERT INTO director(nombreDirector,paisDirector,obrasPrevias) VALUES ('{$this->nombreDirector}','{$this->paisDirector}','{$this->obrasPrevias }')";
    return $this->conexion->ejecutar($query);
  }
  public function cargarID(){
    $query = "SELECT idDirector FROM director WHERE nombreDirector = '{$this->nombreDirector}'";
    return $this->conexion->ejecutarQuery($query);
  }

}
?>
