function addListItem(itemName) {

    // Blank input - kill function
    if (itemName == '') {
        alert('Add an item before submitting, dingdong.');
        return false;
    }

    // Create a new element and store it in a variable.
    var newEl = document.createElement('li');

    // Create a text node and store it in a variable.
    var newText = document.createTextNode(itemName);

    // Attach the new text node to the new element.
    newEl.appendChild(newText);

    // Find the position where the new element should be added.
    var position = document.getElementsByTagName('ul')[0];

    // Insert the new element into its position.
    position.appendChild(newEl);

    var formField = document.getElementById("itemInput");
    formField.value = '';
}