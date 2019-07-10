
// Playlist array setup
var playList = [
  'Cocaine',
  'Payback',
  'Dancin in the Moonlite',
  'Simple Man',
  'Rebel Yell',
  'Dreams'
];

// function to call printing to page
function print(message){
  document.write(message);
}

// format and loop through list
function printList( list ){
  var listHtml = '<ol>';
  
  for(var i = 0; i < list.length;  i++){
    listHtml += '<li>' + list[i] + '</li>';
  }
  listHtml+= '</ol>';
  //prints the formatted ol
  print(listHtml);
}

//pass the array to the function
printList(playList);



