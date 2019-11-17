const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if(i === 1 || i === 4 || i === 5) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let image = document.createElement('img');
        
        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = towns[i].yearFounded;
        currentPopulation.textContent = towns[i].currentPopulation;
        averageRainfall.textContent = towns[i].averageRainfall;
        image.setAttribute('src', '/images/' + towns[i].photo);
        
        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);
        card.appendChild(image);
        
        document.querySelector('div.cards').appendChild(card);
      }
    }
  });