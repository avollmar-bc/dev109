/*-- Imported from: https://javascriptbook.com/code/c04/js/example.js --*/

var userSelection = prompt("Please enter a number between 0 and 10. \nNOTE: The result with be rounded to the nearest whole number.", "7");

 function integerCheck(input) {  //Checks if user input is an integer
  if (isNaN(input) == false && input <= 10 && input <= 0) {  //Input is an integer and within range
    input = Math.round(input);  //Round to nearest whole number
    return input; //Returns sanitized input
  } else {  //Contains characters other than numbers
    alert("Read the instructions, silly. Try again");
    window.location.reload();
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
}