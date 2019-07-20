<?php
  class Pelicula
  {
    private $conexion;
    public $Id_peliculas;
    public $titulo_pelicula;
    public $genero_pelicula;
    public $fecha_estreno;
    public $resumen_pelicula;
    public $imagen;
    public $pais_pelicula;
    public $duracion_pelicula;
    public $calificacion;

    function __construct()
    {
      $this->conexion= new Conexion();
    }
    public function cargar()
    {
      $query = "SELECT * FROM pelicula";
      return $this->conexion->ejecutarQuery($query);
    }
    public function cargarxPelicula()
    {
      $query = "SELECT * FROM pelicula WHERE Id_peliculas='{$this->Id_peliculas}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM pelicula WHERE Id_peliculas='{$this->Id_peliculas}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO pelicula(titulo_pelicula,genero_pelicula,fecha_estreno,resumen_pelicula,imagen,pais_pelicula,duracion_pelicula,calificacion) VALUES ('{$this->titulo_pelicula}','{$this->genero_pelicula}','{$this->fecha_estreno}','{$this->resumen_pelicula}','{$this->imagen}','{$this->pais_pelicula}','{$this->duracion_pelicula}','{$this->calificacion}')";
      return $this->conexion->ejecutar($query);
    }
  }
 ?>
