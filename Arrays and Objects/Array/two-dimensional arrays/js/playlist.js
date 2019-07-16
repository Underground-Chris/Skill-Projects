  /*'Dancin in the moonlite',
  'Lucky Star',
  'Dreams',
  'Get into the grove',
  'Landslide',
  'Roxanne'*/

var playList = [
  ['Lucky Star', 'Madonna'],
  ['Dreams', 'Fleetwood Mac'],
  ['Rebel Yell', 'Billy Joel'],
  ['Payback', 'James Brown'],
  ['Tiny Dancer', 'Elton John']
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' ' + songs[i][1] +'</li>';
  }
  listHTML += '</ol>'; 
  print(listHTML);
}

printSongs(playList);





















