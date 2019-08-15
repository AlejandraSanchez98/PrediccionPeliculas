<?php
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin:*");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


  include("clsComentario.php");
  include("../config.php");
  include("../conexion.php");

  $objComentario = new Comentarios();
  $objComentario->usuarioComentario=$_GET["usuarioComentario"];
  $objComentario->comentario=$_GET["comentario"];

  $resultado = $objComentario->guardar();

  $arregloResultado = array('resultado'=>$resultado);
  echo (json_encode($arregloResultado));
 ?>
