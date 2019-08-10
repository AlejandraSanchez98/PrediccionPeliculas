<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


  include("clsDirector.php");
  include("../config.php");
  include("../conexion.php");

  $objDirector = new Director();
  $objDirector->nombreDirector=$_GET["nombreDirector"];
  $objDirector->paisDirector=$_GET["paisDirector"];
  $objDirector->obrasPrevias=$_GET["obrasPrevias"];

  $resultado = $objDirector->guardar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
 ?>