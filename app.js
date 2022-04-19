

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

function updateDevices(event) {
    console.log(event);
}

function failure() {
    console.log("No access to your MIDI devices.");
}

function success(midiAccess) {
    midiAccess.addEventListener("statechange", updateDevices);
    const inputs = midiAccess.inputs
    inputs.forEach((input) => {
        console.log(input)
        input.addEventListener('midimessage', handleInput);
    })
}

function noteOn(note) {
    // console.log(note, "on");
    if (note === 60) {
        document.getElementById("output").innerHTML = "Note is on"
    }
}

function noteOff(note) {
    // console.log(note, "off");
    if (note === 60) {
        document.getElementById("output").innerHTML = "Press 60"
    }
}

function handleInput(input) {
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    switch (command) {
        case 144:
            if (velocity > 0) {
                noteOn(note)
            } else {
                noteOff(note)
            }
            break;
    }
}

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
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