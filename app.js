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