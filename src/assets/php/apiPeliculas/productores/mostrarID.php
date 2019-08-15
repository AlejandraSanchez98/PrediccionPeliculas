<?php
header("Content-Type: application/json");
include("../config.php");
include("../conexion.php");
include("clsProductor.php");

$objProductor = new Productor();
$objProductor->nombreProductor = $_GET['nombreProductor'];
$arreglo = $objProductor->cargarID();

echo(json_encode($arreglo));
?>
