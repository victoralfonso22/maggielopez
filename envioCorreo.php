<?php
$mail = $_POST['mensaje'];
//Titulo
$titulo = $_POST['nombre'];
//cabecera
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
//dirección del remitente 
$headers .= "From: Pagina Web < '".$_POST['correo']."' >\r\n";
//Enviamos el mensaje a tu_dirección_email 
$bool = mail("victoralfonso22@gmail.com",$titulo,$mail,$headers);
if($bool){
    echo "exito";
}else{
    echo "error";
}
?>
