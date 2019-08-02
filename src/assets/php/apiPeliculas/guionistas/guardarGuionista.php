<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


  include("clsGuionista.php");
  include("../config.php");
  include("../conexion.php");

  $objGuionista = new Guionista();
  $objGuionista ->nombre=$_GET["nombre"];
  $objGuionista ->obras_previas=$_GET["obras_previas"];
  $objGuionista ->pais_guionista =$_GET["pais_guionista"];

  $resultado =  $objGuionista ->guardar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
 ?>