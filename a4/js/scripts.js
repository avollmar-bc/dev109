
//Fires on form submit
function validateForm() {

    isValid = true;

//On submit, catch and test each field for validation
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
    if (!emailTest.test(userEmail)) {
        userEmailError.innerHTML = 'The Email field must be formatted as an email address.';
        userEmailError.classList.add("active-error");
        isValid = false;
    }

    //Phone Field
    if (!phoneTest.test(phone.value)) {
        phoneError.innerHTML = 'The Phone field must be a properly formatted phone number.';
        phoneError.classList.add("active-error");
        isValid = false;
    }

    //Username Field
    if (!userNameTest.test(userName.value)) {
        userNameError.innerHTML = 'The Username field must be between 6 and 12 alphanumeric characters.';
        userNameError.classList.add("active-error");
        isValid = false;
    }

    //Password Field
    if (!passwordTest.test(password.value)) {
        passwordError.innerHTML = 'Your password must contain at least ONE uppercase, ONE lowercase, ONE number, and ONE special character.';
        passwordError.classList.add("active-error");
        isValid = false;
    }

    //Zipcode Field
    if (!zipCodeTest.test(zipCode.value)) {
        zipCodeError.innerHTML = 'Must be a valid 5-digit zip code.';
        zipCodeError.classList.add("active-error");
        isValid = false;
    } 

    return isValid;
}
//End validateForm function

//Regex Testing
var alphaTest = /^[a-zA-Z]{1,20}$/;

//Regex pulled from - https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript?page=2&tab=scoredesc
var emailTest = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

//Regex pulled from - https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
var phoneTest = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

var userNameTest = /^[0-9A-Za-z]{6,12}$/;

//Pulled from https://regexlib.com/Search.aspx?k=password&c=0&m=0&ps=20&p=4
var passwordTest = /^(?=.*[a-z])(?=.*[A-Z])((?=.*\d)|(?=.*[!@#$%^&*()'"]))[A-Za-z\d!@#$%^&*()'"](?!\s).{5,7}$/;

var zipCodeTest = /^[0-9]{5}$/;



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

//Email Validation
var userEmail = document.getElementById("userEmail");
var userEmailError = document.getElementById("userEmail-error");

userEmail.addEventListener("blur", (event) => {
    if (!emailTest.test(userEmail.value)) {
        userEmailError.innerHTML = 'The Email field must be a properly formatted email address.';
        userEmailError.classList.add("active-error");
        isValid = false;
    } else {
        userEmailError.innerHTML = '';
        userEmailError.classList.remove("active-error");
        isValid = true;
    }
});

//Phone Validation
var phone = document.getElementById("phone");
var phoneError = document.getElementById("phone-error");

phone.addEventListener("blur", (event) => {
    if (!phoneTest.test(phone.value)) {
        phoneError.innerHTML = 'The Phone field must be a properly formatted phone number.';
        phoneError.classList.add("active-error");
        isValid = false;
    } else {
        phoneError.innerHTML = '';
        phoneError.classList.remove("active-error");
    }
});

//Snippet pulled from - https://stackoverflow.com/questions/30058927/format-a-phone-number-as-a-user-types-using-pure-javascript
//Now THIS is podracing!
window.addEventListener('load', () => {
    const phoneInput = document.getElementById("phone");
    phoneInput.addEventListener('keydown', disallowNonNumericInput);
    phoneInput.addEventListener('keyup', formatToPhone);
  });
  
  const disallowNonNumericInput = (evt) => {
    if (evt.ctrlKey) { return; }
    if (evt.key.length > 1) { return; }
    if (/[0-9.]/.test(evt.key)) { return; }
    evt.preventDefault();
  }
  const formatToPhone = (evt) => {
    const digits = evt.target.value.replace(/\D/g,'').substring(0,10);
    const areaCode = digits.substring(0,3);
    const prefix = digits.substring(3,6);
    const suffix = digits.substring(6,10);
  
    if(digits.length > 6) {evt.target.value = `(${areaCode}) ${prefix}-${suffix}`;}
    else if(digits.length > 3) {evt.target.value = `(${areaCode}) ${prefix}`;}
    else if(digits.length > 0) {evt.target.value = `(${areaCode}`;}
  };
//End Snippet

//Username Validation
var userName = document.getElementById("userName");
var userNameError = document.getElementById("userName-error");

userName.addEventListener("blur", (event) => {
    if (!userNameTest.test(userName.value)) {
        userNameError.innerHTML = 'The Username field must be between 6 and 12 alphanumeric characters.';
        userNameError.classList.add("active-error");
        isValid = false;
    } else {
        userNameError.innerHTML = '';
        userNameError.classList.remove("active-error");
    }
});

//Password Validation
var password = document.getElementById("password");
var passwordError = document.getElementById("password-error");

password.addEventListener("blur", (event) => {
    if (!passwordTest.test(password.value)) {
        passwordError.innerHTML = 'Your password must contain at least ONE uppercase, ONE lowercase, ONE number, and ONE special character.';
        passwordError.classList.add("active-error");
        isValid = false;
    } else {
        passwordError.innerHTML = '';
        passwordError.classList.remove("active-error");
    }
});

//Zipcode Validation/Conditional
var zipCode = document.getElementById("zipCode");
var zipCodeError = document.getElementById("zipCode-error");

zipCode.addEventListener("blur", (event) => {
    if (!zipCodeTest.test(zipCode.value)) {
        zipCodeError.innerHTML = 'Must be a valid 5-digit zip code.';
        zipCodeError.classList.add("active-error");
        isValid = false;
    } else {
        zipCodeError.innerHTML = '';
        zipCodeError.classList.remove("active-error");
    }
});

var countryName = document.getElementById("countryName");
countryName.addEventListener("change", (event) => {
    zipCodeError.innerHTML = '';
    zipCodeError.classList.remove("active-error");
    if (countryName.value == 'United States') {
        zipCode.value = '';
        zipCode.disabled = false;
        zipCode.required = true;
    } else {
        zipCode.value = '';
        zipCode.disabled = true;
        zipCode.required = false;
    }
});
