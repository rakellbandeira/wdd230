const baseURL = "https://rakellbandeira.github.io/wdd230/";

const linksURL = "https://rakellbandeira.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

   /*  console.log(data[0]); */
    displayLinks(data.members);
}

const displayLinks = (data) =>{
/*     console.log(`This data parameter: ${data[0].name}`);
 */

let membersContainer = document.querySelector('#members-container');
let listContainer = document.querySelector('#list-container');

    data.forEach(element => {

        let membersBox = document.createElement('div');
 
        let membersParag = document.createElement('p');
        membersParag.textContent = `${element.name}`;
        let membersParag2 = document.createElement('p');
        membersParag2.textContent = `${element.address}`;
        let membersParag3 = document.createElement('p');
        membersParag3.textContent = `${element.phone}`;
        let membersParag4 = document.createElement('p');
        membersParag4.textContent = `${element.website}`;
        let membersParag5 = document.createElement('img');
        let imgSrc = element.image;
        membersParag5.setAttribute = ('src', imgSrc);
        membersParag5.setAttribute = ('height', 150);
        membersParag5.setAttribute = ('width', 150);


        let membersParag6 = document.createElement('p');
        membersParag6.textContent = `Membership Level: ${element.membershipLevel}`;
        let membersParag7 = document.createElement('p');
        membersParag7.textContent = `Services: ${element.services}`;
        let membersParag8 = document.createElement('p');
        membersParag8.textContent = `${element.description}`;

            
                

            
            membersBox.setAttribute('class', 'members-box');
           
            membersBox.appendChild(membersParag);
            membersBox.appendChild(membersParag2);
            membersBox.appendChild(membersParag3);
            membersBox.appendChild(membersParag4);
            membersBox.appendChild(membersParag5);
            membersBox.appendChild(membersParag6);
            membersBox.appendChild(membersParag7);
            membersBox.appendChild(membersParag8);
            listContainer.appendChild(membersBox);
            membersContainer.appendChild(listContainer);

        
        
    });

}

getLinks();