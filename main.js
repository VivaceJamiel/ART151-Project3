const getDestination = () => {
    let destination = document.getElementById("destination").value;
    if (destination === "") {
        alert("Please enter a destination");
    } else {    
        getWeather(destination);
        getPicture(destination);
    }
}

const go = () => {
    window.location.href = "collage.html";
}