//json based attendence app - parses employee for mock tracking

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4){
    //console.log(typeof xhr.responseText);
    
    const employees = JSON.parse(xhr.responseText);
    let statusHTML = '<ul class="bulleted">';
    let employee;
    for(let i=0; i<employees.length; i++){
      //looping through employees building html
       employee = employees[i];
      let status = employees[i].inoffice;
      if(employees[i].inoffice ){
        statusHTML += '<li class="in">';
      }else{
         statusHTML += '<li class="out">';
      }
       statusHTML += employee.name +'</li>'
    }
    statusHTML += '</ul>'
    document.querySelector('#employeeList').innerHTML = statusHTML;
  }
}
xhr.open('GET', 'data/employees.json');
xhr.send();

