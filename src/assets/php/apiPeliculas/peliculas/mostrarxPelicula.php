<?php
header("Content-Type: application/json");
include("../config.php");
include("../conexion.php");
include("clsPelicula.php");

$objPeli = new Pelicula();
$objPeli->Id_peliculas = $_GET['Id_peliculas'];
$arreglo = $objPeli->cargarxPelicula();

echo(json_encode($arreglo));
?>
