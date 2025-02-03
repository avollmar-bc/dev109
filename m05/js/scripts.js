/*-- Imported from: https://javascriptbook.com/code/c04/js/example.js --*/

var userSelection = prompt("Please enter a number between 0 and 10. \nNOTE: The result with be rounded to the nearest whole number.", "7");

 function inputCheck(input) {  //Validates input

  if (isNaN(input) == false && input >10) { //If greater than 10, alert and reload/reprompt
    alert("BETWEEN 0 and 10, silly. Try again.");
    window.location.reload(); //Reload page
    return false;
  }

  if (isNaN(input) || input > 10 || input == "0" || input < 0) { //NaN or 0 conditional
    return 0;
  } else { //Validated input makes it here
    var result = Math.round(input);  //Round to nearest whole number
    return result; //Returns sanitized input
  }
}

var table = inputCheck(userSelection); //Run function above and use return value as final user input
var i = 1; // Initialize counter to 1
var msg = '<h2>Multiplication Table</h2>'; //Populate heading

//Stripped out operator conditional.

while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;
  var el = document.getElementById('blackboard'); // Write the message into the page
  el.innerHTML = msg;
}