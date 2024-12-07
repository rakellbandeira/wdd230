//Select HTML elements in the document
const currenTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=-6.64&appid=15ed6aeea78a836ad48d3de8ac25f0cf&units=imperial';

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
    currenTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    console.log(desc);

    weatherIcon.setAttribute('width', '100');
    weatherIcon.setAttribute('height', '100');
    weatherIcon.setAttribute('src', iconsrc);

    captionDesc.textContent = `Weather: ${desc}`;
    
}

apiFetch();

