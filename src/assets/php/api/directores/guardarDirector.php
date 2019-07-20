<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


  include("clsDirector.php");
  include("../config.php");
  include("../conexion.php");

  $objDirector = new Director();
  $objDirector->nombre_director=$_GET["nombre_director"];
  $objDirector->pais_director=$_GET["pais_director"];
  $objDirector->obras_previas=$_GET["obras_previas"];

  $resultado = $objDirector->guardar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
 ?>
