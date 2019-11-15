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
            let name = document.createElement('name');
            let tagline = document.createElement('tagline');
            let date = document.createElement('date');
            let population = document.createElement('population');
            let rain = document.createElement('rain');
            let image = document.createElement('photo');

            name.textContent = towns[i].name;
            tagline.textContent = towns[i].motto; 
            date.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            image.setAttribute("src", towns[i].imageurl);

            card.appendChild(name);
            card.appendChild(tagline);
            card.appendChild(image);
            card.appendChild(date);
            card.appendChild(population);
            card.appendChild(rain);

            document.querySelector('div.cards').appendChild(card);
    }
});