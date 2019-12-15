const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&APPID=9d347f89ba52d481b32f369e448b26a3";
const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial&APPID=9d347f89ba52d481b32f369e448b26a3";
const apiURL3 = "https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&APPID=9d347f89ba52d481b32f369e448b26a3";
const apiURL4 = "https://api.openweathermap.org/data/2.5/weather?id=5389489&units=imperial&APPID=9d347f89ba52d481b32f369e448b26a3";

fetchAPI = (apiURL, num) =>  {
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    switch(num) {
    case 1:
        this.provo(jsObject);
        break;
    case 2:
        this.seattle(jsObject);
        break;
    case 3:
        this.idahofalls(jsObject);
        break;
    case 4:
        this.sacramento(jsObject);
        break;
    }
  });
}

provo = (jsObject) =>  {
    var mainObj = jsObject.main;
  
    document.getElementById('ptemp').textContent = jsObject.main.temp;
    document.getElementById('phumidity').textContent = jsObject.main.humidity;
    document.getElementById('pcurrent-condition').textContent = jsObject.weather[0].description;;
    document.getElementById('pwind-speed').textContent = jsObject.wind.speed;
  
  
  var temp = jsObject.main.temp;
  var speed = jsObject.wind.speed;
  var exp = Math.pow(speed,0.16);
  var f = 35.74 + (0.6215 * temp) - (35.75 * exp) + (0.4275 * temp * exp);
  
  f.toFixed(2)
  
  document.getElementById("pchill").innerHTML = f.toFixed(2);
  }
  
seattle = (jsObject) =>  {
    var mainObj = jsObject.main;
  
    document.getElementById('stemp').textContent = jsObject.main.temp;
    document.getElementById('shumidity').textContent = jsObject.main.humidity;
    document.getElementById('scurrent-condition').textContent = jsObject.weather[0].description;;
    document.getElementById('swind-speed').textContent = jsObject.wind.speed;
  
  
  var temp = jsObject.main.temp;
  var speed = jsObject.wind.speed;
  var exp = Math.pow(speed,0.16);
  var f = 35.74 + (0.6215 * temp) - (35.75 * exp) + (0.4275 * temp * exp);
  
  f.toFixed(2)
  
  document.getElementById("schill").innerHTML = f.toFixed(2);
  }

idahofalls = (jsObject) =>  {
    var mainObj = jsObject.main;
  
    document.getElementById('iftemp').textContent = jsObject.main.temp;
    document.getElementById('ifhumidity').textContent = jsObject.main.humidity;
    document.getElementById('ifcurrent-condition').textContent = jsObject.weather[0].description;;
    document.getElementById('ifwind-speed').textContent = jsObject.wind.speed;
  
  
  var temp = jsObject.main.temp;
  var speed = jsObject.wind.speed;
  var exp = Math.pow(speed,0.16);
  var f = 35.74 + (0.6215 * temp) - (35.75 * exp) + (0.4275 * temp * exp);
  
  f.toFixed(2)
  
  document.getElementById("ifchill").innerHTML = f.toFixed(2);
  }

sacramento = (jsObject) =>  {
    var mainObj = jsObject.main;
  
    document.getElementById('sactemp').textContent = jsObject.main.temp;
    document.getElementById('sachumidity').textContent = jsObject.main.humidity;
    document.getElementById('saccurrent-condition').textContent = jsObject.weather[0].description;;
    document.getElementById('sacwind-speed').textContent = jsObject.wind.speed;
  
  
  var temp = jsObject.main.temp;
  var speed = jsObject.wind.speed;
  var exp = Math.pow(speed,0.16);
  var f = 35.74 + (0.6215 * temp) - (35.75 * exp) + (0.4275 * temp * exp);
  
  f.toFixed(2)
  
  document.getElementById("sacchill").innerHTML = f.toFixed(2);
  }

fetchAPI(apiURL, 1);
fetchAPI(apiURL2, 2);
fetchAPI(apiURL3, 3);
fetchAPI(apiURL4, 4);