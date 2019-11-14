// JSON parse Employee status and Room Status Mock app

const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/employees.json');
xhr.send();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};


const roomRequest = new XMLHttpRequest();
roomRequest.open('GET', '../data/rooms.json');
roomRequest.send();
roomRequest.onreadystatechange = function() {
  if(roomRequest.readyState === 4 && roomRequest.status === 200){
    const rooms = JSON.parse(roomRequest.responseText);
    let roomsHTML = '<ul class="rooms">';
    for(let i=0; i<rooms.length; i++){
      let roomNum = rooms[i].room
      if(rooms[i].available){
        roomsHTML += '<li class="empty">';
      }else{
        roomsHTML += '<li class="full">';
      }
      roomsHTML+= roomNum + '</li>';
    }
    roomsHTML += '</ul>';
    document.querySelector('#roomList').innerHTML = roomsHTML;
  }
};

