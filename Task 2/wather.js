// const apiKey = "d5b18117174e47689b8182422263107";
// const baseURL = 'http://api.weatherapi.com/v1/current.json?key= d5b18117174e47689b8182422263107&q=London&aqi=no';





// async function getWeather(){ 
//     try {
//   const response = await fetch(baseURL);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);

//   console.log(data.name);
// console.log(data.main.temp);
// console.log(data.main.humidity);
// console.log(data.wind.speed);
// console.log(data.weather[0].description);

// } catch (error) {
//   console.error('Error fetching weather data:', error);
// }
// }
// getWeather();






//------------------------------------------------------------------------------------------------
const apiKey = "d5b18117174e47689b8182422263107";
 

const input = document.querySelector('.input');
const button = document.querySelector('.btn');


const tempMsg = document.getElementById('temp-msg');
const cityMsg = document.getElementById('city-msg');
const humidityMsg = document.getElementById('humidity-msg');
const windMsg = document.getElementById('wind-msg');
let cityName = 'London';

async function getWeather(){ 
    try {
        const URL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;
        const response = await fetch(URL);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        cityMsg.innerHTML = data.location.name;
        tempMsg.innerHTML = data.current.temp_c + '°C';
        humidityMsg.innerHTML = 'Humidity: ' + data.current.humidity + '%';
        windMsg.innerHTML = 'Wind Speed: ' + data.current.wind_kph + ' km/h';
    } catch (error) {
        console.error('Error fetching weather data:', error);
        cityMsg.innerHTML = "City not found!";
    }
}

getWeather();
button.addEventListener('click', (e) => {
     e.preventDefault();
     cityName = input.value;
     getWeather();
});






// const apiKey = "d5b18117174e47689b8182422263107";

// const input = document.querySelector('.input');
// const button = document.querySelector('.btn');

// const tempMsg = document.getElementById('temp-msg');
// const cityMsg = document.getElementById('city-msg');
// const humidityMsg = document.getElementById('humidity-msg');
// const windMsg = document.getElementById('wind-msg');

// let cityName = "London"; // 👈 default value, taake page load pe bhi kuch dikhe

// async function getWeather(){ 
//     try {
//         const URL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;
//         const response = await fetch(URL);

//         if (!response.ok) throw new Error("City not found");

//         const data = await response.json();

//         cityMsg.innerHTML = data.location.name;
//         tempMsg.innerHTML = data.current.temp_c + '°C';
//         humidityMsg.innerHTML = 'Humidity: ' + data.current.humidity + '%';
//         windMsg.innerHTML = 'Wind Speed: ' + data.current.wind_kph + ' km/h';
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         cityMsg.innerHTML = "City not found!";
//     }
// }

// // page load hote hi London ka weather dikhado
// getWeather();

// button.addEventListener('click', (e) => {
//      e.preventDefault();
//      cityName = input.value;   // 👈 'let' hata diya — ab ye upar wale global cityName ko update karega
//      getWeather();              // 👈 ab actually call ho raha hai
// });