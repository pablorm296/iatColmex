<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Prueba de Asociación Implícita | El Colegio de México</title>
    <link href="https://fonts.googleapis.com/css?family=Quicksand|Raleway" rel="stylesheet"> 
    <link rel = "stylesheet" type = "text/css" href = "styles/mainStyles.css">
    <link rel = "stylesheet" type = "text/css" href = "styles/formStyles.css">
    <link rel = "stylesheet" type = "text/css" href = "styles/loaderStyle.css">
    <link rel = "shortcut icon" type = "image/png" href = "res/favicon.png"/>
    <script src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type = "text/javascript"></script>
    <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js" type = "text/javascript"></script>
    <script src = "js/IAT.js"></script>
</head>
<body oncopy="return false" oncut="return false" onpaste="return false" onselect = "document.selection.empty()" oncontextmenu = "return false">
    <div class = "wrapper">
        <div class = "header", id = "header">
            <h1>¡Ha ocurrido un error!</h1>
        </div>
        <div id = "boxContent" class = "content">
            <p>
                No se pudo ejecutar IAT.js. Esto puede ocurrir porque la ejecución de javascript está 
                desabilitada, porque tu explorador o sistema operativo no soporta la ejecución de javascript o porque
                el archivo IAT.js está dañado o fue eliminado.
            </p>
            <p>
                Por favor notifica al personal encargado de aplicar la prueba.
            </p>
        </div>
        <div id = "footer" class = "footer">
            <?php
                include("footer.html")
            ?>
        </div>
    </div>
</body>
</html>