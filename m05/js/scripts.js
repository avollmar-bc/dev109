/*-- Imported from: https://javascriptbook.com/code/c04/js/example.js --*/

var userSelection = prompt("Please enter a number between 0 and 10. \nNOTE: The result with be rounded to the nearest whole number.", "7");

 function inputCheck(input) {  //Checks if user input is an integer
  if (isNaN(input) || input > 10 || input == "0" || input < 0) { //Zero edge case.
    return 0;
  } else {
    var result = Math.round(input);  //Round to nearest whole number
    return result; //Returns sanitized input
  }
}

var table = inputCheck(userSelection);
var i = 1; // Initialize counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message

//Stripped out operator conditional.

while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
}