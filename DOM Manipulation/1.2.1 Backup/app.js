
//--- 1.2 --- adding / removing items from view.


//--- 1.0 Setting variables to target ul list title
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

//--- 1.1 New Variabls to hide/show container
const toggleList = document.getElementById('toggle-list');
const listDiv = document.querySelector('.list');

//--- 1.2 New Variables to add new Items to ul
const addItemInput = document.querySelector('input.add-item-input');
const addItemButton = document.querySelector('button.add-item-button');
const removeItemButton = document.querySelector('button.remove-item-button');


//--- 1.1 Button event + conditional to hide or show content
toggleList.addEventListener('click',() => {

  
  if(listDiv.style.display == 'none'){
    listDiv.style.display = 'block';
  toggleList.textContent = 'Hide list';
  }else{
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
  }
});

//--- Assigning button to update ul p title
descriptionButton.addEventListener('click',() => {
descriptionP.textContent = descriptionInput.value+':';    
descriptionInput.value = '';                                   
                        });

//--- 1.2 Click event for add item feature
addItemButton.addEventListener('click', () =>{
 let ul = document.getElementsByTagName('ul')[0];
 let li = document.createElement('li');
li.textContent = addItemInput.value;
ul.appendChild(li);
addItemInput.value = '';
                               });

removeItemButton.addEventListener('click', () =>{
 let ul = document.getElementsByTagName('ul')[0];
 let li = document.querySelector('li:last-child');
ul.removeChild(li);
                               });