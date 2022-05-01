const getDestination = () => {
    let destination = document.getElementById("destination").value;
    if (destination === "") {
        alert("Please enter a destination");
    } else {    
        getWeather(destination);
        geocodeAddress(destination);
        getPicture(destination);
        displayWeather();
    }
}

const go = () => {
    window.location.href = "collage.html";
}