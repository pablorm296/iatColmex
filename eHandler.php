<?php
//El usuario está intentando acceder directamente
if (realpath(__FILE__) == realpath($_SERVER['DOCUMENT_ROOT'].$_SERVER['SCRIPT_NAME'])) {
    header("HTTP/1.1 403 Forbidden");
    $eType = 403;
    $eText = "No tiene los permisos necesarios para acceder al archivo solicitado.";
}
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>¡Ups!</title>
</head>
<body>
    <?php
        echo "<h1>Error $eType</h1>";
    ?>
            
    <?php
        echo $eText;
    ?>
</body>
</html>