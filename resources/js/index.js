//public variables
oslo_url = 'https://api.open-meteo.com/v1/forecast?latitude=59.9138&longitude=10.7387&hourly=temperature_2m&current_weather=true';
berlin_url = 'https://api.open-meteo.com/v1/forecast?latitude=52.5235&longitude=13.4115&hourly=temperature_2m&current_weather=true';
paris_url = 'https://api.open-meteo.com/v1/forecast?latitude=48.8567&longitude=2.3510&hourly=temperature_2m&current_weather=true';
london_url = 'https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m&current_weather=true';
let temp;

//oslo weather API
async function oslo() {
    const api = await fetch(oslo_url);
    const json = await api.json();
    temp = json.current_weather.temperature;

    //Output
    if(temp) {
        document.getElementById('vær_oslo').innerHTML = temp + '°C';
     }  
}

//Berlin weather API
async function berlin() {
    const api = await fetch(berlin_url);
    const json = await api.json();
    temp = json.current_weather.temperature;

    //Output
    if(temp) {
         document.getElementById('vær_berlin').innerHTML = temp + '°C';
     }  
}

//Paris weather API
async function paris() {
    const api = await fetch(paris_url);
    const json = await api.json();
    temp = json.current_weather.temperature;

    //Output
    if(temp) {
        document.getElementById('vær_paris').innerHTML = temp + '°C';
     }  
}

//London weather API
async function london() {
    const api = await fetch(london_url);
    const json = await api.json();
    temp = json.current_weather.temperature;

    //Output
    if(temp) {
        document.getElementById('vær_london').innerHTML = temp + '°C';
     }  
}

//Run
oslo();
berlin();
paris();
london();

