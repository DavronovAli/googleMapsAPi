function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(40.7128, -74.006),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    minZoom: 2,
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var infoWindow = new google.maps.infoWindow();
  var marker = new google.maps.Market({
    position: new google.maps.LatLng(36.6769, 48.4963),
    map: map,
    title: "Iran, Zanjan",
  });

  marker.addListener("click", function () {
    infoWindow.setContent(marker.title);
    infoWindow.open(map, marker);
  });

  google.maps.event.addDomListener(window, "resize", function () {
    map.setContent(mapOptions.center);
  });
}

google.maps.event.addDomListener(window, "load", initialize);
