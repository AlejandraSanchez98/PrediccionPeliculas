<?php
 header("Content-Type: application/json");
 include("config.php");
 include("../conexion.php");
 include("../clsDirector.php");

 $objDirec = new Director();
 $arreglo =  $objDirec->cargar();

 echo(json_encode($arreglo));
 ?>