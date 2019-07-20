<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

  include("clsActor.php");
  include("../config.php");
  include("../conexion.php");

  $objActores = new Actor();
  $objActores->nombre_actor=$_GET["nombre_actor"];
  $objActores->pais_actor=$_GET["pais_actor"];
  $objActores->obras_previas=$_GET["obras_previas"];

  $resultado = $ $objActores->cargar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
?>
