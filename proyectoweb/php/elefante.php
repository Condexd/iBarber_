<?php

include '../bd/conexion.php';
$tdoc=$_POST["select-tdoc"];
$id_usuario=$_POST["numeroDocumento"];
$nombre1=$_POST["primerNombre"];
$nombre2=$_POST["SegundoNombre"];
$apellido1=$_POST["primerApellido"];
$apellido2=$_POST["segundoApellido"];
$correo=$_POST["email"];
$password=$_POST["contraseñas"];

echo "('$tdoc',
'$id_usuario',
'$nombre1',
'$nombre2',
'$apellido1',
'$apellido2',
'$correo',
'$password')";

$sql = "insert into usuario (tdoc_usuario, id_usuario, p_nombre, s_nombre, p_apellido, s_apellido, correo_us, password_us)
values
(
'$tdoc',
'$id_usuario',
'$nombre1',
'$nombre2',
'$apellido1',
'$apellido2',
'$correo',
aes_encrypt('$password', 'clave')
)";

try {
    $con->query($sql);
    print "<script> alert (\"Agregado existosamente.\");window.location='../index/index.html';</script>";
} catch (Exception $e){
    echo $e->getMessage();
}
?>