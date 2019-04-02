<?php
//Incluir configuración de base de datos
$skey = "5854";
include("db_config.php");

//Cuando el usuario de click en continuar
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    //Extraer ID de Sesión
    $Session_ID = $_POST["Session_ID"];

    //Extraer RoundOrder
    $roundOrder = $_POST["roundOrder"];

    //Extraer hora a la que inició la Sesión
    $Session_DateTime = $_POST["Session_DateTime"];

    //Extraer acción del usuario
    $Session_Status = $_POST["Session_Status"];
    
    //Guardar en tabla general
    $sql = "INSERT INTO general (ID, STATUS, TIME, ROUND_ORDER) VALUES ('$Session_ID', '$Session_Status', '$Session_DateTime', $roundOrder);";
    if ($conn->query($sql) === TRUE) {
        echo "Se registró nuevo usuario en tabla general! <br>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
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