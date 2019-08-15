<?php
header("Content-Type: application/json");
include("../config.php");
include("../conexion.php");
include("clsActor.php");

$objAct = new Actor();
$objAct->nombreActor = $_GET['nombreActor'];
$arreglo = $objAct->cargarID();

echo(json_encode($arreglo));
?>
