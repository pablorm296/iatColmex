<?php
//Incluir configuración de base de datos
$skey = "5854";
include("db_config.php");

//Cuando el usuario de click en continuar
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    //Extraer ID de Sesión
    $Session_ID = $_POST["Session_ID"];

    //Extraer hora
    $EndTime = $_POST["EndTime"];

    //Extraer status de sesión
    $Session_Status = $_POST["Session_Status"];

    //Guardar en tabla general
    $sql = "UPDATE general 
    SET
    STATUS = '$Session_Status',
    END_TIME = '$EndTime'
    WHERE ID = '$Session_ID';";
    if ($conn->query($sql) === TRUE) {
        echo "Status actualizado! <br>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

//Si el usuario intenta ver este php
if($_SERVER['REQUEST_METHOD'] == 'GET') {
    header("HTTP/1.1 403 Forbidden");
    $eType = 403;
    $eText = "No tiene los permisos necesarios para acceder al archivo solicitado.";
    include("../eHandler.php");
}
?>