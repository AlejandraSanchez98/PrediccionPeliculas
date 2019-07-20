<?php
 header("Content-Type: application/json");
 include("../config.php");
 include("../conexion.php");
 include("clsPelicula.php");

 $objPeli = new Pelicula();
 $arreglo = $objPeli->cargar();

 echo(json_encode($arreglo));
 ?>
