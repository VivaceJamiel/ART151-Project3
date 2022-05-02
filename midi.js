let device

function displayWeather() {
    let weather = JSON.parse(window.sessionStorage.getItem("weather"));
    if (weather === "Clouds") {
        showClouds();
    } else if (weather === "Clear") {
        showSun();
    } else if (weather === "Snow"){
        showSnow();
    } else if (weather === "Drizzle") {
        showRain();
    } else if (weather === "Haze" || weather === "Mist" || weather === "Smoke" || weather === "Dust" || weather === "Fog") { 
        showHaze();
    } else if (weather === "Thunderstorm") {
        showThunder();
    }
}

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

function updateDevices(event) {
    // console.log(event);
}

function failure() {
    console.log("No access to your MIDI devices.");
}

function success(midiAccess) {
    midiAccess.addEventListener("statechange", updateDevices);
    const inputs = midiAccess.inputs
    inputs.forEach((input) => {
        input.addEventListener('midimessage', handleInput);
    })
    for (var output of midiAccess.outputs.values()) {
        device = output;
    }
    clearAll();
}

function colorKeys(key, clr) {
    device && device.send([0x90, key, clr]);
}
    
function clearAll() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 0)
    }
}

function showSun() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 79)
    }

    sun = [55, 84, 51, 80, 59, 88, 54, 50, 85, 81, 47, 76, 58, 63, 92, 89, 86, 82, 77, 72, 43, 46, 49, 53, 64, 61, 74, 71, 36, 41, 99, 89, 88, 84, 80, 81, 82, 86, 85, 49, 51, 50, 55, 54, 94]
    for (let i = 0; i < sun.length; i++) {
        colorKeys(sun[i], 13)
    }

}

function showClouds() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 43)
    }
    clouds = [93, 92, 59, 58, 53, 48, 44, 45, 46, 47, 76, 77, 78, 79, 83, 90, 55, 54, 51, 80, 81, 82, 86, 85, 89, 88, 54, 50, 49, 84]
    for (let i = 0; i < clouds.length; i++) {
        colorKeys(clouds[i], 3)
    }
}

function showHaze() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 51)
    }

    cloud = [56, 61, 58, 63, 88, 93, 90, 95, 48, 53, 50, 55, 80, 85, 82, 87, 40, 45, 42, 47, 72, 77, 74, 79]
    for (let i = 0; i < cloud.length; i++) {
        colorKeys(cloud[i], 1)
    }
}

function showRain() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 51)
    }

    cloud = [96, 97, 63, 62, 57, 53, 54, 55, 84, 85, 86, 90, 94, 58, 59, 88, 89, 93, 92]
    for (let i = 0; i < cloud.length; i++) {
        colorKeys(cloud[i], 1)
    }
    snow = [50, 42, 76, 68, 82, 74]
    for (let i = 0; i < snow.length; i++) {
        colorKeys(snow[i], 41)
    }
}

function showSnow() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 51)
    }

    cloud = [96, 97, 63, 62, 57, 53, 54, 55, 84, 85, 86, 90, 94, 58, 59, 88, 89, 93, 92]
    for (let i = 0; i < cloud.length; i++) {
        colorKeys(cloud[i], 1)
    }
    snow = [50, 45, 42, 77, 47, 72, 74, 69]
    for (let i = 0; i < snow.length; i++) {
        colorKeys(snow[i], 3)
    }
}

function showThunder() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 51)
    }

    cloud = [96, 97, 63, 62, 57, 53, 54, 55, 84, 85, 86, 90, 94, 58, 59, 88, 89, 93, 92]
    for (let i = 0; i < cloud.length; i++) {
        colorKeys(cloud[i], 1)
    }
    lightning = [50, 45, 42, 37, 81, 78, 73, 70]
    for (let i = 0; i < lightning.length; i++) {
        colorKeys(lightning[i], 12)
    }
}

function noteOn(note) {
}

function noteOff(note) {
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
