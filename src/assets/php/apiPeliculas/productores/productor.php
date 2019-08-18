<?php
 header("Content-Type: application/json");
 header("Content-Type: application/json");
 header("Access-Control-Allow-Origin:*");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
 include("../config.php");
 include("../conexion.php");
 include("clsProductor.php");

 $objProdu = new Productor();
 $arreglo = $objProdu->cargar();

 echo(json_encode($arreglo));
 ?>
