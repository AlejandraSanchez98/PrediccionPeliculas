<?php
  class Pelicula
  {
    private $conexion;
    public $idPelicula;
    public $tituloPelicula;
    public $generoPelicula;
    public $fechaEPelicula;
    public $resumenPelicula;
    public $imagenPelicula;
    public $paisPelicula;
    public $duracionPelicula;
    public $calificacionPelicula;
    public $idActor;
    public $idGuionista;
    public $idDirector;
    public $idProductor;

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
      $query = "SELECT * FROM pelicula WHERE idPelicula ='{$this->idPelicula}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function eliminar()
    {
      $query = "DELETE FROM pelicula WHERE idPelicula ='{$this->idPelicula}'";
      return $this->conexion->ejecutarQuery($query);
    }
    public function guardar()
    {
      $query = "INSERT INTO pelicula(idGuionista,idDirector,idProductor,idActor,tituloPelicula,generoPelicula,fechaEPelicula,resumenPelicula,imagenPelicula,paisPelicula,duracionPelicula,calificacionPelicula) VALUES ('{$this->idGuionista}','{$this->idDirector}','{$this->idProductor}','{$this->idActor}','{$this->tituloPelicula}','{$this->generoPelicula}','{$this->fechaEPelicula}','{$this->resumenPelicula}','{$this->imagenPelicula}','{$this->paisPelicula}','{$this->duracionPelicula}','{$this->calificacionPelicula}')";
      return $this->conexion->ejecutar($query);
    }
    public function union()
    {
      //$query = "SELECT PL.titulo_pelicula,  PL.fecha_estreno, PL.duracion_pelicula, PL.pais_pelicula, PL.genero_pelicula, PL.resumen_pelicula, PL.calificacion, GUI.nombre FROM pelicula PL JOIN guionista GUI WHERE PL.Id_pelis = GUI.id_guio;

     $query = "SELECT PL.tituloPelicula,  PL.fechaEPelicula, PL.imagenPelicula, PL.duracionPelicula, PL.paisPelicula, PL.generoPelicula, PL.resumenPelicula, PL.calificacionPelicula, GUI.nombreGuionista, DIR.nombreDirector, ACT.nombreActor, PRO.nombreProductor
      FROM pelicula PL
      INNER JOIN guionista GUI On PL.idGuionista  = GUI.idGuionista
      INNER JOIN director DIR On PL.idDirector  = DIR.idDirector
      INNER JOIN autor ACT On PL.idActor = ACT.idActor
      INNER JOIN productor PRO On PL.idProductor  = PRO.idProductor  WHERE idPelicula ='{$this->idPelicula}'";

      return $this->conexion->ejecutarQuery($query);
    }
  }
 ?>
