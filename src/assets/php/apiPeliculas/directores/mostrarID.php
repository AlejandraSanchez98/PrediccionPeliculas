<?php
header("Content-Type: application/json");
include("../config.php");
include("../conexion.php");
include("clsDirector.php");

$objDirector = new Director();
$objDirector->nombreDirector = $_GET['nombreDirector'];
$arreglo = $objDirector->cargarID();

echo(json_encode($arreglo));
?>
