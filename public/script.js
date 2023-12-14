function iniciarMap() {
    var coordSantoDomingo = { lat: 18.4861, lng: -69.9312 };
    var coordPuntaCana = { lat: 18.5986155, lng: -68.475645 };
    var coordSantiagodelosCaballeros = { lat: 19.4399883, lng: -70.7554264 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: coordSantoDomingo
    });

    // Función para crear una tarjeta de información
    function crearTarjeta(titulo, contenido) {
        return '<div><h2>' + titulo + '</h2><p>' + contenido + '</p></div>';
    }

    // Función para hacer zoom al marcador clicado
    function hacerZoomAlMarcador(marcador) {
        map.setZoom(12); // Puedes ajustar el nivel de zoom según tus preferencias
        map.setCenter(marcador.getPosition());
    }

    // Marcador Santo Domingo
    var marcadorSantoDomingo = new google.maps.Marker({
        position: coordSantoDomingo,
        map: map,
        title: 'Santo Domingo'
    });

    // Evento de clic para mostrar la tarjeta de información y hacer zoom al hacer clic en el marcador
    marcadorSantoDomingo.addListener('click', function () {
        var tarjeta = new google.maps.InfoWindow({
            content: crearTarjeta('Santo Domingo', 'La capital de la República Dominicana.')
        });
        tarjeta.open(map, marcadorSantoDomingo);
        hacerZoomAlMarcador(marcadorSantoDomingo);
    });

    // Marcador Punta Cana
    var marcadorPuntaCana = new google.maps.Marker({
        position: coordPuntaCana,
        map: map,
        title: 'Punta Cana'
    });

    // Evento de clic para mostrar la tarjeta de información y hacer zoom al hacer clic en el marcador
    marcadorPuntaCana.addListener('click', function () {
        var tarjeta = new google.maps.InfoWindow({
            content: crearTarjeta('Punta Cana', 'Famoso destino turístico en la costa este.')
        });
        tarjeta.open(map, marcadorPuntaCana);
        hacerZoomAlMarcador(marcadorPuntaCana);
    });

    // Marcador SantiagodelosCaballeros
    var marcadorSantiagodelosCaballeros = new google.maps.Marker({
        position: coordSantiagodelosCaballeros,
        map: map,
        title: 'SantiagodelosCaballeros'
    });

    // Evento de clic para mostrar la tarjeta de información y hacer zoom al hacer clic en el marcador
    marcadorSantiagodelosCaballeros.addListener('click', function () {
        var tarjeta = new google.maps.InfoWindow({
            content: crearTarjeta('Santiago de los Caballeros', 'Segunda ciudad más grande del país.')
        });
        tarjeta.open(map, marcadorSantiagodelosCaballeros);
        hacerZoomAlMarcador(marcadorSantiagodelosCaballeros);
    });
}

