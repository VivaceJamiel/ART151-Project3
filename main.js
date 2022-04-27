const getDestination = () => {
    let destination = document.getElementById("destination").value;
    if (destination === "") {
        alert("Please enter a destination");
    } else {    
        geocodeAddress(destination);
        getPicture(destination);
        getWeather(destination);
    }
}

const go = () => {
    window.location.href = "collage.html";
}