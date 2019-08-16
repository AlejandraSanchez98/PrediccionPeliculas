<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
include("../config.php");
include("../conexion.php");
include("clsPelicula.php");

$objPeli = new Pelicula();
$objPeli->idPelicula = $_GET['idPelicula'];
$arreglo = $objPeli->cargarxPelicula();

echo(json_encode($arreglo));
?>
