function validateRegister(){
let first_name=document.getElementById("first_name").value
let last_name=document.getElementById("last_name").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value
let terms = document.getElementById("terms");

let firstNameError=document.getElementById("firstNameError")
let lastNameError=document.getElementById("lastNameError")
let emailError=document.getElementById("emailError")
let passwordError=document.getElementById("passwordError")
let termsError=document.getElementById("termsError")

  firstNameError.innerText = "";
  lastNameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  termsError.innerText = "";

let isValid = true;

  if(first_name==""){
    firstNameError.innerText="Please enter valid first name"
    isValid = false
  }
  if(last_name==""){
    lastNameError.innerText="Please enter valid last name"
    isValid = false
  }
  if(email==""){
    emailError.innerText="Please enter valid email"
    isValid = false
  }
  if(password.length<6){
    passwordError.innerText="Password should be 6 characters long"
    isValid = false
  }
  if (!terms.checked) {
  termsError.innerText = "You must accept the terms and conditions";
  isValid = false;
}
  return isValid
}

function validateLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  emailError.innerText = "";
  passwordError.innerText = "";

  let isValid = true;

  if (email === "") {
    emailError.innerText = "Please enter your email";
    isValid = false;
  }

  if (password === "") {
    passwordError.innerText = "Please enter your password";
    isValid = false;
  }

  return isValid;
}
