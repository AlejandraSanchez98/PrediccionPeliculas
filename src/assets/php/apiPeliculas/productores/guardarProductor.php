<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


  include("clsProductor.php");
  include("../config.php");
  include("../conexion.php");
  
  $objProductor = new Productor();
  $objProductor ->nombreProductor=$_GET["nombreProductor"];
  $objProductor ->obrasPrevias=$_GET["obrasPrevias"];
  $objProductor ->paisProductor$_GET["paisProductor"];


  $resultado = $objProductor >guardar();

  

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
 ?>