
//--- 1.1 --- adding / removing items from view.


//---Setting variables to target ul list title
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

//--- New Functionality to hide/show container
const toggleList = document.getElementById('toggle-list');
const listDiv = document.querySelector('.list');

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
button.addEventListener('click',() => {
 p.textContent = input.value+':';               
                        });

p.title = 'List description';