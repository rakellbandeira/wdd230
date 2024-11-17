/* navigation dynamic */

const hamButton = document.querySelector('#buttonMenu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});



/* dynamic of hero form */
const industries = [
    {
        id: "retail",
        name: "Retail and Consumer Goods"
    },
    {
        id: "tourism",
        name: "Hospitality and Tourism"
    },
    {
        id: "healthcare",
        name: "Healthcare and Wellness"
    },
    {
        id: "realEstate",
        name: "Construction and Real Estate"
    },
    {
        id: "Services",
        name: "Professional Services"
    },
    {
        id: "technology",
        name: "Technology and Innovation"
    },
    {
        id: "Media",
        name: "Arts, Entertainment, and Media"
    }
];

document.addEventListener("DOMContentLoaded", ()=> {
   const selectElement = document.getElementById("indusName");

   industries.forEach(industry =>{
    const option = document.createElement("option");
    option.value= industry.id;
    option.textContent = industry.name;
    option.className = "selectOption";

    selectElement.appendChild(option);

   });
    
});


/* cards dynamic */
function scrollCards(direction) {
    const cardWrapper = document.querySelector('.card-wrapper');
    const scrollAmount = 300; // I adjusted based on card width + margin
  
    if (direction === 'left') {
      cardWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      cardWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
};


/* spotlights dynamic */
document.addEventListener('DOMContentLoaded', function () {
    const spotItems = document.querySelectorAll('.accord-item');

    spotItems.forEach(item => {
        const topic = item.querySelector('.accord-topic');
        const arrow = item.querySelector('.arrow');
        topic.addEventListener('click', () =>{
            item.classList.toggle('active');
        });
    });
});

/* footer dynamic */
let currentYear = document.getElementById('currentYear');
currentYear.innerHTML = '2024';

let dateMod = new Date(document.lastModified);
let date = dateMod.getDate();
let month = dateMod.getMonth();
let year = dateMod.getFullYear();
let hour = dateMod.getHours();
let min = dateMod.getMinutes();

let lastModified = document.getElementById('lastModified');
lastModified.innerHTML = `Last Modified: ${date}/${month}/${year} ${hour}:${min}`;

