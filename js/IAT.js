// JavaScript Document

//Declarar variable en la que guardaremos resultados del IAT
var sessionInfo = {};
//Declarar variable en la que cargamos diccionario de estímulos. Vacía.
var stimuli;
//Declarar variable en la que cargamos diccionario de bloques. Vacía.
var bloques;
//Declarar variable en la que acomodaremos números aleatorios
var ranNums;

//Declarar variables necesarias para iterar por estímulos
var trialCount, stimuli_list, holders, roundCount, errorCount, trialInfo, roundResults;
//Declarar variables de tiempo
var trialStart, trialEnd;

//Función para obtener un aleatorio entre dos números
function random(min, max, n) {
    //Creamos una lista que va de min a max
    var list = [];
    for (var i = min; i <= max; i++) {
        list.push(i);
    }
    //Creamos un array vacio que llenaremos con elementos de list
    var fooNums = [];
    while (n--) {
        j = Math.floor(Math.random() * (n + 1));
        fooNums.push(list[j]);
        list.splice(j, 1);
    }
    return fooNums;
}

//Función para registrar inicio de sesión (ID + fecha)
function initSes() {
    //Crear ID de sesión
    var randomstring_1 = Math.random().toString(36).substr(2, 5);
    var randomstring_2 = Math.random().toString(36).substr(2, 5);
    var randomstring_3 = Math.random().toString(36).substr(2, 5);
    var randomstring_4 = Math.random().toString(36).substr(2, 5);
    var randomstring_5 = Math.random().toString(36).substr(2, 5);
    var randomstring_6 = Math.random().toString(36).substr(2, 5);
    sessionInfo["ID"] = randomstring_1 + randomstring_2 + randomstring_3 + randomstring_4 +
        randomstring_5 + randomstring_6;
    //Decidir qué bloque va a ir primero
    sessionInfo["roundOrder"] = random(0, 1, 2)[1];
    //Imprimir en consola
    console.log("ID sesión: ", sessionInfo["ID"]);
    //Obtener fecha y hora
    sessionInfo["DateTime"] = new Date().toLocaleString();
    //Imprimir en consola
    console.log("Fecha y hora: ", sessionInfo["DateTime"]);
    //Cargar instrucciones
    loadInstruct();
}

//Función principal del IAT
function IATinit() {
    //Consola
    console.log("IAT iniciado");
    //Cargar diccionario de estímulos
    $.ajax({
        type: "GET",
        url: "stimuli/stimuli.json",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        success: function (data) {
            stimuli = data;
            console.log("GET: Stimuli Dictionary");
        },
        async: false
    });

    //Cargar diccionarios de bloques, segun rounOrder
    //Si roundOrder = 0, lo dejamos como está
    //Si roundOrder = 1, bloques 3 y 4 deben ser 6 y 7
    if (sessionInfo["roundOrder"] == 1) {
        $.ajax({
            type: "GET",
            url: "stimuli/bloques_alter.json",
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            success: function (data) {
                bloques = data;
                console.log("GET: Round Dictionary")
            },
            async: false
        });
    } else if (sessionInfo["roundOrder"] == 0) {
        $.ajax({
            type: "GET",
            url: "stimuli/bloques.json",
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            success: function (data) {
                bloques = data;
                console.log("GET: Round Dictionary");
            },
            async: false
        });
    }

    //Cargar instrucciones generales
    $("#boxContent").load('instrucciones/general.html', function () {
        //Ocultar loader
        $("#loader").hide();
        //Primero, definimos título
        $("#header").html("<h1>Instrucciones</h1>");
        //Cargamos palabras aleatorias en los ejemplos
        ranNums = random(0, 9, 5);
        var pw1 = Object.keys(stimuli.words)[ranNums[0]];
        var pw2 = Object.keys(stimuli.words)[ranNums[1]];
        var pw3 = Object.keys(stimuli.words)[ranNums[2]];
        var pw4 = Object.keys(stimuli.words)[ranNums[3]];
        var pw5 = Object.keys(stimuli.words)[ranNums[4]];
        ranNums = random(10, 19, 5);
        var nw1 = Object.keys(stimuli.words)[ranNums[0]];
        var nw2 = Object.keys(stimuli.words)[ranNums[1]];
        var nw3 = Object.keys(stimuli.words)[ranNums[2]];
        var nw4 = Object.keys(stimuli.words)[ranNums[3]];
        var nw5 = Object.keys(stimuli.words)[ranNums[4]];
        $("#positivas").text(pw1 + ", " + pw2 + ", " + pw3 + ", " + pw4 + ", " + pw5);
        $("#negativas").text(nw1 + ", " + nw2 + ", " + nw3 + ", " + nw4 + ", " + nw5);
        //Elegir imágenes aleatorias para los ejemplos
        ranNums = random(0, 9, 5);
        var mez1 = Object.values(stimuli.images)[ranNums[0]].path;
        mez1 = "<img src = '" + mez1 + "' height = '60' width = '60'>";
        var mez2 = Object.values(stimuli.images)[ranNums[1]].path;
        mez2 = "<img src = '" + mez2 + "' height = '60' width = '60'>";
        var mez3 = Object.values(stimuli.images)[ranNums[2]].path;
        mez3 = "<img src = '" + mez3 + "' height = '60' width = '60'>";
        var mez4 = Object.values(stimuli.images)[ranNums[3]].path;
        mez4 = "<img src = '" + mez4 + "' height = '60' width = '60'>";
        var mez5 = Object.values(stimuli.images)[ranNums[4]].path;
        mez5 = "<img src = '" + mez5 + "' height = '60' width = '60'>";
        ranNums = random(10, 19, 5);
        var ind1 = Object.values(stimuli.images)[ranNums[0]].path;
        ind1 = "<img src = '" + ind1 + "' height = '60' width = '60'>";
        var ind2 = Object.values(stimuli.images)[ranNums[1]].path;
        ind2 = "<img src = '" + ind2 + "' height = '60' width = '60'>";
        var ind3 = Object.values(stimuli.images)[ranNums[2]].path;
        ind3 = "<img src = '" + ind3 + "' height = '60' width = '60'>";
        var ind4 = Object.values(stimuli.images)[ranNums[3]].path;
        ind4 = "<img src = '" + ind4 + "' height = '60' width = '60'>";
        var ind5 = Object.values(stimuli.images)[ranNums[4]].path;
        ind5 = "<img src = '" + ind5 + "' height = '60' width = '60'>";
        //Ocultar lugares donde se ponen las imágenes, cargar imágenes sellecionadas arriba y mostrar loaders
        $("#loader_1").show();
        $("#loader_2").show();
        $("#mor").hide();
        $("#bla").hide();
        $("#mor").html(ind1 + ind2 + ind3 + ind4 + ind5);
        $("#bla").html(mez1 + mez2 + mez3 + mez4 + mez5);
        //Cuando las imagenes se cargan, ocultar loaders y mostrar imágenes
        $('#mor').imagesLoaded(function () {
            $("#mor").show();
            $("#loader_1").hide();
        });
        $('#bla').imagesLoaded(function () {
            $("#bla").show();
            $("#loader_2").hide();
        });
        //Si el usuario da clic en siguiente
        $("#continuarButton").click(function (e) {
            //Mostrar loader y ocultar botón
            $("#loader").show();
            $("#continuarButton").hide();
            //Siguiente etapa
            roundCount = 1;
            IATinst();
        });
    });
}

//Instrucciones del bloque
function IATinst() {
    //Si llevamos más de 9 rounds, salir
    if (roundCount > 7) {
        //Reestablecer estilo
        $(document.body).css("margin", "10%");
        $(".wrapper").css("box-shadow", "0px 0px 16px rgb(156, 156, 156)");
        $("#footer").load("footer.html");
        $("#footer").css("padding", "20px");
        //Actualizar status de sesión y enviar
        sessionInfo["Status"] = "IAT";
        sessionInfo["EndTime"] = new Date().toLocaleString();
        $.ajax({
            type: "POST",
            url: "php_modules/updateStatus.php",
            data: {
                'EndTime': sessionInfo["EndTime"],
                'Session_ID': sessionInfo["ID"],
                'Session_Status': sessionInfo["Status"]
            },
            dataType: "text/html;charset=utf-8",
            success: function () {
                console.log("POST: Status update");
            },
            async: false
        });
        //Cargar encuesta de salida y terminar
        loadCuest2a();
        return false;
    }
    //Desactivar margin y shadow
    $(document.body).css("margin", "0");
    $(".wrapper").css("box-shadow", "none");
    //Cargar variables
    var index = roundCount - 1;
    var text_izq = Object.values(bloques)[index].izq;
    var text_der = Object.values(bloques)[index].der;
    var text_inst = Object.values(bloques)[index].inst;
    //Ocultar header y footer de la página
    $("#header").html("");
    $("#footer").html("");
    $("#footer").css("padding", "0px");
    //Cargar template de instrucciones en bloque
    $("#boxContent").load('instrucciones/bloque.html', function () {
        $("#izq").html(text_izq);
        $("#der").html(text_der);
        $("#contenido_instrucciones").html(text_inst);
        $("#conteo").text('Bloque ' + roundCount + " de 7.");
        //Si el usuario da clic
        $("#continuarButton").click(function (e) {
            IATround();
        });
    });
}

function IATround() {
    //Definir errores en 0 y vaciar errores del round
    errorCount = 0;
    roundResults = [];
    //Cargar variables
    var index = roundCount - 1;
    var text_izq = Object.values(bloques)[index].izq;
    var text_der = Object.values(bloques)[index].der;
    var trials = Object.values(bloques)[index].trials;
    var type = Object.values(bloques)[index].type;
    //Crear lista de estímulos 
    stimuli_list = IATstimuli(trials, type);
    //Cargar template
    $("#boxContent").load('bloque.html', function () {
        //Ocultar error handler
        $("#errormark_1").hide();
        $("#errormark_2").hide();
        //Texto en columnas izquierdas y derecha
        $("#izq").html(text_izq);
        $("#der").html(text_der);
        //Crear lista de holders
        holders = document.getElementsByClassName("stim_holder");
        //Colocar y cargar estímulos
        for (let i = 0; i < stimuli_list.length; i++) {
            //Antes que nada, hay que ocultarlo
            $(holders[i]).hide();
            //Si es imagen
            if (stimuli_list[i].includes(".jpg")) {
                holders[i].innerHTML = "<img src = '" + stimuli_list[i] + "'>";
                //Si es palabra
            } else {
                holders[i].innerHTML = stimuli_list[i];
            }
        }
        //Cuando las imágenes ya se cargaron
        $('#stimuli').imagesLoaded(function () {
            //Ocultar el spiner
            $("#loader").hide();
            //Ir a función que muestra estímulos
            trialCount = 0;
            IATcore();
        });
    });
}

function IATcore() {

    //Cuántos estímulos hay? Si ya hicimos más, salir al siguiente bloque
    if (trialCount < stimuli_list.length) {
        //Si no es el primero, ocultar último holder
        if (trialCount != 0) {
            $(holders[trialCount - 1]).hide();
        }

        //Mostrar estímulo
        $(holders[trialCount]).show();

        //Iniciar conteo
        trialStart = new Date();

    } else {
        //Guardar resultados del round en sessionInfo
        sessionInfo["round_" + roundCount] = roundResults;
        //Enviar resultados del round al servidor
        $.ajax({
            type: "POST",
            url: "php_modules/updateIAT.php",
            data: JSON.stringify(sessionInfo["round_" + roundCount]),
            dataType: "json",
            contentType: 'application/json',
            success: function () {
                console.log("POST: roundResults");
            },
            async: false
        });
        //Sumar un round y limpiar errores
        errorCount = 0;
        roundCount += 1;
        IATinst();
    }

}

function IATanswer(side) {
    //Definir index de bloque
    var index = roundCount - 1;
    //Definir valores para izq y der
    var izq = Object.values(bloques)[index].izq_val;
    var der = Object.values(bloques)[index].der_val;
    //Determinar si el estímulo que está viendo el usuario es imagen o palabra
    //Si es imagen
    if (stimuli_list[trialCount].includes(".jpg")) {
        //Obtener categoría de la imagen
        var imageKey = stimuli_list[trialCount].split("/")[1];
        imageKey = imageKey.split(".")[0];
        //Hay que restarle 1 a imageKey (porque el nombre de los archivos empieza en 1)
        imageKey -= 1;
        var stimuli_cat = Object.values(stimuli.images)[imageKey].cat;
        //Si es palabra
    } else {
        //Obtener categoría de la palabra
        var stimuli_cat = stimuli.words[stimuli_list[trialCount]].cat;
    }
    //Definir estímulo correcto
    if (izq.includes(stimuli_cat)) {
        var ans = "izq";
    }
    if (der.includes(stimuli_cat)) {
        var ans = "der";
    }
    //Correcto
    if (ans == side) {
        //Detener conteo
        trialEnd = new Date();
        //Definir info del trial
        trialInfo = {};
        trialInfo["errors"] = errorCount;
        trialInfo["round"] = roundCount;
        trialInfo["trial"] = trialCount;
        trialInfo["cat_label"] = ans;
        trialInfo["stimuli"] = stimuli_list[trialCount];
        trialInfo["Session_ID"] = sessionInfo["ID"];
        trialInfo["reaction"] = trialEnd - trialStart;
        //Agregar a info del round
        roundResults.push(trialInfo);
        //Limpiar trialinfo y conteo de errores
        errorCount = 0;
        trialInfo = {};
        //Ocultar error handler
        $("#errormark_1").hide();
        $("#errormark_2").hide();
        //Contar un trial más y continuar
        trialCount += 1;
        IATcore();
    } else {
        //Sumar un error
        errorCount += 1;
        //Mostrar error handler
        $("#errormark_1").show();
        $("#errormark_2").show();
    }

}

function IATstimuli(trials, type) {
    var fooList = [];
    switch (type) {
        //Si solicitamos sólo texto
        case 'text':
            //Palabras
            var foonums = random(0, 19, trials + 4);
            foonums.forEach(element => {
                fooList.push(Object.keys(stimuli.words)[element]);
            });
            return fooList;
        //Si solicitamos sólo imágenes
        case 'imgs':
            //Imágenes
            var foonums = random(0, 19, trials + 4);
            foonums.forEach(element => {
                fooList.push(Object.values(stimuli.images)[element].path);
            });
            return fooList;
        //Si solicitamos texto e imágenes
        case 'text&imgs':
            //Primero, cuatro palabras
            var foonums = random(0, 19, 4);
            foonums.forEach(element => {
                fooList.push(Object.keys(stimuli.words)[element]);
            });
            //Ahora imágenes y palabras
            var foonums_w = random(0, 19, trials / 2);
            var foonums_i = random(0, 19, trials / 2);
            for (let i = 0; fooList.length <= trials + 3; i++) {
                fooList.push(Object.values(stimuli.images)[foonums_i[i]].path);
                fooList.push(Object.keys(stimuli.words)[foonums_w[i]]);
            }
            return fooList;
    }

}

//Función para cargar cuestionario demográfico
function loadCuest1() {
    //Cargar documento con cuestionario demográfico
    $("#boxContent").load('cuestionario_1.html', function () {
        //Cambiar título
        $("#header").html("<h1>Por favor, conteste las siguientes preguntas...</h1>");
        //Ocultar loader
        //Extraer respuestas
        $("#loader").hide();
        //Cuando da clic en siguiente
        $("#continuarButton").click(function (e) {
            //Mostrar loader y ocultar botón
            $("#loader").show();
            $("#continuarButton").hide();
            //Recolectar respuestas
            var respuestas_A = {};
            for (let i = 0; i < 11; i++) {
                respuestas_A["q" + i] = $('#q' + i).val();
            }
            //Verificar si hay respuestas vacías
            var emptyAns = [];
            for (let i = 0; i < Object.keys(respuestas_A).length; i++) {
                //Crear lista de vacíos
                if (Object.values(respuestas_A)[i] == "NONE" || Object.values(respuestas_A)[i] == "") {
                    //Si está vacío, agregarlo a la lista
                    emptyAns.push(i);
                }
            }
            //Si la lista no está vacía, hacerla de tos
            if (emptyAns.length > 0) {
                alert("Por favor, no deje campos vacíos. Hemos marcado en rojo aquellos que aún no ha llenado.");
                //Marcar vacíos
                for (let i = 0; i < emptyAns.length; i++) {
                    $('#q' + emptyAns[i]).css("border", "2px solid #FF335C");
                }
                //Ocultar loader y mostrar botón
                $("#loader").hide();
                $("#continuarButton").show();
                //Impedir que la función continúe
                return false;
            }
            //Establecer índice de respuestas y agregar id de sesión
            respuestas_A["min"] = 0;
            respuestas_A["max"] = 10;
            respuestas_A["ID"] = sessionInfo["ID"];
            //Enviar respuestas como json
            $.ajax({
                type: "POST",
                url: "php_modules/updateGeneral.php",
                data: JSON.stringify(respuestas_A),
                dataType: "text/html;charset=utf-8",
                success: function () {
                    console.log("POST: Respuestas");
                },
                async: false
            });
            //Actualizar status de sesión y enviar
            sessionInfo["Status"] = "Cuest 1";
            sessionInfo["EndTime"] = new Date().toLocaleString();
            $.ajax({
                type: "POST",
                url: "php_modules/updateStatus.php",
                data: {
                    'EndTime': sessionInfo["EndTime"],
                    'Session_ID': sessionInfo["ID"],
                    'Session_Status': sessionInfo["Status"]
                },
                dataType: "text/html;charset=utf-8",
                success: function () {
                    console.log("POST: Status update");
                },
                async: false
            });
            //Ir a IAT
            window.scrollTo(0, 0);
            IATinit();
        });
    });
}

//Función para cargar cuestionario de preferencias políticas (sec. a)
function loadCuest2a() {
    //Cargar documento con cuestionario demográfico
    $("#boxContent").load('cuestionario_2_a.html', function () {
        //Cambiar título
        $("#header").html("<h1>Antes de que se vaya...</h1>");
        //Ocultar loader
        $("#loader").hide();
        //Cuando da clic en siguiente
        $("#continuarButton").click(function (e) {
            //Mostrar loader y ocultar botón
            $("#loader").show();
            $("#continuarButton").hide();
            //Recolectar respuestas
            var respuestas_B = {};
            //Sliders
            for (let i = 11; i < 20; i++) {
                respuestas_B["q" + i] = $('#q' + i).val();
            }
            //Verificar si hay sliders sin interactuar
            var unchangedSlider = [];
            for (let i = 11; i < 20; i++) {
                //Crear lista de no cambiados
                if ($('#q' + i).attr("changed") == "0") {
                    //Si está vacío, agregarlo a la lista
                    unchangedSlider.push(i);
                }
            }
            //Verificar si hay respuestas vacías
            var emptyAns = [];
            for (let i = 0; i < Object.keys(respuestas_B).length; i++) {
                //Crear lista de vacíos
                if (Object.values(respuestas_B)[i] == undefined || Object.values(respuestas_B)[i] == "NONE") {
                    //Si está vacío, agregarlo a la lista
                    emptyAns.push(Object.keys(respuestas_B)[i]);
                }
            }
            //Si hay sliders vacíos, hacerla de tos
            if (unchangedSlider.length > 0) {
                alert("Por favor, tiene que ingresar una respuesta en todos los controles deslizadores. Toque y deslice la pelota naranja hacia el punto de la escala que refleje mejor su opinión. Hemos marcado en rojo aquellos que aún no ha llenado.");
                //Marcar vacíos
                for (let i = 0; i < unchangedSlider.length; i++) {
                    $('#slider-status-q' + unchangedSlider[i]).css("color", "#FF335C");
                }
                //Ocultar loader y mostrar botón
                $("#loader").hide();
                $("#continuarButton").show();
                //Evitar que la función continúe
                return false;
            }
            //Establecer índice de respuestas y agregar id de sesión
            respuestas_B["min"] = 11;
            respuestas_B["max"] = 19;
            respuestas_B["ID"] = sessionInfo["ID"];
            //Enviar respuestas como JSON
            $.ajax({
                type: "POST",
                url: "php_modules/updateGeneral.php",
                data: JSON.stringify(respuestas_B),
                dataType: "text/html;charset=utf-8",
                success: function () {
                    console.log("POST: Respuestas");
                },
                async: false
            });
            //Actualizar status de sesión y enviar
            sessionInfo["Status"] = "Cuest 2A";
            sessionInfo["EndTime"] = new Date().toLocaleString();
            $.ajax({
                type: "POST",
                url: "php_modules/updateStatus.php",
                data: {
                    'EndTime': sessionInfo["EndTime"],
                    'Session_ID': sessionInfo["ID"],
                    'Session_Status': sessionInfo["Status"]
                },
                dataType: "text/html;charset=utf-8",
                success: function () {
                    console.log("POST: Status update");
                },
                async: false
            });
            //Ir a sección b del cuestionario
            window.scrollTo(0, 0);
            loadCuest2b();
        });
    });
}

//Función para cargar cuestionario de preferencias políticas (sec. b)
function loadCuest2b() {
    //Cargar documento con cuestionario demográfico
    $("#boxContent").load('cuestionario_2_b.html', function () {
        //Cambiar título
        $("#header").html("<h1>Antes de que se vaya...</h1>");
        //Ocultar loader
        $("#loader").hide();
        //Cuando da clic en siguiente
        $("#continuarButton").click(function (e) {
            //Mostrar loader y ocultar botón
            $("#loader").show();
            $("#continuarButton").hide();
            //Recolectar respuestas
            var respuestas_C = {};
            //Radio buttons
            for (let i = 20; i < 45; i++) {
                respuestas_C["q" + i] = $('input:radio[name=q' + i + ']:checked').val();
            }
            //Select
            for (let i = 45; i < 46; i++) {
                respuestas_C["q" + i] = $('#q' + i).val();
            }
            //Radio buttons
            for (let i = 46; i < 47; i++) {
                respuestas_C["q" + i] = $('input:radio[name=q' + i + ']:checked').val();
            }
            //Verificar si hay respuestas vacías
            var emptyAns = [];
            for (let i = 0; i < Object.keys(respuestas_C).length; i++) {
                //Crear lista de vacíos
                if (Object.values(respuestas_C)[i] == undefined || Object.values(respuestas_C)[i] == "NONE") {
                    //Si está vacío, agregarlo a la lista
                    emptyAns.push(Object.keys(respuestas_C)[i]);
                }
            }
            //Si hay otras respuestas vacías, hacerla de tos
            if (emptyAns.length > 0) {
                alert("Por favor, tiene que responder a todas las preguntas. Hemos marcado en rojo aquellos que aún no ha llenado.");
                //Marcar vacíos
                for (let i = 0; i < emptyAns.length; i++) {
                    if (emptyAns[i] == "q20") {
                        $("p:contains('la mayoría de quienes acuden a los servicios')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q21") {
                        $("p:contains('la mayoría de quienes toman el transporte público')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q22" ||
                        emptyAns[i] == "q23" ||
                        emptyAns[i] == "q24" ||
                        emptyAns[i] == "q25" ||
                        emptyAns[i] == "q26" ||
                        emptyAns[i] == "q27") {
                        $("p:contains('médicos tiene acceso')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q28") {
                        $("p:contains('es justo o injusto, correcto o incorrecto')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q29") {
                        $("p:contains('se transporte diariamente en microbús/pesero?')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q30") {
                        $("p:contains('hospital privado?')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q31") {
                        $("p:contains('de modelo reciente?')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q32") {
                        $("p:contains('hospital público?')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q33") {
                        $("p:contains('beneficiario de un programa de apoyo económico del gobierno?')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q34") {
                        $("p:contains('una persona de clase alta?')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q35" ||
                        emptyAns[i] == "q36" ||
                        emptyAns[i] == "q37" ||
                        emptyAns[i] == "q38" ||
                        emptyAns[i] == "q39" ||
                        emptyAns[i] == "q40" ||
                        emptyAns[i] == "q41" ||
                        emptyAns[i] == "q42" ||
                        emptyAns[i] == "q43" ||
                        emptyAns[i] == "q44") {
                        $("p:contains('¿Podría decirme si en su casa tienen...?')").css("color", "#FF335C");
                    } else if (emptyAns[i] == "q45") {
                        $('#' + emptyAns[i]).css("border", "2px solid #FF335C");
                    } else if (emptyAns[i] == "q46") {
                        $("p:contains('el color que se parece más a su tono')").css("color", "#FF335C");
                    }
                }
                //Ocultar loader y mostrar botón
                $("#loader").hide();
                $("#continuarButton").show();
                //Evitar que la función continúe
                return false;
            }
            //Establecer índice de respuestas y agregar id de sesión
            respuestas_C["min"] = 20;
            respuestas_C["max"] = 46;
            respuestas_C["ID"] = sessionInfo["ID"];
            //Enviar respuestas como JSON
            $.ajax({
                type: "POST",
                url: "php_modules/updateGeneral.php",
                data: JSON.stringify(respuestas_C),
                dataType: "text/html;charset=utf-8",
                success: function () {
                    console.log("POST: Respuestas");
                },
                async: false
            });
            //Actualizar status de sesión y enviar
            sessionInfo["Status"] = "Cuest 2B";
            sessionInfo["EndTime"] = new Date().toLocaleString();
            $.ajax({
                type: "POST",
                url: "php_modules/updateStatus.php",
                data: {
                    'EndTime': sessionInfo["EndTime"],
                    'Session_ID': sessionInfo["ID"],
                    'Session_Status': sessionInfo["Status"]
                },
                dataType: "text/html;charset=utf-8",
                success: function () {
                    console.log("POST: Status update");
                },
                async: false
            });
            //Ir a mensaje de salida
            window.scrollTo(0, 0);
            Byemessage();
        });
    });
}

//Función para cargar instrucciones
function loadInstruct() {
    //Cargar documento con las instrucciones
    $("#boxContent").load('instrucciones.html', function () {
        //Cambiar título
        $("#header").html("<h1>Bienvenido</h1>");
        //Ocultar loader
        $("#loader").hide();
        $("#continuarButton").click(function (e) {
            //Ocultar botones y mostrar cargando
            $("#loader").show();
            $("#continuarButton").hide();
            $("#salirButton").hide();
            //Si da clic en continuar
            //Status de sesión = el usuario aceptó
            sessionInfo["Status"] = "Continue";
            //evitar default y enviar info de sesión
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "php_modules/initExp.php",
                data: {
                    'roundOrder': sessionInfo["roundOrder"],
                    'Session_ID': sessionInfo["ID"],
                    'Session_Status': sessionInfo["Status"],
                    'Session_DateTime': sessionInfo['DateTime']
                },
                dataType: 'text',
                success: function () {
                    console.log("POST: Session ID & Session Status");
                },
                async: false
            });
            //Cargar cuestionario
            window.scrollTo(0, 0);
            loadCuest1();
        });
        $("#salirButton").click(function (e) {
            //Status de sesión = el usuario declinó
            sessionInfo["Status"] = "Decline";
            //Enviar info de sesión
            $.ajax({
                type: "POST",
                url: "php_modules/initExp.php",
                data: {
                    'roundOrder': sessionInfo["roundOrder"],
                    'Session_ID': sessionInfo["ID"],
                    'Session_Status': sessionInfo["Status"],
                    'Session_DateTime': sessionInfo['DateTime']
                },
                dataType: 'text',
                success: function () {
                    console.log("POST: Session ID & Session Status");
                },
                async: false
            });
            //Ir al mensaje de salida
            Byemessage();
        });
    });
};

function sliderChanged(inputID) {
    //Campiar status del slider
    $("#q" + inputID).attr("changed", "1");
    //Ocultar texto de status
    $("#slider-status-q" + inputID + " span").hide();
    //Cambiar opacidad
    $("#q" + inputID).css("opacity", "1");
}

function radioChanged(inputID, val) {
    $("#q" + inputID + "_1").css("color", "#FFFFFF")
    $("#q" + inputID + "_2").css("color", "#FFFFFF")
    $("#q" + inputID + "_3").css("color", "#FFFFFF")
    //Mostrar span
    $("#q" + inputID + "_" + val).css("color", "#592c5f")
}

function Byemessage() {
    $("#boxContent").load('bye.html', function () {
        //Cambiar título
        $("#header").html("<h1>¡Gracias!</h1>");
        //Terminar
        return false;
    });
}

//Función para inicializar el IAI
function docReady() {
    //Mensaje en consola
    console.log("Documento cargado.");
    //Generar ID de sesión
    initSes();
};

//Función para verificar input numérico
function numCheck(element) {
    var content = $("#" + element).val()
    if (isNaN(content)) {
        $("#" + element + "_alert").show()
    } else {
        $("#" + element + "_alert").hide()
    }
}

//Aquí inicia la ejecución del IAT (cuando el documento web se carga)
$(document).ready(docReady);