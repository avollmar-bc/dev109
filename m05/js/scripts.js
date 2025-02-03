/*-- Imported from: https://javascriptbook.com/code/c04/js/example.js --*/

var userSelection = prompt("Please enter a number between 0 and 10", "7");

function docReady(userSelction) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(userSelection, 100);
  } else {
      document.addEventListener("DOMContentLoaded", userSelection);
  }
}    


 function integerCheck(userSelection) {  //Checks if user input is an integer
  var isInt = /^\d+$/.test(userSelection);  //Tests input against a regex
  if (isInt) {  //Input is an integer
    input = Math.round(userSelection);  //Round to nearest whole number
    return input; //Returns sanitized input
  } else {  //Contains characters other than numbers
    return false;
  }
}

if (integerCheck(userSelection)) {
  var table = integerCheck(userSelection);
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
