<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


  include("clsPelicula.php");
  include("../config.php");
  include("../conexion.php");

  $objPeli = new Pelicula();
  //$objPeli->Id_peliculas=$_GET["Id_peliculas"];
  $objPeli->tituloPelicula =$_GET["tituloPelicula"];
  $objPeli->generoPelicula=$_GET["generoPelicula"];
  $objPeli->fechaEPelicula=$_GET["fechaEPelicula"];
  $objPeli->resumenPelicula=$_GET["resumenPelicula"];
  $objPeli->imagenPelicula=$_GET["imagenPelicula"];
  $objPeli->paisPelicula=$_GET["paisPelicula"];
  $objPeli->duracionPelicula=$_GET["duracionPelicula"];
  $objPeli->calificacionPelicula=$_GET["calificacionPelicula"];

  $resultado = $objPeli->guardar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
 ?>
