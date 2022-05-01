function init() {
    let pictures = JSON.parse(window.sessionStorage.getItem("photos"));
    for (let i = 1; i <= 64; i++) {
        document.getElementById(String(i)).src = pictures[i - 1];
    }
    let weather = JSON.parse(window.sessionStorage.getItem("weather"));
    if (weather === "Rain") {
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('./weather/rain.png)";
    } else if (weather === "Clear") {
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('./weather/sunny.webp')";
    } else if (weather === "Clouds") {
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('./weather/clouds.jpg')";
    } else if (weather === "Snow") {
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('./weather/snow.jpg')";
    } else if (weather === "Mist") {
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('./weather/hazy.jpg')";
    }
}

let device

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
}

function colorKeys(key, clr) {
    device && device.send([0x90, key, clr]);
}
    
function clearAll() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 0)
    }
}

function noteOn(note) {
    switch (note) {
        case 64:
            document.getElementById("1").style.visibility = "visible";
            break;
        case 65:
            document.getElementById("9").style.visibility = "visible";
            break;            
        case 66:
            document.getElementById("17").style.visibility = "visible";
            break;
        case 67:
            document.getElementById("25").style.visibility = "visible";
            break;
        case 96:
            document.getElementById("33").style.visibility = "visible";
            break;
        case 97:
            document.getElementById("41").style.visibility = "visible";
            break;      
        case 98:
            document.getElementById("49").style.visibility = "visible";
            break;
        case 99:
            document.getElementById("57").style.visibility = "visible";
            break;         
            
        case 60:
            document.getElementById("2").style.visibility = "visible";
            break;
        case 61:
            document.getElementById("10").style.visibility = "visible";
            break;            
        case 62:
            document.getElementById("18").style.visibility = "visible";
            break;
        case 63:
            document.getElementById("26").style.visibility = "visible";
            break;
        case 92:
            document.getElementById("34").style.visibility = "visible";
            break;
        case 93:
            document.getElementById("42").style.visibility = "visible";
            break;      
        case 94:
            document.getElementById("50").style.visibility = "visible";
            break;
        case 95:
            document.getElementById("58").style.visibility = "visible";
            break; 

        case 56:
            document.getElementById("3").style.visibility = "visible";
            break;
        case 57:
            document.getElementById("11").style.visibility = "visible";
            break;            
        case 58:
            document.getElementById("19").style.visibility = "visible";
            break;
        case 59:
            document.getElementById("27").style.visibility = "visible";
            break;
        case 88:
            document.getElementById("35").style.visibility = "visible";
            break;
        case 89:
            document.getElementById("43").style.visibility = "visible";
            break;      
        case 90:
            document.getElementById("51").style.visibility = "visible";
            break;
        case 91:
            document.getElementById("59").style.visibility = "visible";
            break; 
            
        case 52:
            document.getElementById("4").style.visibility = "visible";
            break;
        case 53:
            document.getElementById("12").style.visibility = "visible";
            break;            
        case 54:
            document.getElementById("20").style.visibility = "visible";
            break;
        case 55:
            document.getElementById("28").style.visibility = "visible";
            break;
        case 84:
            document.getElementById("36").style.visibility = "visible";
            break;
        case 85:
            document.getElementById("44").style.visibility = "visible";
            break;      
        case 86:
            document.getElementById("52").style.visibility = "visible";
            break;
        case 87:
            document.getElementById("60").style.visibility = "visible";
            break; 

        case 48:
            document.getElementById("5").style.visibility = "visible";
            break;
        case 49:
            document.getElementById("13").style.visibility = "visible";
            break;            
        case 50:
            document.getElementById("21").style.visibility = "visible";
            break;
        case 51:
            document.getElementById("29").style.visibility = "visible";
            break;
        case 80:
            document.getElementById("37").style.visibility = "visible";
            break;
        case 81:
            document.getElementById("45").style.visibility = "visible";
            break;      
        case 82:
            document.getElementById("53").style.visibility = "visible";
            break;
        case 83:
            document.getElementById("61").style.visibility = "visible";
            break; 

        case 44:
            document.getElementById("6").style.visibility = "visible";
            break;
        case 45:
            document.getElementById("14").style.visibility = "visible";
            break;            
        case 46:
            document.getElementById("22").style.visibility = "visible";
            break;
        case 47:
            document.getElementById("30").style.visibility = "visible";
            break;
        case 76:
            document.getElementById("38").style.visibility = "visible";
            break;
        case 77:
            document.getElementById("46").style.visibility = "visible";
            break;      
        case 78:
            document.getElementById("54").style.visibility = "visible";
            break;
        case 79:
            document.getElementById("62").style.visibility = "visible";
            break; 

        case 40:
            document.getElementById("7").style.visibility = "visible";
            break;
        case 41:
            document.getElementById("15").style.visibility = "visible";
            break;            
        case 42:
            document.getElementById("23").style.visibility = "visible";
            break;
        case 43:
            document.getElementById("31").style.visibility = "visible";
            break;
        case 72:
            document.getElementById("39").style.visibility = "visible";
            break;
        case 73:
            document.getElementById("47").style.visibility = "visible";
            break;      
        case 74:
            document.getElementById("55").style.visibility = "visible";
            break;
        case 75:
            document.getElementById("63").style.visibility = "visible";
            break; 

        case 36:
            document.getElementById("8").style.visibility = "visible";
            break;
        case 37:
            document.getElementById("16").style.visibility = "visible";
            break;            
        case 38:
            document.getElementById("24").style.visibility = "visible";
            break;
        case 39:
            document.getElementById("32").style.visibility = "visible";
            break;
        case 68:
            document.getElementById("40").style.visibility = "visible";
            break;
        case 69:
            document.getElementById("48").style.visibility = "visible";
            break;      
        case 70:
            document.getElementById("56").style.visibility = "visible";
            break;
        case 71:
            document.getElementById("64").style.visibility = "visible";
            break; 
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

window.onload = init;