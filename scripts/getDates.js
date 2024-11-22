
// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

// get the current year
const currentYear = new Date().getFullYear();
document.getElementById('curYear').textContent = currentYear;

// get the document's last modified date
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;


/* Visit Number dynamic */
let visitBox = document.getElementById('visitParag');
let currentDate = Date.now();
let lastVisit = localStorage.getItem('lastVisit');
let message = 'Welcome!';

if (!lastVisit) {
    
    message = "Welcome! Let us know if you have any questions.";
} else {
    
    let timeDifference = currentDate - lastVisit; 
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 

    if (daysDifference < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysDifference} days ago.`;
    }
}

visitBox.textContent = message;
localStorage.setItem('lastVisit', currentDate);