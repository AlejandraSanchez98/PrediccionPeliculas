<?php
class Conexion
{
  private $con;

  function __construct()
  {
    $this->con=mysqli_connect(SERVIDOR,USUARIO,PASSWORD);
    mysqli_select_db($this->con,BD);

  }

  public function ejecutarQuery($query)
	{
		$res=array();
		$res_consulta=mysqli_query($this->con,$query);
		while($row=mysqli_fetch_assoc($res_consulta))
		{
        array_push($res,$row);
		}
		return $res;
	}

	public function ejecutar($query)
	{
      return $res_consulta=mysqli_query($this->con,$query);
	}
}
?>
