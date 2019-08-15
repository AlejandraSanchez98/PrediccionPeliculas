<?php
 header("Content-Type: application/json");
 include("../config.php");
 include("../conexion.php");
 include("clsComentario.php");

 $objComentario = new Comentarios();
 $arreglo = $objComentario->cargar();

 echo(json_encode($arreglo));
 ?>
