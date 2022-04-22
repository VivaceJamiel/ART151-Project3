const getDestination = () => {
    let destination = document.getElementById("destination").value;
    if (destination === "") {
        alert("Please enter a destination");
    } else {    
        getPicture(destination);
        getWeather(destination);
    }
}