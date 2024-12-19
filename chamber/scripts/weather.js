
let apiKey = 'e07e8dd5bfdca7a105fc13663a3d0723';

let url = `https://api.openweathermap.org/data/2.5/weather?lat=-3.08&lon=-60.03&appid=${apiKey}&units=metric`;
/* -3.1180268901885704, -60.041261621618084 */

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

    let currentIcon = document.getElementById('weathericon');
    let currentTemp = document.querySelector('#temperature');
    let windChill = document.querySelector('#windChill');
    let humidity = document.querySelector('#humidity');
    let weatherDescription = document.querySelector('#weatherTitle');


    let temp = data.main.temp;
    console.log(`Temperature: ${temp}`);

    currentTemp.innerHTML = `${temp} &deg;C`;

    let iconcode = data.weather[0].icon;
    console.log(iconcode);

    let iconsrc = `https://openweathermap.org/img/w/${iconcode}.png`;
    console.log(iconsrc);

    let description = data.weather[0].description;
    console.log(description);

    let windch = data.wind.speed;
    console.log(`Wind Chill: ${windch}`)

    let humid = data.main.humidity;
    console.log(`Humidity: ${humid}`);

    windChill.textContent = `${windch}`;

    humidity.textContent = `${humid}`;

    currentIcon.setAttribute('src', iconsrc);
    currentIcon.setAttribute('alt', 'iconChanged');

    weatherDescription.innerHTML = `${description.toUpperCase()}`;



}

apiFetch();


/* Banner Dynamic*/
function displayBanner() {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, ..., 6 = Saturday
   /*  console.log(`Today is the ${today} of the week`); */
    var divModal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];
  
    if (today >= 1 && today <= 3) { 
      divModal.style.display = 'block';   
      
    }

    span.onclick = function() {
        divModal.style.display = "none";
    }
}

  displayBanner();





async function addSpots() {
    console.log('teste add Spots');

    const response = await fetch(linksURL);
    const data = await response.json();

    const membLevel = ["Bronze", "Silver", "Gold"];
    function getRandomMembership() {
        const randomIndex = Math.floor(Math.random()*membLevel.length);
        return membLevel[randomIndex];
       
    }

    let spotlightBox = document.getElementById("businessAccordion");
    let memberLevel = document.getElementById("membLevel");
    let level = getRandomMembership();
    memberLevel.innerText = `Your membership level is ${level}`;

    const spotsGold = data.members.filter((member) => member.membershipLevel === "Gold");
    console.log(`Members Gold:`);
    console.log(spotsGold);

    const spotsSilver = data.members.filter((member) => member.membershipLevel === "Silver");
    console.log(`Members Silver:`);
    console.log(spotsSilver);

    const spotsBronze = data.members.filter((member) => member.membershipLevel === "Bronze");
    console.log(`Members Bronze:`);
    console.log(spotsBronze);

    if (level === "Bronze") {
        spotsBronze.forEach(spots =>{
            /* spotlightBox.innerHTML = `<div class="accord-item">
                        <div class="accord-topic">${spots.name}  <span class="arrow">&#10140;</span></div>
                        <div class="accord-text">${spots.description}</div></div>`;
        */ 
            let spotDiv = document.createElement("div");
            spotDiv.innerHTML = `<div class="accord-topic">${spots.name}  <span class="arrow">&#10140;</span></div>
                            <div class="accord-text">${spots.description}</div></div>`;
            spotDiv.setAttribute('class', 'accord-item');     
       
        spotlightBox.appendChild(spotDiv);
       })

        

    } else if (level === "Gold") {
        spotsGold.forEach(spots =>{/* 
            spotlightBox.innerHTML = `<div class="accord-item">
                        <div class="accord-topic">${spots.name}  <span class="arrow">&#10140;</span></div>
                        <div class="accord-text">${spots.description}</div></div>`;
         */
        
        let spotDiv = document.createElement("div");
        spotDiv.innerHTML = `<div class="accord-topic">${spots.name}  <span class="arrow">&#10140;</span></div>
                                        <div class="accord-text">${spots.description}</div></div>`;
        spotDiv.setAttribute('class', 'accord-item');     
                   
        spotlightBox.appendChild(spotDiv);
        })
        


    } else if (level === "Silver") {
        spotsSilver.forEach(spots =>{/* 
            spotlightBox.innerHTML = `<div class="accord-item">
                        <div class="accord-topic">${spots.name}  <span class="arrow">&#10140;</span></div>
                        <div class="accord-text">${spots.description}</div></div>`;
         */
        let spotDiv = document.createElement("div");
        spotDiv.innerHTML = `<div class="accord-topic">${spots.name}  <span class="arrow">&#10140;</span></div>
                            <div class="accord-text">${spots.description}</div></div>`;
        spotDiv.setAttribute('class', 'accord-item');     
       
        spotlightBox.appendChild(spotDiv);
        
        
        
        })

    }

    let arrow = document.querySelectorAll('.arrow');
    let titles = document.querySelectorAll('.accord-topic');
    
    titles.forEach(topic => {
        topic.addEventListener("click", () => {
            const text = topic.nextElementSibling;
            
            text.style.display = text.style.display === "block" ? "none" : "block";
        });
    });

}

addSpots();


