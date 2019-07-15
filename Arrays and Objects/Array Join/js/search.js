//Due to how browsers work now this will need you to exit the program before seeing the actual results print to the page.

//array of instock products
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber' , 'chips'];
var search;

//printing function to the screen

function print(message) {
  document.write( '<p>' + message + '</p>');
}
// while loop to capture program functionality
while(true){
search = prompt("Search for a product in our store. Type 'list' to show all the produce we have or type 'quit' to exit");
  search = search.toLowerCase();
  if(search === 'quit' ){
    break;
  }else if( search === 'list'){
 print(inStock.join(', '));
}else{
  if( inStock.indexOf(search) > -1 ){
    print('Yes we have '+ search + ' in stock.');
  } else{
  print('Sorry '+ search + ' we dont have it.');
  }
}
}

