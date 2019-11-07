const weather = document.querySelector(".js-weather");
const API_KEY = "5960b3e4d4c260b2137b2677aa57d34f";
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp} @ ${place}`;
        });
}

function saveCoords(coordOjb){
    localStorage.setItem(COORDS, JSON.stringify(coordOjb));
}

function handleGeoSuccess(position){
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // latitude = latidude
        longitude // longitude = longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("cannot load geo location");
}

function askForCords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCords();
    }
    else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();