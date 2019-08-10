<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


  include("clsActor.php");
  include("../config.php");
  include("../conexion.php");

  $objActores = new Actor();
  $objActores->nombreActor=$_GET["nombreActor"];
  $objActores->paisActor=$_GET["paisActor"];
  $objActores->obrasPrevias=$_GET["obrasPrevias"];
 

  $resultado = $objActores->guardar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
 ?>
