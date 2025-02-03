/*-- Imported from: https://javascriptbook.com/code/c04/js/example.js --*/

if (document.readyState == 'complete') {}
  var userSelection = prompt("Please enter a number between 0 and 10", "7");
  userSelection;
}
var integerCheck = function(input) {  //Checks if user input is an integer
  var isInt = /^\d+$/.test(input);  //Tests input against a regex
  if (isInt) {  //Input is an integer
    input = Math.round(input);  //Round to nearest whole number
    return input; //Returns sanitized input
  } else {  //Contains characters other than numbers
    return false;
  }
}

if (integerCheck != false) {
  var table = integerCheck;
  var i = 1; // Initialize counter to 1
  var msg = '<h2>Multiplication Table</h2>'; // Message

  //Stripped out conditional statement altogether.

  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
} else {
  alert("You know that's not a number, silly.");
  userSelection;
}
