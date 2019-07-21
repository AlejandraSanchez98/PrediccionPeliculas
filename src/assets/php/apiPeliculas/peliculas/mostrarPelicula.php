<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

  include("clsPelicula.php");
  include("../config.php");
  include("../conexion.php");

  $objPeli = new Pelicula();

  $resultado = $ $objPeli->cargar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
?>
