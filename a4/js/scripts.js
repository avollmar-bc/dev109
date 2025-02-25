function validateForm() {

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

    //Error Fields
    var firstNameError = document.getElementById("firstName-error");
    var lastNameError = document.getElementById("lastName-error");
    var userEmailError = document.getElementById("userEmail-error");
    var phoneError = document.getElementById("phone-error");
    var userNameError = document.getElementById("userName-error");
    var passwordError = document.getElementById("password-error");
    var addressError = document.getElementById("address-error");
    var cityNameError = document.getElementById("cityName-error");
    var statenameError = document.getElementById("stateName-error");
    var countryNameError = document.getElementById("countryName-error");
    var zipCodeError = document.getElementById("zipCode-error");
    var commentsError = document.getElementById("comments-error");

    //Blanket validation flag
    var isValid = true;

    //Regexs

    //Alpha only - up to 20 characters
    var alphaTest = /^[a-zA-Z]{1,20}$/;

    //First Name Field
    if (!alphaTest.test(firstName)) {
        firstNameError.innerHTML = 'The First Name field must contain up to 20 alphabetical characters.';
        firstNameError.classList.add("active-error");
        isValid = false;
    }

    //Last Name Field
    if (!alphaTest.test(lastName)) {
        lastNameError.innerHTML = 'The First Name field must contain up to 20 alphabetical characters.';
        lastNameError.classList.add("active-error");
        isValid = false;
    }

}

//Form Error Cleanup

//First Name Field
document.getElementById("firstName").addEventListener("input", function() {
    var firstNameError = document.getElementById("firstName-error");
    firstNameError.textContent = "";
    firstNameError.classList.remove("active-error");
});

//Last Name Field
document.getElementById("lastName").addEventListener("input", function() {
    var lastNameError = document.getElementById("lastName-error");
    lastNameError.textContent = "";
    lastNameError.classList.remove("active-error");
});