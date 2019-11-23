const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=d52c66367b251e31339fdb175f5737f2";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });