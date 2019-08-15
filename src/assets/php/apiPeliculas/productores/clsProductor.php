<?php
class Productor
{
  private $conexion;
  public $idProductor ;
  public $nombreProductor ;
  public $obrasPrevias;
  public $paisProductor;

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
    $query = "SELECT * FROM productor WHERE idProductor ='{$this->idProductor }'";
    return $this->conexion->ejecutarQuery($query);
  }
  public function eliminar()
  {
    $query = "DELETE FROM productor WHERE idProductor ='{$this->idProductor }'";
    return $this->conexion->ejecutarQuery($query);
  }
  public function guardar()
  {
    $query = "INSERT INTO productor(nombreProductor,obrasPrevias ,paisProductor) VALUES ('{$this->nombreProductor }','{$this->obrasPrevias}','{$this->paisProductor }')";
    return $this->conexion->ejecutar($query);
  }
  public function cargarID(){
    $query = "SELECT idProductor FROM productor WHERE nombreProductor = '{$this->nombreProductor}'";
    return $this->conexion->ejecutarQuery($query);
  }
}
?>
