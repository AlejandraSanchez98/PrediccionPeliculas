<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


  include("clsProductor.php");
  include("../config.php");
  include("../conexion.php");
  
  $objProductor = new Productor();
  $objProductor ->nombre_productor=$_GET["nombre_productor"];
  $objProductor ->obras_previas=$_GET["obras_previas"];
  $objProductor ->pais_productor$_GET["pais_productor"];


  $resultado = $objProductor >guardar();

  

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
 ?>