<?php
header("Content-Type: application/json");
include("../config.php");
include("../conexion.php");
include("clsGuionista.php");

$objGuionista = new Guionista();
$objGuionista->nombreGuionista = $_GET['nombreGuionista'];
$arreglo = $objGuionista->cargarID();

echo(json_encode($arreglo));
?>
