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
    var emailTest = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    // old test - var emailTest = /^\S+@\S+\.\S+$/;

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

    //Email Field
    if (!emailTest.test(userEmail))
        userEmailError.innerHTML = 'The Email field must be formatted as an email address.';
        userEmailError.classList.add("active-error");
        isValid = false;

}

//Regex Testing
var alphaTest = /^[a-zA-Z]{1,20}$/;
var emailTest = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

//First Name Validation
var firstName = document.getElementById("firstName");
var firstNameError = document.getElementById("firstName-error");

firstName.addEventListener("blur", (event) => {
    if (!alphaTest.test(firstName.value)) {
        firstNameError.innerHTML = 'The First Name field must contain up to 20 alphabetical characters.';
        firstNameError.classList.add("active-error");
        isValid = false;
    } else {
        firstNameError.innerHTML = '';
        firstNameError.classList.remove("active-error");
        isValid = true;
    }
});

//Last Name Validation
var lastName = document.getElementById("lastName");
var lastNameError = document.getElementById("lastName-error");

lastName.addEventListener("blur", (event) => {
    if (!alphaTest.test(lastName.value)) {
        lastNameError.innerHTML = 'The Last Name field must contain up to 20 alphabetical characters.';
        lastNameError.classList.add("active-error");
        isValid = false;
    } else {
        lastNameError.innerHTML = '';
        lastNameError.classList.remove("active-error");
        isValid = true;
    }
});