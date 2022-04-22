const getWeather = (destination) => {
    let ret;
    let key = CONFIG.OPENWEATHER_API_KEY;
    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${key}`
    )
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });

}