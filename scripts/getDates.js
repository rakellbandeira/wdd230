
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