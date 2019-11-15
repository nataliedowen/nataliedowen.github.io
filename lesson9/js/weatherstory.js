const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
     .then(function (response) {
     return response.json();
 
    })
    .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

         for (let i = 0; i < towns.length; i++ ) {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let tagline = document.createElement('h3');
            let date = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');

            name.textContent = towns[i].name;
            tagline.textContent = towns[i].motto; 
            date.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            image.setAttribute("src", towns[i].photo);

            card.appendChild(name);
            card.appendChild(tagline);
            card.appendChild(image);
            card.appendChild(date);
            card.appendChild(population);
            card.appendChild(rain);

            document.querySelector('div.cards').appendChild(card);
    }
});