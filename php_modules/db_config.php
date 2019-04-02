<?php
//Verificar si la petición se hace desde un módulo php o no
if (isset($skey)) {
    if ($skey == "5854") {
        //Abrir conexión
        $conn = new mysqli("localhost", "u775053494_iat", "Monolar10", "u775053494_iat");
     
        //Verificar que no haya errores en conexión
        if ($conn->connect_error) {
            echo "Error en la conexión";
        }
    } else {
        //Si el usuario intenta ver este php y no se hizo la petición desde otro módulo
        header("HTTP/1.1 403 Forbidden");
        $eType = 403;
        $eText = "No tiene los permisos necesarios para acceder al archivo solicitado.";
        include("../eHandler.php");
    }
} else {
    //Si el usuario intenta ver este php y no se hizo la petición desde otro módulo
    header("HTTP/1.1 403 Forbidden");
    $eType = 403;
    $eText = "No tiene los permisos necesarios para acceder al archivo solicitado.";
    include("../eHandler.php");
}
?>