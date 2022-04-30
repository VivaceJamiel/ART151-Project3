let device

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
    for (var output of midiAccess.outputs.values()) {
        device = output;
    }
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

    sun = [97, 98, 99, 93, 94, 95, 90, 91]
    for (let i = 0; i < sun.length; i++) {
        colorKeys(sun[i], 13)
    }
    clouds = [61, 56, 57, 58, 88, 55, 84, 85]
    for (let i = 0; i < clouds.length; i++) {
        colorKeys(clouds[i], 3)
    }
    grass = [40, 41, 42, 43, 72, 73, 74, 75, 36, 37, 38, 39, 68 , 69, 70, 71]
    for (let i = 0; i < grass.length; i++) {
        colorKeys(grass[i], 19)
    }
}

function showClouds() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 117)
    }
    clouds = [61, 56, 57, 58, 88, 55, 84, 85]
    for (let i = 0; i < clouds.length; i++) {
        colorKeys(clouds[i], 3)
    }
    grass = [40, 41, 42, 43, 72, 73, 74, 75, 36, 37, 38, 39, 68 , 69, 70, 71]
    for (let i = 0; i < grass.length; i++) {
        colorKeys(grass[i], 19)
    }
}

function noteOn(note) {
    // console.log(note, "on");
    console.log(note);
    if (note === 64) {
        clearAll();
    }
    if (note === 65) {
        showSun();
    }
    if (note === 66) {
        showClouds();
    }
}

function noteOff(note) {
    // console.log(note, "off");
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
