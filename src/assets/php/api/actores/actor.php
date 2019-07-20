<?php
 header("Content-Type: application/json");
 include("../config.php");
 include("../conexion.php");
 include("clsActor.php");

 $objActor = new Actor();
 $arreglo = $objActor->cargar();

 echo(json_encode($arreglo));
 ?>
