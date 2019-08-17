<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, decodificar, PUT, DELETE');


  include("clsPelicula.php");
  include("../config.php");
  include("../conexion.php");

  $objPeli = new Pelicula();
  //echo file_get_contents("php://input"); //regresa un json de toda la entrada
  $decodificar= json_decode(file_get_contents("php://input"));
  $objPeli->tituloPelicula =$decodificar->tituloPelicula;
  $objPeli->generoPelicula=$decodificar->generoPelicula;
  $objPeli->fechaEPelicula=$decodificar->fechaEPelicula;
  $objPeli->resumenPelicula=$decodificar->resumenPelicula;
  $objPeli->imagenPelicula=$decodificar->imagenPelicula;
  $objPeli->paisPelicula=$decodificar->paisPelicula;
  $objPeli->duracionPelicula=$decodificar->duracionPelicula;
  $objPeli->calificacionPelicula=$decodificar->calificacionPelicula;
  $objPeli->idActor=$decodificar->idActor;
  $objPeli->idGuionista=$decodificar->idGuionista;
  $objPeli->idDirector=$decodificar->idDirector;
  $objPeli->idProductor=$decodificar->idProductor;

  $resultado = $objPeli->guardar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
 ?>
