<?php
 header("Content-Type: application/json");
 include("../config.php");
 include("conexion.php");
 include("../clsPelicula.php");

 $objPelic = new Pelicula();
 $arreglo = $objPelic->cargar();

 echo(json_encode($arreglo));
 ?>
