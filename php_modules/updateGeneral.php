<?php
//Incluir configuración de base de datos
$skey = "5854";
include("db_config.php");

//Cuando el usuario de click en continuar
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    //Extraer json
    $json = file_get_contents('php://input');
    //Convertir en array
    $obj = json_decode($json, true);
    
    //Obtener mínimos y máximos de preguntas
    $max = $obj["max"];
    $min = $obj["min"];

    //Obtener id
    $Session_ID = $obj["ID"];

    for ($i = $min; $i <= $max; $i++) {
        //Obtener valor
        $val = $obj["q$i"];
        $sql = "UPDATE general SET q$i = '$val' WHERE ID = '$Session_ID';";

        if ($conn->query($sql) === TRUE) {
            echo "Registro actualizado en General! <br>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
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