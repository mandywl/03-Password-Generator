// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var save = document.querySelector("#save");
var userInput = document.querySelector("#enteredNumber");

// Write password to the #password input
function writePassword() {
  clearFields();
  var password = generatePassword();
  passwordText.value = password;
}

function generatePassword() {
  var result = "";
  var inputLength = userInput.value.trim();
  var uppercaseEl = document.getElementById("uppercase");
  var numericEl = document.getElementById("numeric");
  var specialEl = document.getElementById("specialCharacters");
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890";
  var specialCharacters = "!@#$%^&*()~_+";
  var selection = lowercase;

  if (inputLength < 8 || inputLength > 128 || inputLength == "") {
    alert("Please enter an number between 8 and 128");
  } else {
    if (uppercaseEl.checked) {
      selection = selection + uppercase;
    }
    if (numericEl.checked) {
      selection = selection + number;
    }
    if (specialEl.checked) {
      selection = selection + specialCharacters;
    }

    for (var i = 0; i < inputLength; i++) {
      var charactersLength = selection.length;
      result += selection.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

function clearFields() {
  passwordText.value = "";
}
// Add event listener to generate button
save.addEventListener("click", writePassword);
generateBtn.addEventListener("click", clearFields);
