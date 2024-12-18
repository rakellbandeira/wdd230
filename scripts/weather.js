
/* Weather API dynamic */
const weatherIcon = document.querySelector('#weather-icon');
const temperature = document.querySelector('#temper');
const weatherDescription = document.querySelector('#weather-descrip');

/* -3.08, -60.03 */

let apiKey = 'e07e8dd5bfdca7a105fc13663a3d0723';

let url = 'https://api.openweathermap.org/data/2.5/weather?lat=-3.08&lon=-60.03&appid={apiKey}&units=metric';


async function apiFetch() {
    try {   
    
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
        console.log(data); 
                  
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayResults(data) {
    let temp = data.main.temp;
    temperature.innerHTML = `${temp} &deg;C`;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    console.log(desc);

    weatherIcon.setAttribute('width', '150');
    weatherIcon.setAttribute('height', '150');
    weatherIcon.setAttribute('src', iconsrc);

    weatherDescription.textContent = `${desc}`;
    
}

apiFetch();


/* Dynamic Activity Links*/

