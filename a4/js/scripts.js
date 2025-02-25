function validateForm(e) {
    e.preventDefault();

    //Collect field values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userEmail = document.getElementById("userEmail").value;
    var phone = document.getElementById("phone").value;
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var cityName = document.getElementById("cityName").value;
    var statename = document.getElementById("stateName").value;
    var countryName = document.getElementById("countryName").value;
    var zipCode = document.getElementById("zipCode").value;
    var comments = document.getElementById("comments").value;

    //Blanket validation flag
    var isValid = true;


    //First Name Field
    if (firstName==="null" || firstName==="" || firstName.length > 20) {
        document.getElementById('firstName-error').innerHTML = 'The First Name field is required and may only have up to 20 characters.';
        isValid = false;
    }
}