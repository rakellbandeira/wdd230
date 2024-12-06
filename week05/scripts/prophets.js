const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

const footer = document.querySelector('#footer');
const myName = document.createElement("span");
const activityName = document.querySelector('#activityName');
myName.textContent = `Rakell Bandeira`;
footer.appendChild(myName);
footer.appendChild(activityName);





async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
/*     console.log(data.prophets);
 */
    displayProphets(data.prophets);

}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2'); 
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');


    
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
            
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
    
        cards.appendChild(card);
        
    });
}


getProphetData();