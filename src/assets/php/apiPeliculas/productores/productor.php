<?php
 header("Content-Type: application/json");
 include("../config.php");
 include("../conexion.php");
 include("clsProductor.php");

 $objProdu = new Productor();
 $arreglo = $objProdu->cargar();

 echo(json_encode($arreglo));
 ?>