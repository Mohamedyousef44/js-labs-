
function printError(element, msg) {
  document.getElementById(element).innerHTML = msg;
}

// Defining a function to validate form

function validateForm() {

  var email = document.login.email.value;
  var pass = document.login.pass.value;
  var emailErr = passErr =  true;

  // Validate email address

  if (email == "") {

    printError("emailErr", "Please enter your email address");

  } else {

    var regex = /^\S+@\S+\.\S+$/;

    if (regex.test(email) === false) {

      printError("emailErr", "Please enter a valid email address");

    } else {

      printError("emailErr", "");
      emailErr = false;

    }
  }

  // Validate password

  if (pass == "") {

    printError("passErr", "Please enter your password");

  } else {

    var regex = /^\d[a-z]{8}\d$/;

    if (regex.test(pass) === false) {

      printError("passErr", "Please enter a valid number password start and end with num");
    } else {

      printError("passErr", "");
      passErr = false;

    }
  }
  
  // Prevent the form from being submitted if there areany errors
  if (( emailErr || passErr ) == true) {

    return false;

  } else {

    var dataPreview = "You've entered the following details: \n" +  "Email Address: " + email + "\n" + "password: " + pass + "\n" ;
    alert(dataPreview);

  }
};
