function MostrardatosclimaBogota(datosclima) {
    $.each(datosclima, function(indice, elemento) {

        if (indice == "weather") {
            var insertarEstadoclimaBogota = "<span><h5 style='font-size: small; color: #ffffff;'>" + elemento[0].main + "</h5></span>";
            $(".estado-clima").append(insertarEstadoclimaBogota);

            var icon = elemento[0].icon;
            var urliconclima = 'https://openweathermap.org/img/w/' + icon + '.png';
            var insertarImgclimaBogota = "<img src='" + urliconclima + "' style='align-items: center;' width=100%; alt='Cargando...'>";
            $(".icon-clima").append(insertarImgclimaBogota);

        }

        if (indice == "main") {
            var insertarTempclimaBogota = "<span><h4 style='margin: auto; color: #ffffff; text-align: center;'>" + elemento.temp + "°" + "</h4></span>";
            $(".temperatura-cel").append(insertarTempclimaBogota);
        }

        if (indice == "name") {
            var insertarNombreCiudad = "<span style='margin: auto; color: #ffffff; text-align: center; font-size: small;'>" + elemento + "</span>";
            $(".nom-ciudad").append(insertarNombreCiudad);
            cargarDatosclimaBogotaForecast3();
        }
    });

}

function cargarDatosclimaBogota() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=2b6fd7eea33702450103e7e52b328c7a&units=metric",
        success: function(datos) {
            MostrardatosclimaBogota(datos);
        }
    });
}

function cargarDatosclimaBogotaForecast3() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=Bogota&cnt=3&appid=2e03fae4514eaffc6a4eab018b8cfe1f&units=metric",
        success: function(datos) {
            $.each(datos, function(indice, elemento) {

                if (indice == "list") {
                    var icon = elemento[0].weather[0].icon;
                    var urliconclima = 'https://openweathermap.org/img/w/' + icon + '.png';
                    var insertarImgclimaBogota = "<div class='imgf3'><img src='" + urliconclima + "'/></div>";
                    var insertarEstadoclimaBogota3 = "<div class='dia'><div class='card' id='diados'>" + insertarImgclimaBogota + " <span class='spn-el-1'>" + elemento[0].weather[0].main + " <br> <span>" + elemento[0].dt_txt + "</span> </span></div><div class='card' id='info1'><span class='spn-gr'>" + elemento[0].main.temp_min + "° /" + elemento[0].main.temp_max + "° </span></div></div>";
                    $(".cont-clima-3").append(insertarEstadoclimaBogota3);

                    var icon = elemento[1].weather[0].icon;
                    var urliconclima = 'https://openweathermap.org/img/w/' + icon + '.png';
                    var insertarImgclimaBogota = "<div class='imgf3'><img src='" + urliconclima + "'/></div>";
                    var insertarEstadoclimaBogota3 = "<div class='dia'><div class='card' id='diados'>" + insertarImgclimaBogota + " <span class='spn-el-1'>" + elemento[1].weather[0].main + " <br> <span>" + elemento[1].dt_txt + "</span></div><div class='card' id='info1' style='background-color: #dbe8f7;'><span class='spn-gr' style=' color: black;'>" + elemento[1].main.temp_min + "° /" + elemento[1].main.temp_max + "° </span></div></div>";
                    $(".cont-clima-3").append(insertarEstadoclimaBogota3);

                    var icon = elemento[2].weather[0].icon;
                    var urliconclima = 'https://openweathermap.org/img/w/' + icon + '.png';
                    var insertarImgclimaBogota = "<div class='imgf3'><img src='" + urliconclima + "'/></div>";
                    var insertarEstadoclimaBogota3 = "<div class='dia'><div class='card' id='diados'>" + insertarImgclimaBogota + " <span class='spn-el-1'>" + elemento[2].weather[0].main + " <br> <span>" + elemento[2].dt_txt + "</span></div><div class='card' id='info1' style='background-color: #dbe8f7;'><span class='spn-gr' style=' color: black;'>" + elemento[2].main.temp_min + "° / " + elemento[2].main.temp_max + "° </span></div></div>";
                    $(".cont-clima-3").append(insertarEstadoclimaBogota3);
                    cargarDatosclimaParis();
                }

            });
        }
    });
}

function cargarDatosclimaParis() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=2b6fd7eea33702450103e7e52b328c7a&units=metric",
        success: function(datos) {
            MostrardatosclimaParis(datos);
        }
    });
}

function MostrardatosclimaParis(datosclima) {
    $.each(datosclima, function(indice, elemento) {


        if (indice == "coord") {
            var insertarLonParis = elemento.lon + "Km/h";
            $(".card-km").append(insertarLonParis);

        }

        if (indice == "weather") {
            var insertarEstadoclimaParis = elemento[0].main;
            $(".card-est-clima").append(insertarEstadoclimaParis);

            var icon = elemento[0].icon;
            var urliconclima = 'https://openweathermap.org/img/w/' + icon + '.png';
            var insertarImgclimaParis = "<img src='" + urliconclima + "' style='align-items: center;' width=100%; alt='Cargando...'>";
            $(".div-icon-lon").append(insertarImgclimaParis);

        }

        if (indice == "main") {
            var insertarTempclimaParis = elemento.temp + "°";
            $(".card-grados").append(insertarTempclimaParis);

            var insertarHumedadclimaParis = elemento.humidity;
            $(".card-humedad").append(insertarHumedadclimaParis);
        }

        if (indice == "name") {
            var insertarNombreCiudad = elemento;
            $(".card-ciudad").append(insertarNombreCiudad);
        }

        if (indice == "sys") {
            var insertarPais = elemento.country + " - ";
            $(".card-ciudad").append(insertarPais);
            cargarDatosclimaBurdeos();
        }

    });

}

function cargarDatosclimaBurdeos() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=Versalles&appid=2b6fd7eea33702450103e7e52b328c7a&units=metric",
        success: function(datos) {
            MostrardatosclimaBurdeos(datos);
        }
    });
}

function MostrardatosclimaBurdeos(datosclima) {
    $.each(datosclima, function(indice, elemento) {


        //DATOS DE LA CIUDAD DE BURDEOS FRANCIA
        if (indice == "coord") {
            var insertarLonBurdeos = elemento.lon + "Km/h";
            $(".card-km2").append(insertarLonBurdeos);

        }

        if (indice == "weather") {
            var insertarEstadoclimaBurdeos = elemento[0].main;
            $(".card-est-clima2").append(insertarEstadoclimaBurdeos);

            var icon = elemento[0].icon;
            var urliconclima = 'https://openweathermap.org/img/w/' + icon + '.png';
            var insertarImgclimaBurdeos = "<img src='" + urliconclima + "' style='align-items: center;' width=100%; alt='Cargando...'>";
            $(".div-icon-lon2").append(insertarImgclimaBurdeos);

        }

        if (indice == "main") {
            var insertarTempclimaBurdeos = elemento.temp + "°";
            $(".card-grados2").append(insertarTempclimaBurdeos);

            var insertarHumedadclimaBurdeos = elemento.humidity;
            $(".card-humedad2").append(insertarHumedadclimaBurdeos);
        }

        if (indice == "name") {
            var insertarNombreCiudad = elemento;
            $(".card-ciudad2").append(insertarNombreCiudad);
        }

        if (indice == "sys") {
            var insertarPais = elemento.country + " - ";
            $(".card-ciudad2").append(insertarPais);
        }


    });

}