const input = document.getElementById('favchap');
/* querySelector('#favchap'); */
const button = document.querySelector('button');
const list = document.querySelector('#list');



/* Create a click event listener for the Add Chapter button using an addEventListener. */
/* button.addEventListener('click', function() {
    if (input.value.trim() !== ''){
        let liItem = document.createElement('li');
        let deleteButton = document.createElement('button');

        liItem.textContent = input.value;
        deleteButton.innerHTML = '&#x274C';

        liItem.append(deleteButton);

        list.append(liItem);
        input.value = '';

        deleteButton.addEventListener('click', function() {
            list.removeChild(liItem);
            input.value = '';
            input.focus();
        
        });
    
    }
    else{        
        input.focus();
    }

    
}); */



input.focus();

/* Web Storage API - localStorage Activity */
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let liItem = document.createElement('li');
    let deleteButton = document.createElement('button');

    liItem.textContent = item;
    deleteButton.innerHTML = '&#x274C';
    deleteButton.classList.add('delete');

    liItem.append(deleteButton);

    list.append(liItem);
    input.value = '';

    deleteButton.addEventListener('click', function() {
        list.removeChild(liItem);
        input.value = '';
        input.focus();
    
    });
};


function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); 
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}