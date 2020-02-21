function clearFields() {
  console.log("clear");
  document.getElementById("text").innerHTML = "";
}

function makeid(characters) {
  var result = "";
  var charactersLength = characters.length;
  var randomLength = Math.floor(Math.random() * 128);
  console.log(randomLength);
  for (var i = 0; i < randomLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function myFunction() {
  var lowercaseEl = document.getElementById("lowercase");
  var uppercaseEl = document.getElementById("uppercase");
  var numericEl = document.getElementById("numeric");
  var specialEl = document.getElementById("specialCharacters");

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890";
  var specialCharacters = "!@#$%^&*()~_+";
  var selection = lowercase;

  if (uppercaseEl.checked) {
    selection = selection + uppercase;
  }
  if (numericEl.checked) {
    selection = selection + number;
  }
  if (specialEl.checked) {
    selection = selection + specialCharacters;
  }
  var passwordResult = makeid(selection);
  $("#text").append(passwordResult);
}
