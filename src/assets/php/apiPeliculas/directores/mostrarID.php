<?php
header("Content-Type: application/json");
include("../config.php");
include("../conexion.php");
include("clsDirector.php");

$objDirector = new Actor();
$objDirector->nombreDirector = $_GET['nombreDirector'];
$arreglo = $objAct->cargarID();

echo(json_encode($arreglo));
?>
