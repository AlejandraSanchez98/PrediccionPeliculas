<?php
  class Pelicula
  {
    private $conexion;
    public $Id_pelis;
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
      $query = "SELECT * FROM pelicula WHERE Id_pelis ='{$this->Id_pelis}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM pelicula WHERE Id_pelis ='{$this->Id_pelis}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO pelicula(titulo_pelicula,genero_pelicula,fecha_estreno,resumen_pelicula,imagen,pais_pelicula,duracion_pelicula,calificacion) VALUES ('{$this->titulo_pelicula}','{$this->genero_pelicula}','{$this->fecha_estreno}','{$this->resumen_pelicula}','{$this->imagen}','{$this->pais_pelicula}','{$this->duracion_pelicula}','{$this->calificacion}')";
      return $this->conexion->ejecutar($query);
    }
    public function union()
    {
      //$query = "SELECT PL.titulo_pelicula,  PL.fecha_estreno, PL.duracion_pelicula, PL.pais_pelicula, PL.genero_pelicula, PL.resumen_pelicula, PL.calificacion, GUI.nombre FROM pelicula PL JOIN guionista GUI WHERE PL.Id_pelis = GUI.id_guio;

     $query = "SELECT PL.titulo_pelicula,  PL.fecha_estreno, PL.duracion_pelicula, PL.pais_pelicula, PL.genero_pelicula, PL.resumen_pelicula, PL.calificacion, GUI.nombre, DIR.nombre_director, ACT.nombre_actor, PRO.nombre_productor
      FROM pelicula PL 
      INNER JOIN guionista GUI On PL.id_guio  = GUI.id_guio 
      INNER JOIN director DIR On PL.Id_dire  = DIR.Id_dire
      INNER JOIN autor ACT On PL.idActor = ACT.idActor
      INNER JOIN Productor PRO On PL.id_produc  = PRO.id_produc  WHERE Id_pelis ='{$this->Id_pelis}'"; 

      return $this->conexion->ejecutarQuery($query);
    }
  }
 ?>
