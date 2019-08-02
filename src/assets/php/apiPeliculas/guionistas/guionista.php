<?php
 header("Content-Type: application/json");
 include("../config.php");
 include("../conexion.php");
 include("clsGuionista.php");

 $objGuio = new Guionista();
 $arreglo = $objGuio->cargar();

 echo(json_encode($arreglo));
 ?>