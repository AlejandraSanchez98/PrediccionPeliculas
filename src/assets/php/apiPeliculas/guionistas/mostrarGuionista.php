<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

  include("clsGuionista.php");
  include("../config.php");
  include("../conexion.php");

  $objGuionista = new Guionista();
  $objGuionista ->nombreGuionista=$_GET["nombreGuionista"];
  $objGuionista ->obrasPrevias=$_GET["obrasPrevias"];
  $objGuionista ->paisGuionista =$_GET["paisGuionista "];
  

  $resultado = $objGuionista ->cargar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
?>