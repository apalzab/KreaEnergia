/*
 * KreaEnergia website
 *
 * Copyright 2014 Aitor Palacios
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Built by Aitor Palacios aitorpalacios.me
 * Designed by Irati García iratigarcia.com
*/

function initialize() {

  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(43.302533, -1.949508),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
    scrollwheel: false,
    draggable: false,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM
    }
  };

  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  // var trafficLayer = new google.maps.TrafficLayer();
  // trafficLayer.setMap(map);

  var logo = new google.maps.MarkerImage('./static/img/krea_logo.png');
  // var user = new google.maps.MarkerImage('user.png');

    // Adding markers to the map
  var krea_marker = new google.maps.Marker({
      position: new google.maps.LatLng(43.302533, -1.949508),
      map: map,
      icon: logo
  });


  // Creating the InfoWindows 
  var krea_infowindow = new google.maps.InfoWindow();
  

  // Creating the InfoWindows content
  var krea_content =
    '<div>' +
      '<h4>Krea Energia S.L.</h4>' +
      '<p>Paseo Ubarburu, 1220014 Donostia-San Sebastián</p>'+
    '</div>';


  // Setting the content of the InfoWindows
  krea_infowindow.setContent(krea_content);


  // Adding events to the markers
  google.maps.event.addListener(krea_marker, 'click', function() {
    closeInfoWindows(krea_marker);
    krea_infowindow.open(map, krea_marker);
  });



  function closeInfoWindows(marker) {
    krea_infowindow.close();
    //map.panTo(marker.getPosition());
    //map.setZoom(map.getZoom()+1);
  }

}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBmNZpoxu8WGGluEbJ1Q4cKChFN83z-ecU&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;