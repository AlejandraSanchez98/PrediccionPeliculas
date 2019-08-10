
 <?php
 header("Content-Type: application/json");
 include("../config.php");
 include("../conexion.php");
 include("clsPelicula.php");

 $objPeli = new Pelicula();
 $objPeli->idPelicula= $_GET['idPelicula'];
 $arreglo = $objPeli->cargarxPelicula();

 echo(json_encode($arreglo));
 ?>
