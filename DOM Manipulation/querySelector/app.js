//---li initial color to purple
const myList = document.getElementsByTagName('li');

for(let i=0; i<myList.length;  i++){
  myList[i].style.color = 'purple';
}

//---Non Purple li selectors
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for(let i=0; i<errorNotPurple.length;  i++){
  errorNotPurple[i].style.color = 'red';
}

//---Zebra Stripe
const odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0; i<odd.length;  i++){
  odd[i].style.backgroundColor = '#f3f3f3';
}