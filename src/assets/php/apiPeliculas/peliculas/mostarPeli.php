<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

  include("clsPeli.php");
  include("../config.php");
  include("../conexion.php");

  $objPeli = new Pelicula();
  //$objPeli->Id_peliculas=$_GET["Id_peliculas"];
  $objPeli->titulo_pelicula =$_GET["titulo_pelicula "];
  $objPeli->genero_pelicula=$_GET["genero_pelicula"];
  $objPeli->fecha_estreno=$_GET["fecha_estreno"];
  $objPeli->resumen_pelicula=$_GET["resumen_pelicula"];
  $objPeli->imagen=$_GET["imagen"];
  $objPeli->pais_pelicula=$_GET["pais_pelicula"];
  $objPeli->duracion_pelicula=$_GET["duracion_pelicula"];
  $objPeli->calificacion=$_GET["calificacion"];


  $resultado = $ $objPeli->cargar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
?>