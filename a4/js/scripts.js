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

    //Blanket validation flag
    var isValid = true;


    //First Name Field
    if (firstName==="null" || firstName==="" || firstName.length > 20) {
        firstNameError.innerHTML = 'The First Name field is required and may only have up to 20 characters.';
        firstNameError.classList.add("active-error");
        isValid = false;
    }

}

//Form Error Cleanup

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

firstName.addEventListener("input", function() {
    firstNameError.textContent = "";
    firstNameError.classList.remove("active-error");
});