const input = document.getElementById('favchap');
/* querySelector('#favchap'); */
const button = document.querySelector('button');
const list = document.querySelector('#list');



/* Create a click event listener for the Add Chapter button using an addEventListener. */
button.addEventListener('click', function() {
    if (input.value.trim() !== ''){
        const liItem = document.createElement('li');
        const deleteButton = document.createElement('button');

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

    
});



input.focus();
