var person = {
  name : 'Chris',
  country : 'US',
  age : 32,
  student : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};
var message = '<p>Hello. My name is '+ person.name + '</p>';
message +=  '<p>I live in the '+ person.country + '</p>';

//modifying value
person.name = "Zaps";

//reestablishing value after i renamed it
message += '<p>But, I wish my name was '+ person.name + '</p>';

//gonna add a year to my age
person.age +=1;
message += '<p>In about 3 weeks I will be ' + person.age + ' </p>';
message += '<p>I have ' + person.skills.length + ' skills </p>';
message += 'My skills are ' + person.skills.join(', ') + '</p>';

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}


print(message);
