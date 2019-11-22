const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d52c66367b251e31339fdb175f5737f2";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  });




var temp = 100;
var speed = 10;

var exp = Math.pow(speed,0.16);

var f = 35.74 + (0.6215 * temp) - (35.75 * exp) + (0.4275 * temp * exp);

f.toFixed(2)

document.getElementById("natalie").innerHTML = f.toFixed(2);

console.log(f);

