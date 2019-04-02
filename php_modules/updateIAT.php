<?php
//Incluir configuración de base de datos
$skey = "5854";
include("db_config.php");

//Cuando se recibe post
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $obj = json_decode($json, TRUE);
    
    //Por cada trial, guardar información correspondiente
    foreach ($obj as $key => $elemento) {
        //Acceder a información
        $round = $obj[$key]["round"];
        $errors = $obj[$key]["errors"];
        $trial = $obj[$key]["trial"];
        $cat_lab = $obj[$key]["cat_label"];
        $stim = $obj[$key]["stimuli"];
        $reaction = $obj[$key]["reaction"];
        $Session_ID = $obj[$key]["Session_ID"];
        //SQL
        $sql = "INSERT INTO iat_results (TRIAL, ROUND, CAT_LAB, STIMULI, ERRORS, REACTION, ID) VALUES ($trial, $round, '$cat_lab', '$stim', $errors, $reaction, '$Session_ID');";
        if ($conn->query($sql) === TRUE) {
            echo "Registro actualizado en IAT! <br>";
         } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

}

//Si el usuario intenta ver este php
if($_SERVER['REQUEST_METHOD'] == 'GET') {
    header("HTTP/1.1 403 Forbidden");
    $eType = 403;
    $eText = "No tiene los permisos necesarios para acceder al archivo solicitado.";
    include("../eHandler.php");
}
?>