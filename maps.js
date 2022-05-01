let map, infoWindow;
let geocoder, resultsMap;

function geocodeAddress(destination) {
  geocoder.geocode( { 'address': destination}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });

      let info = JSON.parse(window.sessionStorage.getItem("weather"));

      let weather;
      if (info === "Clouds") {
        weather = "./icons/icons8-clouds-80.png";
      } else if (info === "Rain") {
        weather = "./icons/icons8-heavy-rain-80.png";
      } else if (info === "Snow") {
        weather = "./icons/icons8-snow-80.png";
      } else if (info === "Clear") {
        weather = "./icons/icons8-sun-80.png";
      } else if (info === "Haze") {
        weather = "./icons/icons8-dust-80.png";
      } else {
        weather = "./icons/icons8-sun-80.png";
      }

      let message = `
      <div style="display:flex; flex-direction: column; justify-content: center; align-items: center">
        <h3 style="text-align:center; margin-top:5; margin-bottom: 5;">${destination}</h3>
        <p>${results[0].formatted_address}</p>
        <img src="${weather}" style="margin-botton: 5px;">
        <button onclick="go()" style="margin:auto">Let's Go</button>
      </div>`;

      var infowindow = new google.maps.InfoWindow({
          content: message
      });

      marker.addListener('click', function() {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
      });
      map.setZoom(10)
    } else {
      if (status == 'ZERO_RESULTS') {
        alert('No results found');
      } else if (status == 'OVER_QUERY_LIMIT') {
        alert('Query limit reached');
      } else if (status == 'REQUEST_DENIED') {
        alert('Request denied');
      } else if (status == 'INVALID_REQUEST') {
        alert('Invalid request');
      } else {
        alert('Unknown error');
      }
    }
  });

}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  infoWindow = new google.maps.InfoWindow();

  geocoder = new google.maps.Geocoder();

  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
  

window.initMap = initMap;