const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d52c66367b251e31339fdb175f5737f2";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('current-condition').textContent = jsObject.weather[0].description;;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;


var temp = jsObject.main.temp;
var speed = jsObject.wind.speed;
var exp = Math.pow(speed,0.16);
var f = 35.74 + (0.6215 * temp) - (35.75 * exp) + (0.4275 * temp * exp);

f.toFixed(2)

document.getElementById("natalie").innerHTML = f.toFixed(2);

console.log(f);
});

const apiURLf = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=d52c66367b251e31339fdb175f5737f2";

fetch(apiURLf)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);

});