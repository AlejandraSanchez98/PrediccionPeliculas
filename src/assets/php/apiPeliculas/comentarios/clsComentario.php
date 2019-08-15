<?php
  class Comentarios
  {
    private $conexion;
    public $idComentario;
    public $usuarioComentario;
    public $comentario;
  

    function __construct()
    {
      $this->conexion= new Conexion();
    }
    public function cargar()
    {
      $query = "SELECT * FROM comentarios";
      return $this->conexion->ejecutarQuery($query);
    }
    public function cargarxUsuario()
    {
      $query = "SELECT * FROM comentarios WHERE idComentario='{$this->idComentario}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM comentarios WHERE idComentario='{$this->idComentario}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO comentarios(usuarioComentario,comentario) VALUES ('{$this->usuarioComentario}','{$this->comentario}')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
