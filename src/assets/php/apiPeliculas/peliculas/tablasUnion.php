<?php
 header("Content-Type: application/json");
 include("../config.php");
 include("../conexion.php");
 include("clsPelicula.php");

 $objPeli = new Pelicula();
 $objPeli->Id_pelis= $_GET['Id_pelis'];
 $arreglo = $objPeli->union();


 echo(json_encode($arreglo));
 ?>
