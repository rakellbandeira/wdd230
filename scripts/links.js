
const baseURL = "https://rakellbandeira.github.io/wdd230/";

const linksURL = "https://rakellbandeira.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    
    console.log(data.weeks);
    displayLinks(data.weeks);
  }


const displayLinks = (data) => {

    console.log(`This data parameter: ${data[0].week}`);
    data.forEach(element => {
        
        let div = document.querySelector('#act-box');

        let ulElement = document.createElement('ul');

        let liItem = document.createElement('li');
        /* console.log(`${element.week}`); */
        liItem.textContent = `${element.week}: `;

        let linksList = element.links;
        

        linksList.forEach(link => {

            
            let linkA = document.createElement('a');

            let linkURL = link.url;

            linkA.setAttribute('href', linkURL);
            /* console.log(linkURL); */
            linkA.textContent = `${link.title} | `;
            /* console.log(link.title); */

            liItem.appendChild(linkA);
            
        })

        ulElement.appendChild(liItem);
        div.appendChild(ulElement);
        

    });

}
  



  
getLinks();