
//--- Playing with Values and inputs


//---Setting variables to target ul list title
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

//--- Assigning button to update ul p title
button.addEventListener('click',() => {
 p.innerHTML = input.value+':'                  
                        });